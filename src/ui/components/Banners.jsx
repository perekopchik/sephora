import React from 'react'


const banners = [{
    img: 'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/homepage-reassurance-banner-diversity-inclusion-desktop-mobile-us-ca-slice.jpeg?imwidth=315',
    name: 'Our Commitment to Diversity, Equity & Inclusion  \n' +
        '\n',
    text: 'LEARN MORE▸',
    backgroundColor: 'bg-[#BDDCEE]'
},
    {
        img: 'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/homepage-reassurance-banner-ease-convenience-desktop-mobile-us-ca-slice.jpeg?imwidth=315',
        name: 'Beauty on Demand',
        text: 'LEARN MORE▸',
        backgroundColor: 'bg-[#BDDCEE]'
    },
    {
        img: 'https://www.sephora.com/contentimages/homepage/070522/Homepage/RWD/2022-7-18-birb-charity-new-marketing-banner-july-us-ca-rwd-slice.jpeg?imwidth=315',
        name: 'Use Your Points ',
        text: 'Support the Centre for Indigenous Environmental Resources to help build sustainable indigenous communities.',
        backgroundColor: 'bg-[#BDDCEE]'
    },
]
const Banners = () => {
    return (
        <div>
        <div className="flex flex-row mt-10">
            {banners.map((banner,i)=>(
                <div className="flex flex-col w-[400px] h-[271.5px] mr-3 rounded-lg shadow-[0_5px_10px_0_rgba(0,0,0,0.5)] cursor-pointer">
                    <div className="h-[142px] m-3">
                        <p className="font-bold text-xl">{banner.name}</p>
                        <p className="text-sm font-bold mt-3 hover:underline">{banner.text}</p>
                    </div>
                    <img
                        className="w-[400px] h-[128px] rounded-bl-lg rounded-br-lg"

                        alt={`banner-${i}`} src={banner.img}/>
                </div>
            ))}
        </div>
            <div className="border-b-[1px] border-solid border-[rgba(0,0,0,0.063)] mt-10 "></div>
        </div>
    )
}
export default Banners
