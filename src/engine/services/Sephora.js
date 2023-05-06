import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const sephoraApi = createApi({
    reducerPath: 'sephoraApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://sephora.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'b8554ad6b3msh863e8a05e09ad63p1c3a86jsn58193f12a016');
            headers.set('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getList: builder.query({
            query: (id,searchQuery) => {
                if(id){
                    return (`products/v2/detail?id=${id}`)
                }
                return(`products/v2/list?number=1&size=30&country=SG&language=en-SG&sort=sales`)
            }
        }),
        getListInput: builder.query({
            query: (searchQuery) => {
                if(searchQuery){
                    return (`products/v2/list?number=1&size=30&country=SG&language=en-SG&query=${searchQuery}&sort=sales`)
                }
            }
        }),
        getListByCategoryId: builder.query({
            query: (category) => `products/v2/list?number=1&size=30&country=SG&language=en-SG&sort=sales&category=${category}`
        }),
        getReviews: builder.query({
            query:(id) => `reviews/v2/list?id=${id}&number=1&size=5&sort=recent&country=SG&language=en-SG`
        }),
        getListByProductGroup: builder.query({
            query: ({sort,group}) => `products/v2/list?number=1&size=30&country=SG&language=en-SG&sort=${sort}&product_group=${group}`
        }),
        getListByCategory: builder.query({
            query: (root) => `products/v2/list?number=1&size=30&country=SG&language=en-SG&root_category=${root}`
        })
    })
})

export const {
    useGetListQuery,
    useGetReviewsQuery,
    useGetListByCategoryIdQuery,
    useGetListByProductGroupQuery,
    useGetListByCategoryQuery,
    useGetListInputQuery
} = sephoraApi;