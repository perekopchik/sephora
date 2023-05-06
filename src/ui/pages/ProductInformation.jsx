import React from 'react'
import {useGetListInputQuery} from "../../engine/services/Sephora";
import {CircularProgress} from "@mui/material";
import {Product} from "../components";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const ProductInformation = () => {

    window.scrollTo(0, 0);

    const {query} = useParams();

    const {data, isFetching, error} = useGetListInputQuery(query);

    if (isFetching){
        return (
            <div className=" flex justify-center overflow-hidden mt-32">
                <CircularProgress size="4rem"/>
            </div>
        )
    }
    if (error) return (
        <div style={{textAlign: 'center', fontFamily: 'sans-serif', fontWeight: 'bold'}}>No products that match that
            name.
            <br/>
            Please search for something else.
        </div>
    )
    if(data.data.length===0) return (
        <div style={{textAlign: 'center', fontFamily: 'sans-serif', fontWeight: 'bold',marginTop: '60px'}}>No products that match that
            name.
            <br/>
            Please search for something else.
        </div>
    )

    return (
        <div>
            <Product position={false} products={data} excludeFirst={21}/>
        </div>
    )
}
export default ProductInformation
