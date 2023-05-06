import React from 'react'
import {Category} from "./index";


const categories = [{
  img: 'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_samples_32_us_ca_rwd_slice.png?imwidth=48',
  name: 'Foundation',
    link: 'makeup/face/foundation'
},
    {
        img: 'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_skincare_cleanser_moisturizer_us_ca_rwd_slice.jpg?imwidth=48',
        name: 'Moisturizers'
        ,
        link: 'skincare/moisturiser'
    },
    {
        img: 'https://www.sephora.com/contentimages/homepage/091322/Homepage/RWD/hair%20dryer.JPG?imwidth=48',
        name: 'Hair Styling & Treatments',
        link: 'hair/treatments'
    },
    {
        img: 'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_fragrance_bottle_us_ca_rwd_slice.jpg?imwidth=48',
        name: 'Perfume',
        link: 'fragrance/women'
    },
    {
        img: 'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_minis_us_ca_rwd_slice.png?imwidth=48',
        name: 'Minis',
        link: 'makeup/lips/lipstick'
    },
    {
        img: 'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_sephoracollection_SC_us_ca_rwd_slice.jpg?imwidth=48',
        name: 'Sephora Collection',
        link: 'bath-and-body/moisturiser'
    },
    {
        img: 'https://www.sephora.com/contentimages/categorybanners/RWD/icons/next_big_thing.svg',
        name: 'Gift ideas for her',
        link: 'gifts/gift-ideas/for-her'
    },
    {
        img: 'https://www.sephora.com/contentimages/categorybanners/RWD/icons/sale%2032@3x.jpg?imwidth=48',
        name: 'Trending on Social',
        link: 'clean/clean-makeup'
    },
]
const Categories = () => {
    return (
        <div>
            <Category name={'Featured Categories'} text={'Stop what\'s popular now'} categories={categories}/>
            <div className="border-b-[1px] border-solid border-[rgba(0,0,0,0.063)] mt-10 "></div>
        </div>
    )
}
export default Categories
