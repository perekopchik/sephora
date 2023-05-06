import React from 'react'
import {Category} from "./index";



const categories = [{
    img: 'https://www.sephora.com/contentimages/categorybanners/RWD/icons/foundation_guide.svg',
    name: 'Foundation quiz'
},
    {
        img: 'https://www.sephora.com/contentimages/categorybanners/RWD/icons/skincare_age.svg',
        name: 'Skincare Routine Builder'
    },
    {
        img: 'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_healthy%20scalp%20guide_us_ca_rwd_slice.png?imwidth=48',
        name: 'Shiny Hair Guide'
    },
    {
        img: 'https://www.sephora.com/contentimages/categorybanners/RWD/icons/niche_fragrances.svg',
        name: 'Fragrance Hub'
    },
    {
        img: 'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_BIPOC_ca_rwd_slice.png?imwidth=48',
        name: 'BIPOC Owned Brands'
    },
    {
        img: 'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/blush.png?imwidth=48',
        name: 'Super-Natural Sculpting'
    },
    {
        img: 'https://www.sephora.com/contentimages/categorybanners/RWD/icons/skincare_age.svg',
        name: 'Skincare for Every Age'
    },
    {
        img: 'https://www.sephora.com/contentimages/categorybanners/RWD/icons/skincare_quiz.svg',
        name: 'Clinical Skincare'
    },
]
const Guidance = () => {
    return (
        <div >
            <Category name={'U need a Guidance  ?'} text={'Check out our quizzes and buying guides.'} categories={categories}/>
            <div className="border-b-[1px] border-solid border-[rgba(0,0,0,0.063)] mt-10 "></div>
        </div>
    )
}
export default Guidance
