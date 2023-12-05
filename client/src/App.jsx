import {SubHeaderTest} from "./components/SubHeader/SubHeaderTest";
import {UiHeader2} from "./components/Header/UiHeader2.jsx";
import {Carousel} from "./components/Carousel/Carousel";

export default function App() {
    return (
        <div className="bg-neutral-300 min-h-screen">
            <UiHeader2 />
            <div className={"pt-8"}>
                <SubHeaderTest/>
            </div>
            <Carousel />


            {/*
            <UiHeader/>
            <SubHeader/>

            */}
        </div>

    )
}