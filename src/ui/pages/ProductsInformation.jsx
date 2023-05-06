import React from 'react'
import {useParams} from "react-router-dom";
import {useGetListQuery} from "../../engine/services/Sephora";
import {DescriptionProduct, MainInformation, Reviews, Slider} from "../components";
import { CircularProgress} from "@mui/material";

const ProductsInformation = () => {

    window.scrollTo(0, 0);

    const {id} = useParams();

    const {data, isFetching, error} = useGetListQuery(id);
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
        <div className="flex flex-col w-[1248px]">
            <div className="w-[1248px] h-[520px]">
                <MainInformation data={data}/>
            </div>
            <div className="border-b-[1px] border-solid border-[rgba(0,0,0,0.063)] mt-10"></div>
            <div>
                <DescriptionProduct data={data}/>
            </div>
            <div>
                <Reviews id={id} data={data}/>
            </div>
            <div className="mt-4">
                <p className="text-xl font-bold mb-3">You May Also Like</p>
                <div className="container1 max-w-[1150px]">
                    <Slider category={data.data.relationships.categories.data[0].id} />
                </div>
                <div className="border-b-[1px] border-solid border-[rgba(0,0,0,0.063)] "></div>
            </div>
        </div>
    )
}
export default ProductsInformation
