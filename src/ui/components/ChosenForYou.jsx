import React from 'react'
import {SliderForGroups} from "./index";

const ChosenForYou = () => {
    return (
        <div className="mt-4">
            <p className="text-xl font-bold mb-3 ml-4">Chosen For You</p>
            <div className="container1 max-w-[1150px]">
                <SliderForGroups sort={'sales'} product={'bestsellers'}/>
            </div>
        </div>
    )
}
export default ChosenForYou
