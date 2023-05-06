import React from 'react'
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

const links = [
    {
        name: 'Makeup',
        link: 'makeup/face'
    },    {
        name: 'Skincare',
        link: 'skincare/moisturiser'
    },    {
        name: 'Fragrance',
        link: 'fragrance/women'
    },    {
        name: 'Tools & Brush',
        link: 'tools-and-brushes/beauty-devices'
    },    {
        name: 'Hair Styling & Treatments',
        link: 'hair/treatments'
    },  {
        name: 'Bath & Body',
        link: 'bath-and-body/moisturiser'
    },
    {
        name: 'Gifts',
        link: 'gifts/gift-ideas/for-her'
    },
]

const NavLinks = () => {
    return (
        <div className="flex flex-row space-x-20 text-white ml-[400px] h-[44px] items-center">
            {links.map((link,i)=>(
                <Link to={`/category/${link.link}`}><p key={i} className="text-sm">{link.name}</p></Link>
            ))}
        </div>
    )
}
export default NavLinks
