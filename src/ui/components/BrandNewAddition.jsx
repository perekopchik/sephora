import React from 'react'
import { SliderForGroups} from "./index";

const BrandNewAddition = () => {

    return (
        <div >
            <p className="text-xl font-bold mb-3 ml-4">🎉 Brand-New Additions 🎉</p>
            <div className="container1 max-w-[1150px]">
                <SliderForGroups sort={'relevance'} product={'new-arrivals'}/>
            </div>
        </div>
    )
}
export default BrandNewAddition
