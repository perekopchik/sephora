import React from 'react'
import { CircularProgress, Rating, Tooltip} from "@mui/material";
import {useGetReviewsQuery} from "../../engine/services/Sephora";
import Icon from '../assets/icon.png';

const Reviews = ({id, data}) => {


    const {data: reviews, isFetching, error} = useGetReviewsQuery(id);

    if (isFetching){
        return (
            <div className=" flex justify-center overflow-hidden">
                <CircularProgress size="4rem"/>
            </div>
        )
    }
    if (error) return (
        <div style={{textAlign: 'center', fontFamily: 'sans-serif', fontWeight: 'bold'}}>No characters that match that
            name.
            <br/>
            Please search for something else.
        </div>
    )
    return (
        <div className="mt-4">
            <p className="text-xl font-bold">Ratings & Reviews
                ({((data.data.attributes['reviews-count']) / 1000).toFixed(1)}K)</p>
            <p className="text-xs text-[#666666] mt-2">Viewing 1-5
                of {data.data.attributes['reviews-count']} reviews</p>
            <div className="flex flex-col">
                {reviews.data.map((review, i) => (
                    <div key={i} className="mt-5">
                        <div className="flex flex-row">
                            <div className="flex flex-col">
                                <Tooltip disableTouchListener title={`${review.attributes.rating} / 5`}>
                                    <div>
                                        <Rating readOnly value={review.attributes.rating} precision={0.1}/>
                                    </div>
                                </Tooltip>
                                <p className="text-sm text-[#666666] ml-1">{(Math.floor(Math.random() * 5)) === 0 ? 1 : 2} day
                                    ago</p>
                            </div>
                            <div className="flex flex-row">
                                <div className="flex flex-col w-[800px] ml-20">
                                    <p className="font-bold text-sm">{review.attributes.title}</p>
                                    <p className="text-sm mt-3 mb-6">{review.attributes.text}</p>
                                </div>
                                <div className="border-r-[1px] border-solid border-[rgba(0,0,0,0.063)] h-[85px]">
                                </div>
                            </div>
                            <div className="w-[32px] h-[32px] ml-5">
                                <img alt={`icon-${i}`} src={Icon}/>
                            </div>
                            <p className="font-bold text-sm ml-4">{review.attributes['reviewer-name']}</p>
                        </div>
                        <div className="border-b-[1px] border-solid border-[rgba(0,0,0,0.063)] mt-3"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Reviews

