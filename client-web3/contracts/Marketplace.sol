// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Marketplace is ReentrancyGuard {

    // Variables
    address payable public feeAccount;
    uint public feePercent; // the fee percentage on sales
    uint public itemCount;

    struct Item {
        uint itemId;
        IERC721 nft;
        uint tokenId;
        uint price;
        address payable seller;
        bool sold;
    }

    // itemId -> Item
    mapping(uint => Item) public items;
    mapping (address => uint) private ownerItemsCount;
    mapping (address => uint) private ownerItemProfile;
    mapping (uint => address) private itemToOwner;

    event Offered(
        uint itemId,
        address indexed nft,
        uint tokenId,
        uint price,
        address indexed seller
    );
    event Bought(
        uint itemId,
        address indexed nft,
        uint tokenId,
        uint price,
        address indexed seller,
        address indexed buyer
    );
    event changeProfile(
        uint tokenId,
        address user
    );

    constructor(uint _feePercent) {
        feeAccount = payable(msg.sender);
        feePercent = _feePercent;
    }

    // Make item to offer on the marketplaceState
    function makeItem(IERC721 _nft, uint _tokenId, uint _price) external nonReentrant {
        require(_price > 0, "Price must be greater than zero");
        // increment itemCount
        itemCount ++;
        // transfer nftState
        _nft.transferFrom(msg.sender, address(this), _tokenId);
        // add new item to items mapping
        items[itemCount] = Item (
            itemCount,
            _nft,
            _tokenId,
            _price,
            payable(msg.sender),
            false
        );
        // emit Offered event
        emit Offered(
            itemCount,
            address(_nft),
            _tokenId,
            _price,
            msg.sender
        );
    }

    function _purchaseItem(uint _itemId) internal payable nonReentrant {
        uint _totalPrice = getTotalPrice(_itemId);
        Item storage item = items[_itemId];
        require(_itemId > 0 && _itemId <= itemCount, "item doesn't exist");
        require(msg.value >= _totalPrice, "not enough ether to cover item price and market fee");
        require(!item.sold, "item already sold");
        // pay seller and feeAccount
        item.seller.transfer(item.price);
        feeAccount.transfer(_totalPrice - item.price);
        // update item to sold
        item.sold = true;
        // transfer nftState to buyer
        item.nft.transferFrom(address(this), msg.sender, item.tokenId);

        itemToOwner[_itemId] = msg.sender;
        ownerItemsCount[msg.sender]++;
        if (ownerItemsCount[msg.sender] == 1)
            ownerItemProfile[msg.sender] = _tokenId;
        // emit Bought event
        emit Bought(
            _itemId,
            address(item.nft),
            item.tokenId,
            item.price,
            item.seller,
            msg.sender
        );
    }


    function getMyItems() external view returns(Item[]) {
        require(ownerItemsCount[msg.sender] > 0, "You have no items");

        Item[] memory result = new Item[](ownerItemsCount[msg.sender]);
        uint counter = 0;

        for (uint i = 0; i < items.length; i++) {
            if (items[i].buyer == msg.sender) {
                result[counter] = items[i];
                counter++;
            }
        }
        return result;
    }

    function setOwnerItemProfile(uint _tokenId) external {
        require(_tokenId > 0 && _tokenId <= itemCount, "item doesn't exist");
        require(itemToOwner[_tokenId] == msg.sender, "It s not your item");

        ownerItemProfile[msg.sender] = _tokenId;

        emit changeProfile(
            item.tokenId,
            msg.sender
        );
    }

    function getOwnerItemProfile(address _owner) external view returns(Item) {
        uint profileTokenId = ownerItemProfile[_owner];
        require(profileTokenId > 0, "No profile set for this user");
        return items[profileTokenId];
    }

    function getTotalPrice(uint _itemId) view public returns(uint){
        return((items[_itemId].price*(100 + feePercent))/100);
    }
}
