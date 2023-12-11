import {UiHeader} from "../../components/Header/UiHeader.jsx";
import {itemSelectedState} from "../../Atoms/ItemSelectedState.jsx";
import {useRecoilValue} from "recoil";
import {GamePage} from "../GamePage/GamePage";
import {CollectionPage} from "../CollectionPage/CollectionPage";
import {UiFooter} from "../../components/Footer/UiFooter";
import {BallsEffect} from "../../components/BallsEffect/BallsEffect.jsx";

export const HomePage = () => {
    const yourVariable = useRecoilValue(itemSelectedState);
    console.log("yourVariable", yourVariable);
    return (
        <div className="bg-neutral-300 h-full flex items-start justify-center">
            <div className="h-full flex flex-col w-11/12 md:w-11/12 2xl:w-2/3">
                <UiHeader />
                {yourVariable === "Game" ? <GamePage /> : <CollectionPage />}
                <BallsEffect />

                <UiFooter />
            </div>
        </div>
    )
}