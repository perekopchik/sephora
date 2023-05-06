import React from 'react'
import {Link} from "react-router-dom";

const Category = ({categories,name,text}) => {
    return (
        <div className="flex flex-row mt-7 w-[300px]">
            <div className="flex flex-col ml-3 mr-3">
                <p className="text-xl font-bold whitespace-nowrap">{name}</p>
                <p className="text-sm">{text}</p>
            </div>
            <div className="flex">
                {categories.map((category,i)=>(
                    <Link to={`/category/${category.link}`}>
                    <div className="w-[110px] h-[130px] rounded-lg shadow-[0_5px_10px_0_rgba(0,0,0,0.5)] cursor-pointer hvr-float m-1" key={i}>
                        <p className="text-sm ml-2 mt-3">{category.name}</p>
                        <img className="w-[53px] h-[53px] absolute top-16 left-12" alt={`category-${i}`} src={category.img}/>
                    </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}
export default Category
