import React, {useState} from 'react'
import {ImageSlider} from "./index";
import {Button, MenuItem, Rating, Select, Tooltip} from "@mui/material";
import {doc,updateDoc,arrayUnion} from "firebase/firestore";
import {db} from "../../engine/firebase";

const MainInformation = ({data}) => {

    const userId = localStorage.getItem('userId');
    const handleAddToFavorite = async () => {
        try {
            const docRef =  doc(db,"/users",`/${userId}`);
            await updateDoc(docRef, {
                favorites: arrayUnion({
                    productId: data.data.id,
                    productImg: data.data.attributes['image-urls'][0],
                    productBrand: data.data.attributes['brand-name'],
                    productName: data.data.attributes.name,
                    productPrice: data.data.attributes["display-price"]
                })
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    const [select, setSelect] = useState('');

    const handleChange = (event) => {
        setSelect(event.target.value);
    };

    return (
        <div className="flex flex-row mt-10">
            <div>
                <div>
                    <ImageSlider images={data.data.attributes['image-urls']}/>
                </div>
            </div>
            <div className="mt-5 ml-3">
                <p className="font-bold font-sans text-sm hover:underline cursor-pointer">{data.data.attributes['brand-name']}</p>
                <p className="font-sans text-base">{data.data.attributes.name}</p>
                <div className="flex flex-row">
                    <Tooltip disableTouchListener title={`${data.data.attributes.rating} / 5`}
                             className="">
                        <div>
                            <Rating readOnly value={data.data.attributes.rating} precision={0.1}/>
                        </div>
                    </Tooltip>
                    <p className="text-sm font-sans mt-[3px] ml-2">{((data.data.attributes['reviews-count']) / 1000).toFixed(1)} K</p>
                </div>
                <p className="text-xs mt-1"><span
                    className=" text-base font-bold">{data.data.attributes["display-price"]}</span> get it for <span
                    className="text-red-600 font-bold">${((data.data.attributes['original-price']) / 100) - (((data.data.attributes['original-price']) / 100) * 0.05)} (5% Off)</span> with
                    Auto-Replenish</p>
                <p className="text-xs">or 4 payments of
                    ${((data.data.attributes['original-price']) / 100) / 4} with <span
                        className=" font-bold">Klarna</span> of <span className=" font-bold">AfterPay</span></p>
                <p className="text-xs mt-2">Size {data.data.attributes.heading}</p>
                <p className='text-sm mt-1'><a href='#' className="underline text-[#136BEA]">Free returns</a> on all
                    purchases.</p>
                <div className="flex flex-row mt-3">
                    <div className="w-[150px] h-[100px] borderDelivery ml-0">
                        <div className="ml-2 mt-2">
                        <svg viewBox="0 0 24 24" className="css-jxbgrg eanm77i0 w-[24px] h-[24px]" aria-hidden="true"
                             data-comp="Icon StyledComponent ">
                            <path
                                d="M16.122 4a.46.46 0 0 1 .462.458v2.446h3.212a.46.46 0 0 1 .371.186l3.744 5.069c.058.078.09.173.09.271L24 18l-3.036.001a3.5 3.5 0 0 1-6.92.053H8.956A3.5 3.5 0 0 1 2.036 18L1 18v-6H.5a.5.5 0 1 1 0-1H1v-1H.5a.5.5 0 1 1 0-1H1V8H.5a.5.5 0 1 1 0-1H1v-.272A2.74 2.74 0 0 1 3.747 4h12.375ZM17.5 15a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-12 0a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm12 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-12 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm12 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm-12 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm13.174-8h-2.233c-.219 0-.397.197-.397.44v3.12c0 .243.178.44.397.44h4.207a.393.393 0 0 0 .352-.238.483.483 0 0 0-.028-.455l-1.973-3.12A.389.389 0 0 0 18.674 9ZM3.5 11H1.926v1H3.5a.5.5 0 1 0 0-1Zm1-2H1.922v1H4.5a.5.5 0 1 0 0-1Zm5.425-2h-1.39A.537.537 0 0 0 8 7.537c.002.294.24.532.535.533h1.39a.536.536 0 0 0 0-1.07ZM5.5 7H1.922v1H5.5a.5.5 0 1 0 0-1Z"></path>
                        </svg>
                        <p className="font-bold text-sm">Get it shipped</p>
                        </div>
                    </div>
                    <div className="w-[150px] h-[100px] borderDelivery">
                        <div className="ml-2 mt-2">
                        <svg viewBox="0 0 24 24" className="css-3odmfi eanm77i0 w-[24px] h-[24px]" aria-hidden="true"
                             data-comp="Icon StyledComponent ">
                            <path
                                d="M11.878 1.002c2.119-.037 4.02.547 5.65 1.498l.889-1.44 2.224 4.13-4.473-.502.859-1.386a9.886 9.886 0 0 0-5.553-1.346c-4.333.23-8.097 3.285-9.188 7.48-1.581 6.062 2.686 12.09 8.973 12.579 4.789.365 9.235-2.82 10.454-7.455.506-1.906.42-3.801-.124-5.526a.482.482 0 0 1 .293-.607.47.47 0 0 1 .614.304 10.928 10.928 0 0 1-.014 6.616c-1.518 4.795-6.219 7.992-11.24 7.624C4.377 22.475-.291 15.978 1.32 9.368c1.178-4.837 5.585-8.29 10.559-8.366Zm1.363 4.487 5.19 2.15c.25.1.37.39.28.65l-1.04 2.51v6.38c0 .2-.12.38-.31.46l-5.19 2.15c-.06.03-.13.04-.19.04s-.13-.01-.19-.04L6.6 17.64a.499.499 0 0 1-.31-.46V10.8L5.18 8.13a.507.507 0 0 1 .11-.55c.14-.14.35-.18.54-.1l3.71 1.53 2.05-.84 1-2.41a.5.5 0 0 1 .65-.27Zm3.422 5.961-4.19 1.73v5.4l4.19-1.74v-5.39ZM7.28 15.76v1.08l4.19 1.74V17.5l-4.19-1.74Zm0-2.16v1.08l4.19 1.74v-1.08L7.28 13.6Zm0-2.16v1.08l4.19 1.74v-1.08l-4.19-1.74Zm4.69-2.35-1.12.47.17.07c.12.05.22.15.27.27l.95 2.3 3.61-1.5-3.88-1.61Zm-5.41-.23.6 1.45 3.88 1.61-.6-1.45-3.88-1.61Zm6.75-2.26-.69 1.68 4.27 1.77.69-1.68-4.27-1.77Z"></path>
                        </svg>
                        <p className="font-bold text-sm">Auto replenish</p>
                        </div>
                    </div>
                    <div className="w-[150px] h-[100px] borderDelivery">
                        <div className="ml-2 mt-2">
                        <svg viewBox="0 0 24 24" className="css-3odmfi eanm77i0 w-[24px] h-[24px]" aria-hidden="true"
                             data-comp="Icon StyledComponent ">
                            <path
                                d="M16 2c.82 0 1.464.36 1.947.902.471.528.791 1.23 1.013 1.951.444 1.445.54 3.128.54 4.147H22a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h2.5c0-1.019.096-2.702.54-4.147.222-.722.542-1.423 1.013-1.951C14.536 2.36 15.18 2 16 2Zm6 17H10v2h12v-2Zm0-3H10v2h12v-2Zm0-3H10v2h12v-2Zm0-3H10v2h12v-2Zm-6-7c-.49 0-.876.203-1.2.567-.338.378-.604.927-.804 1.58C13.595 6.452 13.5 8.019 13.5 9h5c0-.981-.095-2.548-.495-3.853-.201-.653-.467-1.202-.804-1.58C16.876 3.203 16.49 3 16 3ZM.5 11h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1Zm2 3h5a.5.5 0 1 1 0 1h-5a.5.5 0 1 1 0-1Zm2 3h3a.5.5 0 1 1 0 1h-3a.5.5 0 1 1 0-1Z"></path>
                        </svg>
                        <p className="font-bold text-sm">Same-day delivery</p>
                        </div>
                    </div>
                    <div className="w-[150px] h-[100px] borderDelivery">
                        <div className="ml-2 mt-2">
                        <svg viewBox="0 0 24 24" className="css-3odmfi eanm77i0 w-[24px] h-[24px]" aria-hidden="true"
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
                        <p className="font-bold text-sm">Buy online & pick up</p>
                        </div>
                    </div>
                </div>
                <div className="text-sm mt-3 bg-[#f6f6f8] rounded">
                    <p className="ml-4 mt-4">Beauty Insiders enjoy <span
                        className="font-bold">FREE standard shipping</span> on
                        all orders</p>
                    <p className="text-[#136BEA] underline cursor-pointer ml-4">Shipping & Returns</p>
                </div>
                <div className="flex flex-row mt-3">
                    <Select
                        className=" w-[50px] h-[35px]"
                        displayEmpty
                        inputProps={{'aria-label': 'Without label'}}
                        value={select}
                        onChange={handleChange}
                    >
                        <MenuItem value="">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                        <MenuItem value="6">6</MenuItem>
                        <MenuItem value="7">7</MenuItem>
                        <MenuItem value="8">8</MenuItem>
                        <MenuItem value="9">9</MenuItem>
                        <MenuItem value="10">10</MenuItem>
                    </Select>
                    <div className="ml-5">
                        <Button onClick={handleAddToFavorite} disabled={userId === null}  variant="contained">Add to Basket</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainInformation
