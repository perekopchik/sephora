import React, {useRef, useState} from 'react'
import {useGetListByProductGroupQuery} from "../../../engine/services/Sephora";
import {Product} from "../index";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { CircularProgress} from "@mui/material";

const SliderForGroups = ({sort,product}) => {
    const [scrollLeft, setScrollLeft] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(true);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const handleScroll = (value) => {
        const newScrollLeft = scrollLeft + value;
        if (newScrollLeft < 0) {
            setCanScrollLeft(false);
            return;
        } else {
            setCanScrollLeft(true);
        }
        if (newScrollLeft > (itemsRef.current.scrollWidth - itemsRef.current.clientWidth)) {
            setCanScrollRight(false);
            return;
        } else {
            setCanScrollRight(true);
        }
        setScrollLeft(newScrollLeft);
    };

    const {data, isFetching, error} = useGetListByProductGroupQuery({sort,product});


    const itemsRef = useRef(null);

    if (isFetching){
        return (
            <div className=" flex justify-center overflow-hidden mt-32">
                <CircularProgress size="4rem"/>
            </div>
        )
    }
    if (error) return (
        <div style={{textAlign: 'center', fontFamily: 'sans-serif', fontWeight: 'bold'}}>No characters that match that
            name.
            <br/>
            Please search for something else.
        </div>
    )

    return (
        <div>
            <div className="items" ref={itemsRef} style={{transform: `translateX(${-scrollLeft}px)`}}>
                <Product position={true} products={data} excludeFirst={11}/>
            </div>
            <div className={`bg-[#000000B3] w-[38px] h-[38px] rounded-[30px]  text-white cursor-pointer relative bottom-[180px] ${canScrollLeft ? 'opacity-100' : 'opacity-60'}`} onClick={() => handleScroll(-1150)}><ArrowBackIosNewIcon
                className="relative top-1 left-1"/></div>
            <div className={`bg-[#000000B3] w-[38px] h-[38px] rounded-[30px] text-white cursor-pointer relative bottom-[220px] left-[1110px] ${canScrollRight ? 'opacity-100' : 'opacity-60'} `} onClick={() => handleScroll(1150)}>
                <ArrowForwardIosIcon className="relative top-1 left-2"/>
            </div>
        </div>
    )
}
export default SliderForGroups
