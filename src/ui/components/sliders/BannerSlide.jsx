import React, {useRef, useState} from 'react'
import slider1 from '../../assets/slider-1.png'
import slider2 from '../../assets/slider-2.png'
import slider3 from '../../assets/slider-3.png'
import slider4 from '../../assets/slider-4.png'
import slider5 from '../../assets/slider-5.png'
import slider6 from '../../assets/slider-6.png'
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const banner = [{
    img: slider1,
    name: 'Bestselling Beauty',
    text: 'These fan-favourites are worth the hype.',
    backgroundColor: 'bg-[#E37775]',
}, {
    img: slider2,
    name: 'Skincare for Life',
    text: 'Age is just a number, but healthy-looking skin is a science.',
    backgroundColor: 'bg-[#DDCBBF]',
}, {
    img: slider3,
    name: 'The Latest Lineup',
    text: 'New beauty from the hottest brands. ',
    backgroundColor: 'bg-[#FFA99F]',
}, {
    img: slider4,
    name: 'New Jo Malone London',
    text: 'Rediscover Sakura Cherry Blossom Cologne, with notes of cherry blossom, rosewood, and bergamot.',
    backgroundColor: 'bg-[#FCDEE0]',
}, {
    img: slider5,
    name: 'Beauty Must-Haves',
    text: 'Our bestselling picks are worth the hype.',
    backgroundColor: 'bg-[#E37775]',
}, {
    img: slider6,
    name: 'New from Rare Beauty',
    text: 'Get Selena Gomez\'s summer looks with just-dropped shades of the fan-fave Soft Pinch Liquid Blush and NEW Tinted Lip Oil.',
    backgroundColor: 'bg-[#E26086]',
},
]

const BannerSlide = () => {

    const [scrollLeft, setScrollLeft] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(true);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [button, setButton] = useState(false);
    const [underline, setUnderline] = useState(false);

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

    const onMouseEnter = () => {
        setButton(true)
    }
    const onMouseEnterUnderline = () => {
        setUnderline(true)
    }
    const onMouseLeave = () => {
        setButton(false)
    }
    const onMouseLeaveUnderline = () => {
        setUnderline(false)
    }

    const itemsRef = useRef(null);


    return (
        <div className="relative right-[280px] container1 w-[1720px] mt-3 " onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}>
            <div className="flex flex-row bannerItems" ref={itemsRef}
                 style={{transform: `translateX(${-scrollLeft}px)`}}>
                {banner.map((slide, i) => (
                    <div
                        className='w-[545px] h-[555px] flex flex-col mr-2 cursor-pointer rounded-xl '
                        key={i}>
                        <img className="w-[545px] h-[408px] max-w-none rounded-bl-none rounded-br-none rounded" src={slide.img} alt={`slide-${i}`}/>
                        <div className={`${slide.backgroundColor} h-full rounded-tl-none rounded-tr-none rounded `}>
                            <div className="m-5">
                                <p className="text-xl font-bold">{slide.name}</p>
                                <div className={`${underline ? 'hover:underline' : ''}`} onMouseEnter={onMouseEnterUnderline} onMouseLeave={onMouseLeaveUnderline}>
                                    <p className="text-sm mt-1">{slide.text}</p>
                                    <p className="text-sm font-bold mt-3">SHOP NOW▸</p></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {
                button ? (
                    <div>
                        <div
                            className={`bg-[#000000B3] w-[38px] h-[38px] rounded-[30px]  text-white cursor-pointer absolute bottom-[300px] left-[20px] ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`}
                            onClick={() => handleScroll(-1585)}><ArrowBackIosNewIcon
                            className="relative top-1 left-1"/></div>
                        <div
                            className={`bg-[#000000B3] w-[38px] h-[38px] rounded-[30px] text-white cursor-pointer absolute bottom-[300px] left-[1670px] ${canScrollRight ? 'opacity-100' : 'opacity-0'} `}
                            onClick={() => handleScroll(1585)}>
                            <ArrowForwardIosIcon className="relative top-1 left-2"/>
                        </div>
                    </div>
                ) : (<></>)
            }
        </div>
    )
}
export default BannerSlide
