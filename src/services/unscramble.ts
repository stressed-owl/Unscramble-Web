import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Word } from '../interfaces'

export const unscrambleApi = createApi({
  reducerPath: 'unscrambleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3333' }),
  endpoints: (builder) => ({
    fetchWords: builder.query<Word[], string>({
      query: () => 'words',
    }),
  }),
})

export const { useFetchWordsQuery } = unscrambleApi