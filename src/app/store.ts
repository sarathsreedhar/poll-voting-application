import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import questionListReducer from '../features/poll/questionList.Slice'

export const store = configureStore({
  reducer: {
    questionList: questionListReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
