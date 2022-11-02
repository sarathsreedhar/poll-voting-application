import { type FC, useState, useEffect } from 'react'
import styled from '@emotion/styled/macro'
import { useParams } from 'react-router-dom'
import { Loading } from '../../components/Loading'

import { useGetQuestionByIdQuery, useUpdateVoteMutation } from '../../app/api'

export const QuestionDetailsPage: FC = () => {
  let { id } = useParams()
  const { data, isLoading, isError } = useGetQuestionByIdQuery(id)
  const [updateVote, { isLoading: isUpdatingVote, isSuccess: isVotingSucess, isError: isVotingError }] =
    useUpdateVoteMutation()
  const [errorMsg, setErrorMessage] = useState('')
  const TitleElem = styled.h4`
    color: blue;
  `
  const ProgressBarElem = styled.progress`
    -webkit-appearance: none;
    appearance: none;
    height: 10px;
  `
  const QuestionBoxElem = styled.div`
    width: 500px;
    margin: 0 auto;
    justify-content: space-around;
    flex-direction: column;
    align-items: stretch;
    align-content: space-around;
}
  `
  const ChoiceBoxElem = styled.div`
    display: flex;
    justify-content: space-around;
    align-content: space-around;
    align-items: center;
    margin: 1em;
  `

  const voteClickHandler = (url: string) => {
    updateVote(url)
  }
  useEffect(() => {
    if (!isUpdatingVote && isVotingError) setErrorMessage('Voting was not successful. Please try again.')
    if (!isUpdatingVote && isVotingSucess) setErrorMessage('Voting successful !')
    setTimeout(() => setErrorMessage(''), 2000)
  }, [isUpdatingVote, isVotingSucess, isVotingError])
  const totalVotes = data?.choices.reduce((acc, item) => acc + item.votes, 0) || 0
  const calculateVotingPercentage = (vote: number) => {
    const percentage = (100 * vote) / totalVotes
    if (isNaN(percentage)) return 0
    else return percentage
  }

  if (isLoading) return <Loading />
  if (isError || !data) return <h4>Something went worng</h4>

  return (
    <QuestionBoxElem>
      <h3>Question details</h3>
      <TitleElem>{data.question}</TitleElem>
      <ul>
        {data.choices.map((choiceData, i) => (
          <li key={i}>
            <ChoiceBoxElem>
              <div>{choiceData.choice}</div> <div>{choiceData.votes}</div>
              <span>
                <ProgressBarElem max={totalVotes} value={choiceData.votes}></ProgressBarElem>
                {calculateVotingPercentage(choiceData.votes)}%
              </span>
              <button onClick={() => voteClickHandler(choiceData.url)}>Vote</button>
            </ChoiceBoxElem>
          </li>
        ))}
      </ul>
      <div>{errorMsg}</div>
    </QuestionBoxElem>
  )
}
