import ParanomBoomerang from "../../assets/Gif/ParanomBoomrang.gif";
import btc from "../../assets/Image/btc.png";
import eth from "../../assets/Image/eth.png";
import circleBlueGold from "../../assets/Image/cercleBlueGold.png";
import cercleGold from "../../assets/Image/cercleGold.png";
import cerclePurple from "../../assets/Image/cerclePurple.png";
import cross from "../../assets/Image/cross.png";
import {UiInput} from "../Input/UiInput";



export const SubHeaderTest = () => {
    return (
        <div className="max-w-auto overflow-hidden h-screen">
            <div className="md:flex">
                <div className="md:w-1/2 flex items-center justify-center md:items-start md:justify-start">
                    <img src={eth} alt="eth" className="absolute rounded-full mb-56 md:left-1/4 w-12 md:w-20" />
                    <div className="md:pt-24 mx-auto">
                        <h1 className="text-dark font-bold text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-snug mb-3">
                            Welcolme to Paranom <br/>
                            a web3 NFT card Game <br/>
                        </h1>
                        <p className="tracking-wide text-2xl text-white font-semibold md:text-[18px] lg:text-[22px] xl:text-[28px] 2xl:text-[30px] leading-snug mb-3">
                            Connect your wallet to start playing <br/>
                            the ultimate Web3 Battle Card Game
                        </p>
                        <UiInput />
                        <img src={circleBlueGold} alt="circleBlueGold" width={30} className="absolute top-1/4 -ml-16" />
                        <img src={cerclePurple} alt="cerclePurple" width={30} className="absolute bottom-1/4 md:top-2/4" />
                        <img src={cross} alt="cross" width={40} className="absolute bottom-1/4 md:top-3/4 left-1/4" />
                        <img src={cercleGold} alt="cercleGold" width={40} className="absolute bottom-1/4 md:top-1/4 left-2/4" />
                    </div>
                </div>
                <div className="md:w-1/2 flex items-center justify-center pt-10 md:pt-0">
                    <img src={btc} width={50} alt="btc"  className="rounded-full mt-96" />
                    <img src={ParanomBoomerang} alt="ParanomBoomerang" className="rounded-lg shadow-md border-8 border-violet-200 w-72 sm:w-80 lg:w-7/12 xl:w-6/12" />
                </div>
            </div>
            <div className="w-full max-w-lg">
                <div
                    className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div
                    className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div
                    className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div
                    className="invisible 2xl:visible absolute bottom-1/4 right-2/4 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>
        </div>
    )
}