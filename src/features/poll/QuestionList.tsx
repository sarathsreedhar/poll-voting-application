import { useEffect } from 'react'
import styled from '@emotion/styled/macro'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchQuestionListAsync, questionListState } from './questionList.Slice'
import { QuestionDetails } from './QuestionDetails'

export const QuestionList = () => {
  const QuestionBlockElem = styled.div`
    border: 1px solid;
    width: 200px;
    padding: 1em;
  `
  const QuestionListContainerElem = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 2em;
  `

  const dispatch = useAppDispatch()
  const { questionList, isLoading, isError } = useAppSelector(questionListState)
  useEffect(() => {
    dispatch(fetchQuestionListAsync())
  }, [])

  useEffect(() => {}, [questionList])

  const voteForChoice = (url: string) => {
    console.log(url)
  }

  return isLoading ? (
    <Loading />
  ) : (
    <QuestionListContainerElem>
      {questionList.map((item, i) => {
        return (
          <QuestionBlockElem key={i}>
            <QuestionDetails item={item} voteForChoice={voteForChoice} />
          </QuestionBlockElem>
        )
      })}
    </QuestionListContainerElem>
  )
}

const Loading = () => {
  return <p>Loading....</p>
}
