import React from 'react'
import {SliderForGroups} from "./index";

const SellingFast = () => {
    return (
        <div className="mt-10">
            <p className="text-xl font-bold mb-3 ml-4">Selling Fast</p>
            <div className="container1 max-w-[1150px]">
                <SliderForGroups sort={'rating'} product={'new-arrivals'}/>
            </div>
            <div className="border-b-[1px] border-solid border-[rgba(0,0,0,0.063)] "></div>
        </div>
    )
}
export default SellingFast
