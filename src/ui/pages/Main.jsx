import React from 'react'
import {BannerSlide, Product, Products} from "../components";
import {useGetListQuery} from "../../engine/services/Sephora";
import {Box, CircularProgress} from "@mui/material";

const Main = () => {

    return (
        <div>
            <BannerSlide/>
            <Products/>
        </div>
    )
}
export default Main
