import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { QuestionListState } from '../../lib/types'
import { fetchQuestionList } from './questionAPI'

const initialState: QuestionListState = {
  questionList: [],
  isLoading: true,
  isError: false,
}

export const fetchQuestionListAsync = createAsyncThunk('poll/fetchQuestionList', async () => {
  const response = await fetchQuestionList()

  return response.data
})

export const questionListSlice = createSlice({
  name: 'questionList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionListAsync.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        }
      })
      .addCase(fetchQuestionListAsync.fulfilled, (state, action) => {
        console.log(action)
        return {
          ...state,
          questionList: action.payload,
          isLoading: false,
        }
      })
      .addCase(fetchQuestionListAsync.rejected, (state) => {
        return {
          ...state,
          isError: true,
        }
      })
  },
})

export const questionListState = (state: RootState) => state.questionList

export default questionListSlice.reducer
