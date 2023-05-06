import React from 'react'
import {Button} from "@mui/material";

const offers = [{
    img: 'https://www.sephora.com/contentimages/promo/beautyoffers/2023/April/2023-04-14-sse-bundle-c-site-desktop-beauty-offers-banner-1000x750-sc-30-off-us-can-kohls-final.jpg?imwidth=240',
    name: '30% OFF** All Sephora Collection',
    text1: 'Stock up on must-haves during Sephora’s Saving Event.',
    text2: 'In store & online  •  Ends 4/24/2023',
    text3: '**Terms apply.',
    buttonText: 'Shop Now'
},
    {
        img: 'https://www.sephora.com/contentimages/promo/beautyoffers/2023/April/2023-04-14-sse-bundle-c-site-desktop-beauty-offers-banner-1000x750-all-tiers-us-can-kohls-final.jpg?imwidth=240',
        name: 'Sephora’s Savings Event Is On',
        text1: 'Stock up and save on top beauty today.',
        text2: 'In store & online  •  Ends 4/24/2023',
        text3: '‡Exclusions/terms apply. **Discounts cannot be stacked.',
        buttonText: 'Shop Now'
    },
    {
        img: 'https://www.sephora.com/contentimages/promo/beautyoffers/2023/April/2023-04-20-TRYLANEIGEC-slotting-promo-app-beauty-offers-banner-us-ca-handoff.jpg?imwidth=240',
        name: 'Free Skincare Trial Size ',
        text1: 'Moisturize skin using vitamins C and E with LANEIGE’s Radian-C Toner.',
        text2: 'Free with $25 purchase.* ',
        text3: '*Exclusions/terms apply. ',
        buttonText: 'Apply'
    },
]


const BeautyOffers = () => {
    return (
        <div>
            <p className="font-bold text-xl  ml-3">Beauty Offers (3)</p>
            <div className="flex flex-row mt-5">
            {offers.map((offer,i)=>(
                <div className="w-[240px] h-[413px] rounded-lg shadow-[0_5px_10px_0_rgba(0,0,0,0.5)] cursor-pointer hvr-float ml-3 flex flex-col">
                    <img
                    alt={`banner-${i}`}
                        className="w[240px] h-[180px] rounded-tl-lg rounded-tr-lg" src={offer.img}/>
                    <div className="m-3">
                    <p className="text-sm font-bold">{offer.name}</p>
                    <p className="text-sm mt-1">{offer.text1}</p>
                    <p className="text-xs text-[#666666] mt-1">{offer.text2}</p>
                    <p className="text-xs text-[#666666]">{offer.text3}</p>
                        <div className="absolute bottom-5"><Button variant="contained">{offer.buttonText}</Button></div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}
export default BeautyOffers
