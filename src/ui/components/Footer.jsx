import React, {useEffect, useState} from 'react'
import {Container} from "@mui/material";
import Input from "@mui/joy/Input";
import Button from '@mui/joy/Button';
import {doc, getDoc} from "firebase/firestore";
import {db} from "../../engine/firebase";


const aboutSephora = [
    {
        name: 'About sephora'
    }, {
        name: 'Careers'
    }, {
        name: 'Supply Chain Transparency'
    }, {
        name: 'Affiliates'
    },
    {
        name: 'Sephora Events'
    }, {
        name: 'Gift Cards'
    }, {
        name: 'Sephora Global Sites'
    }, {
        name: 'Diversity and Inclusion'
    },
    {
        name: 'Sephora Values'
    }, {
        name: 'Sephora Accelerate'
    }, {
        name: 'Report a Vulnerability'
    }
]

const mySephora = [
    {
        name: 'Beauty Insider'
    }, {
        name: 'Community Profile'
    }, {
        name: 'Order Status'
    }, {
        name: 'Purchase History'
    },
    {
        name: 'Account Settings'
    }, {
        name: 'Beauty Advisor Recommendations'
    }, {
        name: 'Beauty Offers'
    }, {
        name: 'Quizzes & Buying Guides'
    },
    {
        name: 'Rewards Bazaar'
    }, {
        name: 'Loves'
    }, {
        name: 'Book a Reservation'
    }
]

const help = [
    {
        name: 'Customer Service'
    }, {
        name: 'Returns & Exchanges'
    }, {
        name: 'Delivery and Pickup Options'
    }, {
        name: 'Shipping'
    },
    {
        name: 'Billing'
    }, {
        name: 'International Shipments'
    }, {
        name: 'Beauty Services FAQ'
    }, {
        name: 'Store Locations'
    },
    {
        name: 'Online Ordering'
    }, {
        name: 'Klarna & Afterpay'
    }, {
        name: 'Accessibility'
    }
]

const images = [{
    img: 'https://www.sephora.com/img/ufe/icons/instagram-ko.svg'
},{
    img: 'https://www.sephora.com/img/ufe/icons/facebook-ko.svg'
},{
    img: 'https://www.sephora.com/img/ufe/icons/twitter-ko.svg'
},{
    img: 'https://www.sephora.com/img/ufe/icons/youtube-ko.svg'
},{
    img: 'https://www.sephora.com/img/ufe/icons/pinterest-ko.svg'
},{
    img: 'https://www.sephora.com/img/ufe/icons/snapchat-ko.svg'
},{
    img: 'https://www.sephora.com/img/ufe/icons/tiktok-ko.svg'
},
]


