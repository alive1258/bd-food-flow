import { baseApi } from '../allApi/baseApi'
import type { Pokemon } from './types'

export const userApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query<Pokemon, string>({
      query: () => '/users',
    }),
  }),
})

export const { useGetProductsQuery } = userApi
export default userApi.reducer
