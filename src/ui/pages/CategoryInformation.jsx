import React from 'react'
import {useParams} from "react-router-dom";
import {useGetListByCategoryQuery} from "../../engine/services/Sephora";
import {CircularProgress} from "@mui/material";
import {Product} from "../components";

const CategoryInformation = () => {
    window.scrollTo(0, 0);

    const {root} = useParams();
    const {secondRoot} = useParams();
    const {thirdRoot} = useParams();

    const rootCategory= `${root}${secondRoot ? `/${secondRoot}` : ''}/${thirdRoot}`;

    const {data, isFetching, error} = useGetListByCategoryQuery(rootCategory);
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
    return (
        <div>
            <Product position={false} products={data} excludeFirst={21}/>
        </div>
    )
}
export default CategoryInformation
