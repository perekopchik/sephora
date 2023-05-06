import React from 'react'
import {Banners, BeautyOffers, BrandNewAddition, Categories, ChosenForYou, Guidance, SellingFast} from "./index";

const Products = () => {
    return (
        <div className="flex flex-col">
            <div>
                <ChosenForYou/>
            </div>
            <div>
                <BrandNewAddition/>
            </div>
            <div>
                <BeautyOffers/>
            </div>
            <div>
                <SellingFast/>
            </div>
            <div>
                <Categories/>
            </div>
            <div>
                <Guidance/>
            </div>
            <div>
                <Banners/>
            </div>
        </div>
    )
}
export default Products
