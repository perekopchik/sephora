import React, {useEffect, useState} from 'react'
import Navlinks from "./Navlinks";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Input from '@mui/joy/Input';
import {Link, useNavigate} from "react-router-dom";
import {Basket} from "./index";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../../engine/firebase";
import { Button} from "@mui/material";


const Navbar = () => {


    const [basketProducts, setBasketProducts] = useState([]);
    const [name,setName] = useState('')
    const [userActive, setUserActive] = useState(false);

    const fetchData = async () => {
        const userId = localStorage.getItem('userId');
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const favoritesArray = docSnap.data().favorites;
            const nameData = docSnap.data().name;
            setName(nameData);
            setBasketProducts(favoritesArray);
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
    const [query,setQuery] = useState('');
    const [basket, setBasket] = useState(false);
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');

    const onMouseEnterBasket = () => {
        setBasket(true);
    };

    const onMouseLeaveBasket = () => {
        setBasket(false);
    };
    const onMouseEnterUser = () => {
        setUserActive(true);
    }

    const onMouseLeaveUser = () => {
        setUserActive(false);
    }
    const handleKeyPress = (event) => {
        if(event.key=== 'Enter') {
            navigate(`/products/${query}`)
            if(query===''){
                navigate('/');
            }
        }
    }




    return (
        <header>
            <div className="h-[60px] bg-[#C0DCF1] flex items-center justify-center">
                <span className="hover:underline text-sm cursor-pointer">Beauty Insiders get FREE shipping on all orders. Exclusions/terms apply.† <strong>LEARN MORE▸</strong></span>
            </div>
            <div className="h-[94px] flex flex-col ml-[100px] items-center relative">
                <div className="flex flex-row  mt-7">
                    <div className="font-mono font-bold text-2xl ">
                        <Link to="/">
                            <p>SEPHORA</p>
                        </Link>
                    </div>
                    <Input className="ml-10 h-[36px] w-[405px]" color="neutral"
                           onKeyPress={handleKeyPress}
                           onChange={(e)=>setQuery(e.target.value)} startDecorator={<SearchOutlinedIcon/>} placeholder="Search"/>
                    <div className="flex flex-row ml-6 cursor-pointer">
                        <svg width="24" height="24" style={{opacity:0.6}} aria-hidden="true" className="css-3a5k3u e65zztl0"
                             data-comp="Icon StyledComponent ">
                            <g>
                                <path
                                    d="M1.5 24a.5.5 0 01-.5-.5v-20a.5.5 0 01.5-.5h21a.5.5 0 01.5.5v20a.5.5 0 01-.5.5h-21zM22 23V4H2v19h20z"></path>
                                <path d="M0 23h24v1H0z"></path>
                                <path
                                    d="M7.5 24a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-9zm8.5-1v-9H8v9h8z"></path>
                                <path d="M11.5 13h1v11h-1zM1 6V5h22v1zm0 2V7h22v1zm0 2V9h22v1z"></path>
                            </g>
                        </svg>
                        <p className="ml-1">Stores & Services</p>
                    </div>
                    <div className="flex flex-row ml-7 cursor-pointer">
                        <svg width="24" height="24" style={{opacity:0.6}} aria-hidden="true" className="css-1rebvl0 e65zztl0"
                             data-comp="Icon StyledComponent ">
                            <path
                                d="M3.5 3.914H3v-.5a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 1 0 0 1H2v.5a.5.5 0 1 0 1 0v-.5h.5a.5.5 0 0 0 0-1m5.707 1.5.354-.354a.5.5 0 0 0-.708-.707l-.353.354-.354-.354a.5.5 0 0 0-.707.707l.354.354-.354.354a.5.5 0 0 0 .707.707L8.5 6.12l.353.354a.5.5 0 1 0 .708-.707l-.354-.354v.001Zm-3.639-2.5a.509.509 0 0 1-.51-.5c0-.276.214-.5.49-.5h.02a.5.5 0 0 1 0 1m16 5a.509.509 0 0 1-.51-.5c0-.276.214-.5.49-.5h.02a.5.5 0 1 1 0 1M4 22.364c0-.17.013-.334.025-.5H1.038c.275-1.764 2.014-2.695 3.952-2.933.239-.381.515-.738.825-1.061C2.891 17.926 0 19.32 0 22.364a.5.5 0 0 0 .5.5h3.592c-.06-.16-.09-.33-.092-.5m15-10.5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2m0 5c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m-14-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2m0 5c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m13.185 1.006c.31.323.586.68.825 1.062 1.939.237 3.676 1.168 3.95 2.932h-2.985c.013.166.025.33.025.5 0 .176-.036.343-.091.5h3.59c.277 0 .5-.223.5-.5 0-3.044-2.89-4.438-5.814-4.494M6.027 22h11.878c-.25-2.247-2.16-4-4.473-4H10.5a4.507 4.507 0 0 0-4.473 4m12.405 1H5.5a.5.5 0 0 1-.5-.5c0-3.033 2.467-5.5 5.5-5.5h2.932c3.033 0 5.5 2.467 5.5 5.5a.5.5 0 0 1-.5.5m-6.499-13c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2m0 5c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m4.191-13c-.308 0-.585.118-.725.258a.876.876 0 0 0-.313.645c-.021.345.104.714.31.92.455.562 1.336 1.346 2.082 1.955.475-.388 1.542-1.284 2.045-1.914a1.29 1.29 0 0 0 .349-.96c-.009-.154-.056-.437-.271-.608a.409.409 0 0 1-.044-.039c-.168-.169-.54-.308-.925-.239a.917.917 0 0 0-.701.532c-.164.351-.741.351-.905 0a.915.915 0 0 0-.7-.532A1.076 1.076 0 0 0 16.124 2Zm1.355 4.866a.689.689 0 0 1-.434-.153c-.401-.32-1.753-1.426-2.393-2.224-.371-.368-.601-1.013-.564-1.644.032-.553.262-1.027.647-1.332.388-.394 1.097-.597 1.763-.48.381.066.714.228.98.471a1.94 1.94 0 0 1 .982-.472c.66-.114 1.352.081 1.784.5.373.305.595.771.626 1.314.036.631-.194 1.276-.602 1.684-.607.762-1.956 1.864-2.354 2.182a.697.697 0 0 1-.435.154Z"></path>
                        </svg>
                        <p className="ml-1">Community</p>
                    </div>
                    <div className="flex flex-row ml-4 cursor-pointer" onMouseLeave={onMouseLeaveUser}>
                        <img className="h-[32px] w-[32px]" src="https://www.sephora.com/img/ufe/icons/me-active.svg" alt="user"/>
                        <p className="ml-1" onMouseEnter={onMouseEnterUser}>{userId===null? 'Sign in' : `Hi, ${name}`} </p>
                        {userActive ? (
                            <div className=" absolute top-20 bg-white w-[190px] h-[160px] z-10 border rounded">
                                <div className="flex flex-col w-[170px]">
                                    {userId===null ? (
                                        <div>
                                            <div className="mb-4 mt-3 items-center ml-12"><Link to="/signin"><Button variant="contained">Sign In</Button></Link></div>
                                        <div className="ml-4"><Link to="/signup"><Button className="mt-3" variant="contained">Create account</Button></Link></div>
                                        </div>) :
                                        (<div className="ml-12 mt-14"><Link to="/account"><Button variant="contained" >Account</Button></Link></div>)
                                    }
                                </div>
                            </div>) : (<></>)}

                    </div>
                    <div className="ml-4 cursor-pointer" >
                        <svg width="24" height="24" fill="none" className="css-13o7eu2">
                            <g fill="none" fillRule="evenodd">
                                <path
                                    d="M11.99 2C6.471 2 2 6.477 2 12s4.472 10 9.99 10a9.936 9.936 0 0 0 5.822-1.874L22 21.25l-1.209-4.517A9.965 9.965 0 0 0 21.98 12"
                                    stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path
                                    d="M11.99 2.5C6.748 2.5 2.5 6.753 2.5 12s4.249 9.5 9.49 9.5c2.064 0 3.973-.66 5.53-1.78a.5.5 0 0 1 .422-.077l3.351.9-.985-3.68a.5.5 0 0 1 .043-.367A9.464 9.464 0 0 0 21.479 12a.5.5 0 0 1 1 0c0 1.726-.417 3.355-1.154 4.793l1.158 4.327a.5.5 0 0 1-.613.613l-3.962-1.063a10.435 10.435 0 0 1-5.919 1.83C6.196 22.5 1.5 17.799 1.5 12c0-5.798 4.696-10.5 10.49-10.5a.5.5 0 1 1 0 1z"
                                    fill="currentColor"></path>
                                <path
                                    d="M18.5 10a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0 1a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
                                    fill="currentColor"></path>
                                <path fill="currentColor" d="m14.692 8.885 6.769-7.193.667.629-6.769 7.192z"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="ml-5 cursor-pointer">
                        <FavoriteOutlinedIcon/>
                    </div>
                    <div className="ml-5 " onMouseLeave={onMouseLeaveBasket}>
                        <svg className="cursor-pointer" width={`48px`} height={`62px`} onMouseEnter={onMouseEnterBasket}  data-at="basket_icon_large" aria-label="Go To Basket">
                            {basket? (<path d="M21.397 20.472l-.516 2.088a1.631 1.631 0 01-1.582 1.245H4.741c-.75 0-1.402-.513-1.583-1.245l-.517-2.088h18.756zm.813-3.286l-.565 2.286H2.393l-.565-2.286H22.21zm.813-3.286l-.566 2.286H1.582L1.016 13.9h22.007zm.373-4.333c.355 0 .616.334.53.679L23.27 12.9H.77l-.654-2.654a.546.546 0 01.53-.679h22.75zM13.83 1.716l5.572 5.2a.5.5 0 01-.683.731l-5.572-5.201a1.647 1.647 0 00-2.256 0L5.319 7.647a.501.501 0 01-.682-.732l5.573-5.199a2.647 2.647 0 013.62 0z"></path>) : (<path
                                d="M23.498 10c.326 0 .566.28.487.57l-3.078 11.32c-.177.652-.816 1.11-1.55 1.11H4.643c-.733 0-1.371-.458-1.55-1.11L.015 10.57c-.079-.29.16-.57.487-.57h22.996zm-3.112 9.999H3.613l.453 1.668a.588.588 0 0 0 .576.414h14.716c.271 0 .509-.17.575-.414L20.386 20zm.815-3H2.797l.544 2h17.317l.543-2zm.816-3H1.981l.544 2h18.948l.544-2zm.839-3.08H1.144L1.71 13h20.579l.567-2.08zm-9.037-9.205l5.612 5.2a.5.5 0 1 1-.68.734l-5.612-5.2a1.674 1.674 0 0 0-2.278 0l-5.612 5.2a.5.5 0 1 1-.68-.734l5.612-5.2a2.674 2.674 0 0 1 3.638 0z"></path>)}
                        </svg>
                        {basket ? (
                            <div className={`absolute z-10 border rounded ${userId===null? 'w-[200px]' : 'w-[375px] ' }  ${basketProducts.length===1? 'h-[386px]': ''} ${basketProducts.length===2? 'h-[475px]': ''} ${basketProducts.length>2? 'h-[508px]': ''}  bg-white top-[70px] right-[260px] `} >
                                {userId===null? (<div className="text-lg ml-16"><Link to="/signin">Log in</Link></div>) : (<Basket/>)}
                            </div>
                        ) : (<></>)}
                    </div>
                </div>
            </div>
            <div className="bg-black">
                <Navlinks/>
            </div>
        </header>
    )
}
export default Navbar
