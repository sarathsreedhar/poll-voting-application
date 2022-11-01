import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchQuestionListAsync, questionListState } from './questionListSlice'

export const QuestionList = () => {
  const dispatch = useAppDispatch()
  const { questionList, isLoading, isError } = useAppSelector(questionListState)
  useEffect(() => {
    dispatch(fetchQuestionListAsync())
  }, [])

  useEffect(() => {}, [questionList])

  return isLoading ? (
    <Loading />
  ) : (
    <>
      {questionList.map((item, i) => {
        return (
          <div key={i}>
            <p>{item.question}</p>
          </div>
        )
      })}
    </>
  )
}

const Loading = () => {
  return <p>Loading....</p>
}