const Footer = () => {

    const userId = localStorage.getItem('userId');
    const [name,setName] = useState('')
    const [basketProducts, setBasketProducts] = useState([]);

    const fetchData = async () => {
        const userId = localStorage.getItem('userId');
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const favoritesArray = docSnap.data().favorites;
            const nameData = docSnap.data().name;
            setName(nameData);
            return favoritesArray;
        } else {
            console.log("No such document!");
            return [];
        }
    };

    useEffect(() => {
        const loadData = async () => {
            const favoritesArray = await fetchData();
            setBasketProducts(favoritesArray);
        };
        loadData();
    }, []);
    return (
        <footer className="mt-[100px]">
            <div className="h-[41.5px] bg-[#CCCCCC] flex items-center justify-center">
                <p className="text-sm font-bold cursor-pointer hover:underline">Website feedback? Let us know ▸</p>
            </div>
            <div className="bg-black">
                <Container fixed>
                    <div className="h-[756.5px] bg-black flex flex-col text-white">
                        <div className="flex flex-row mt-10">
                            <div className="flex flex-row cursor-pointer">
                                <img alt="icon-1" className="h-[24px] w-[24px]"
                                     src="https://www.sephora.com/img/ufe/icons/find-store.svg"/>
                                <div className="text-xs ml-2">
                                    <p className="font-bold hover:underline">Find a Store</p>
                                    <p>Sephora Upper Canada Mall</p>
                                </div>
                            </div>
                            <div className="flex flex-row ml-7 cursor-pointer">
                                <svg width="24" height="24" fill="none" className="css-13o7eu2">
                                    <path
                                        d="m21.87 21.733.837.224-.224-.837-1.158-4.327A10.466 10.466 0 0 0 22.479 12c0-5.798-4.696-10.5-10.49-10.5C6.196 1.5 1.5 6.202 1.5 12c0 5.799 4.696 10.5 10.49 10.5 2.195 0 4.233-.676 5.918-1.83l3.962 1.063z"
                                        stroke="currentColor"></path>
                                </svg>
                                <div className="text-xs ml-2 cursor-pointer">
                                    <p className="font-bold hover:underline">Live Beauty Help</p>
                                    <p>Available</p>
                                </div>
                            </div>
                            <div className="flex flex-row ml-20 cursor-pointer">
                                <img alt="icon-2" className="h-[24px] w-[24px]" src="https://www.sephora.com/img/ufe/icons/app.svg"/>
                                <div className="text-xs ml-2">
                                    <p className="font-bold hover:underline">Get the App</p>
                                    <p>Download Now</p>
                                </div>
                            </div>
                            <div className="flex flex-row ml-20 cursor-pointer">
                                <img alt="icon-3" className="h-[24px] w-[24px]"
                                     src="https://www.sephora.com/img/ufe/icons/sms-ko.svg"/>
                                <div className="text-xs ml-2">
                                    <p className="font-bold hover:underline">Get Sephora Text Alerts</p>
                                    <p>Sign up Now</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-b-[1px] border-solid border-white mt-10 "></div>
                        <div className="flex flex-row mt-8">
                            <div>
                                <p className="text-sm font-bold">About Sephora</p>
                                {aboutSephora.map((link,i)=>(
                                    <p  className="text-xs mt-2 hover:underline cursor-pointer" key={i}>{link.name}</p>
                                ))}
                            </div>
                            <div className="ml-16">
                                <p className="text-sm font-bold">My Sephora</p>
                                {mySephora.map((link,i)=>(
                                    <p className="text-xs mt-2 hover:underline cursor-pointer"  key={i}>{link.name}</p>
                                ))}
                            </div>
                            <div className="ml-8">
                                <p className="text-sm font-bold">Help</p>
                                {help.map((link,i)=>(
                                    <p className="text-xs mt-2 hover:underline cursor-pointer" key={i}>{link.name}</p>
                                ))}
                            </div>
                            <div className="ml-8">
                                <p className="text-sm font-bold">Region & Language</p>
                                <div className="flex flex-row mt-3">
                                    <img className="h-[16px] w-[24px]" src="https://www.sephora.com/img/ufe/flags/us.svg" alt="usa"/>
                                    <p className="text-xs ml-1 hover:underline cursor-pointer">United States - English</p>
                                </div>
                                <div className="flex flex-row mt-3">
                                    <img className="h-[16px] w-[24px]" src="https://www.sephora.com/img/ufe/flags/ca.svg" alt="canada"/>
                                    <p className="text-xs ml-1 hover:underline cursor-pointer">Canada - English</p>
                                </div>
                                <div className="flex flex-row mt-3">
                                    <img className="h-[16px] w-[24px]" src="https://www.sephora.com/img/ufe/flags/ca.svg" alt="canada-france"/>
                                    <p className="text-xs ml-1 hover:underline cursor-pointer">Canada - Français</p>
                                </div>
                            </div>
                            <div className="ml-10">
                                <p className="text-2xl">
                                    {userId===null? 'User' : `${name}`}, you belong to something beautiful.
                                </p>
                                <div className="mt-[180px] ">
                                    <p className="text-sm font-bold">Sign up for Sephora Emails</p>
                                    <div className="flex flex-row">
                                        <Input className="w-[276px] mr-2" placeholder="Enter your email address"/>
                                        <Button  color="neutral">Sign up</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-b-[1px] border-solid border-white mt-10 "></div>
                        <div className="flex flex-row">
                            <div className="flex flex-col text-xs w-[800px] mt-8">
                                <p>Sephora Beauty Canada, Inc. (160 Bloor St. East Suite 1100 Toronto, ON M4W 1B9 | Canada, sephora.ca) is requesting consent on its <br/> own behalf and on behalf of Sephora USA, Inc. (525 Market Street, Floor 3, San Francisco, CA 94105, sephora.com). You may withdraw <br/> your consent at any time.</p>
                                <p className="mt-5">© 2023 Sephora USA, Inc. All rights reserved.</p>
                                <div className="flex flex-row mt-3 space-x-4 cursor-pointer">
                                    <p className="hover:underline">Privacy Policy</p>
                                    <p className="hover:underline">Terms of Use</p>
                                    <p className="hover:underline">Accessibility</p>
                                    <p className="hover:underline">Sitemap</p>
                                </div>
                                <p className="mt-3">1-877-737-4672    TTY: 1-888-866-9845</p>
                            </div>
                            <div className="flex flex-row mt-8">
                                {images.map((image,i)=>(
                                    <img key={i} className="w-[32px] h-[32px] ml-5 cursor-pointer" alt={`image-${i}`} src={image.img}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    )
}
export default Footer
