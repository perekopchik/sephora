import React, {useEffect, useState} from 'react'
import {doc, getDoc,updateDoc} from "firebase/firestore";
import {db} from "../../engine/firebase";
import {Button} from "@mui/material";

const Basket = () => {
    const [basketProducts, setBasketProducts] = useState([]);
    const userId = localStorage.getItem('userId');

    const fetchData = async () => {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const favoritesArray = docSnap.data().favorites;
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

    const handleDelete = async (id) => {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const favoritesArray = docSnap.data().favorites;
            const updatedFavoritesArray = favoritesArray.filter((favorite) => favorite.productId !== id);
            await updateDoc(docRef, { favorites: updatedFavoritesArray });
            setBasketProducts(updatedFavoritesArray);
            return updatedFavoritesArray;
        } else {
            console.log("No such document!");
            return [];
        }
    }
    return (
        <div className="flex flex-col">
            <div className="flex flex-row text-sm mt-3">
                <p className="font-bold ml-3">Basket</p>
                <p className="text-[#136BEA] ml-[250px]">View all</p>
            </div>
            <div className="border-b-[1px] border-solid border-[rgba(0,0,0,0.063)] mt-4 "/>
            <div className={`w-[375px] ${basketProducts.length===1? 'h-[115px]': ''} ${basketProducts.length>2? 'h-[235px]': ''} ${basketProducts.length===2? 'h-[200px]': ''} overflow-y-auto mt-3`}>
                {basketProducts.map((product, i) => (
                    <div>
                        <div className="w-[345px] h-[88px] flex flex-row ml-3" key={i}>
                            <img alt={`product-${i}`} className="w-[62px] h-[62px] mt-2" src={product.productImg}/>
                            <div className="text-xs mt-2 ml-1">
                                <p className="font-bold">{product.productBrand}</p>
                                <p className="whitespace-normal w-[150px]">{product.productName}</p>
                                <p className="text-[#136BEA] mt-3">Move to loves</p>
                            </div>
                            <p className="text-xs mt-[53px] ml-5 cursor-pointer" onClick={() => handleDelete(product.productId)}>Delete</p>
                            <p className="text-xs font-bold ml-5 mt-2">{product.productPrice}</p>
                        </div>
                        {basketProducts.length===1? (<></>): (<div className="border-b-[1px] border-solid border-[rgba(0,0,0,0.063)] "/>)}
                    </div>
                ))}
            </div>
            {basketProducts.length===2? (<></>): (<div className="border-b-[1px] border-solid border-[rgba(0,0,0,0.063)]"/>)}
            <div className="flex flex-col">
                <div className="text-sm">
                    <p className={`ml-4 mt-3 ${basketProducts.length===1? '': ''}`}><span
                        className="font-bold">Subtotal</span> ({basketProducts.length} {basketProducts.length === 1 ? 'item' : 'items'})
                    </p>
                </div>
                <div className="flex justify-center items-center mt-5">
                    <Button variant="contained">View Basket & Checkout</Button>
                </div>
            </div>
            <div className="border-b-[1px] border-solid border-[rgba(0,0,0,0.063)] mt-8"/>
            <div className="flex flex-row ml-4 mt-3 mb-2">
                <img alt="rewars" src="https://www.sephora.com/img/ufe/icons/rewards-bazaar.svg"/>
                <p className="text-xs ml-3">See samples, rewards, and promos in basket </p>
            </div>
            <div className="border-b-[1px] border-solid border-[rgba(0,0,0,0.063)]"/>
            <div className="flex flex-row ml-4 mt-3 mb-2">
                <svg width="24px" height="24px" viewBox="0 0 24 24" aria-hidden="true" className="css-ooetfa eanm77i0"
                     data-comp="Icon StyledComponent ">
                    <path
                        d="M16.122 4a.46.46 0 0 1 .462.458v2.446h3.212a.46.46 0 0 1 .371.186l3.744 5.069c.058.078.09.173.09.271v5.113a.46.46 0 0 1-.461.457l-2.576.001a3.5 3.5 0 0 1-6.92.053H8.956A3.5 3.5 0 0 1 2.036 18L1.46 18a.46.46 0 0 1-.46-.457V12H.393C.177 12 0 11.774 0 11.5s.177-.5.393-.5H1v-1H.348C.156 10 0 9.774 0 9.5S.156 9 .348 9H1V8H.417C.187 8 0 7.774 0 7.5S.188 7 .417 7H1v-.272a2.74 2.74 0 0 1 2.58-2.723L3.747 4ZM5.5 15a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm12 0a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-12 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm12 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm-12 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm10.16-9.637V4.915H3.747a1.82 1.82 0 0 0-1.824 1.813V7h3.66c.23 0 .417.226.417.5s-.188.5-.417.5h-3.66v1h2.729c.192 0 .348.226.348.5s-.156.5-.348.5H1.923v1h1.684c.216 0 .393.226.393.5s-.177.5-.393.5H1.923v5.085h.101a3.5 3.5 0 0 1 6.956.035h5.04a3.5 3.5 0 0 1 6.956-.035h2.1V12.58l-3.514-4.761H16.12a.46.46 0 0 1-.46-.456ZM18.674 9c.129 0 .25.07.325.187l1.973 3.12c.085.134.095.31.028.455a.393.393 0 0 1-.352.238h-4.207c-.219 0-.397-.197-.397-.44V9.44c0-.243.178-.44.397-.44h2.233Zm-.206.88h-1.631v2.24h3.048l-1.417-2.24ZM9.925 7c.294 0 .535.242.535.536a.538.538 0 0 1-.535.535l-1.39-.001A.537.537 0 0 1 8 7.537C8 7.242 8.24 7 8.535 7h1.39Z"></path>
                </svg>
                <p className="text-xs">Beauty Insiders enjoy FREE standard shipping on all orders. </p>
            </div>
        </div>
    );
};

export default Basket;
