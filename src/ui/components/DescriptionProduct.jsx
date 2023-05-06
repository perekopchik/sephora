import React from 'react'
import {Button, Rating, Tooltip} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const DescriptionProduct = ({data}) => {

    return (
        <div className="w-[1150px] mt-4">
            <div>
                <p className="text-xl font-bold">About the Product</p>
                <div className="flex flex-row">
                    <div className="w-[100px] mt-8">
                        <p className="text-xs text-[#666666]">ITEM {data.data.id}</p>
                    </div>
                    <div className="flex flex-col w-[1000px] text-sm mt-7 ml-28">
                        <p ><span className="font-bold">What is it:</span> {(data.data.attributes.description).replace("<p>", "").replace("</p>", "").replace("<br><br>", "")}</p>
                        <p><span className="font-bold">Benefits:</span> {(data.data.attributes.benefits).replace("<p>", "").replace("</p>", "").replace("<br>", "").replace("<br>", "").replace("<br>", "").replace("<br>", "").replace("<br>", "").replace("<br>", "").replace("<br>", "").replace("<br>", "")}</p>
                    </div>
                </div>
            </div>
            <div className="border-b-[1px] border-solid border-[rgba(0,0,0,0.063)] mt-10"></div>
            <div className="mt-4">
                <p className="text-xl font-bold">Ingredients</p>
                <div className="ml-52 mt-3 text-sm">
                    {(data.data.attributes.ingredients).slice(0, 800).replace('<br>', '').replace('<br>', '').replace('<br>', '').replace('<br>', '')}
                </div>
            </div>
            <div className="border-b-[1px] border-solid border-[rgba(0,0,0,0.063)] mt-10"></div>
            <div className="mt-4">
                <p className="text-xl font-bold">How to Use</p>
                <div className="ml-52 mt-3 text-sm">
                    {(data.data.attributes['how-to-text']).slice(0, 300).replace('<ul>', '').replace('<li>', '').replace('<br>', '').replace('</li>', '').replace('<li>', '').replace('</li>', '').replace('</ul>', '')}
                </div>
            </div>
            <div className="border-b-[1px] border-solid border-[rgba(0,0,0,0.063)] mt-10"></div>
            <div className="mt-4 flex flex-col">
                <p className="text-xl font-bold">Questions & Answers ({Math.floor(Math.random() * 100)})</p>
                <p className="text-sm text-[#136BEA] hover:underline cursor-pointer mt-2">Ask a question</p>
                <div className="ml-24 flex flex-row">
                    <div className="relative right-[90px] mt-1 bg-[rgb(238,238,238)] w-[36px] h-[36px] rounded-[30px] flex justify-center">
                        <SearchIcon className="relative top-1"/>
                    </div>
                    <div className="ml-[75px] mt-3">
                        <p className="text-sm font-bold">Most Recent Questions</p>
                        <div className="flex flex-row text-sm mt-3">
                            <p>Q: </p><div className="flex flex-col"><p>Is this a good product to set under eyes if so how
                                would
                                you recommend applying a powder puff sponge brush fingers. Thanks! </p>
                                <p className="text-[rgb(102,102,102)]">Asked 2 d ago by Jeanievas</p>
                                <p className="text-[#136BEA] hover:underline cursor-pointer mt-3">Answer this question</p>
                            </div>
                        </div>
                        <div className="mt-3">                        <Button className="w-[260px] h-[44px] text-sm mt-3" variant="contained">Show more questions & Answers</Button></div>
                    </div>
                </div>
            </div>
            <div className="border-b-[1px] border-solid border-[rgba(0,0,0,0.063)] mt-10"></div>
        </div>
    )
}
export default DescriptionProduct
