// import { baseApi } from '../allApi/baseApi'
// import type { Pokemon } from './types'

// export const productApi = baseApi.injectEndpoints({
//   endpoints: builder => ({
//     getProducts: builder.query<Pokemon, string>({
//       query: () => ({
//         url: '/products',
//         method: 'GET',
//       }),
//       providesTags: ['products'],
//     }),
//     createProduct: builder.mutation<Pokemon, string>({
//       query: body => ({
//         url: '/products',
//         method: 'POST',
//         body,
//       }),
//       invalidatesTags: ['products'],
//     }),

//   deleteProduct: builder.mutation<Pokemon, string>({
//     query: (id) => ({
//       url: `/products/${id}`,
//       method: 'DELETE',
//     }),
//   }),
// })

// export const { useGetProductsQuery, useCreateProductMutation,useDeleteProductMutation } = productApi
// //  default productApi.reducer

import { baseApi } from '../allApi/baseApi'
import type { Pokemon } from './types'

export const productApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query<Pokemon[], string>({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
      providesTags: ['products'],
    }),

    getSingleProduct: builder.query<Pokemon[], string>({
      query: id => ({
        url: `/products/${id}`,
        method: 'GET',
      }),
      // providesTags: ['products'],
    }),

    createProduct: builder.mutation<Pokemon, Partial<Pokemon>>({
      query: body => ({
        url: '/products',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['products'],
    }),

    updateProduct: builder.mutation<void, string>({
      query: ({ id, body }) => ({
        url: `/products/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['products'],
    }),

    deleteProduct: builder.mutation<void, string>({
      query: id => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['products'],
    }),
  }),
})

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetSingleProductQuery,
} = productApi
