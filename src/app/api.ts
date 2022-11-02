// import { client } from '../../api/apiClient'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Choice, Question } from '../features/poll/poll.types'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    mode: 'cors',
    baseUrl: `${process.env.REACT_APP_API_BASE_URL}`,
  }),
  endpoints: (builder) => ({
    getQuestionList: builder.query<Question[], void>({
      query: () => 'questions',
    }),
    getQuestionById: builder.query<Question, string | undefined>({
      query: (id: string) => `questions/${id}`,
    }),
    updateVote: builder.mutation<Choice, string>({
      query: (url) => ({
        url: `questions${url}`,
        method: 'post',
      }),
    }),
  }),
})

export const { useGetQuestionListQuery, useGetQuestionByIdQuery, useUpdateVoteMutation } = api
