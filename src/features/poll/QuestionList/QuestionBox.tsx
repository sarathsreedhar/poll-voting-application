import { type FC } from 'react'
import styled from '@emotion/styled/macro'
import { Question } from '../poll.types'
import { formatTimeStamp } from '../../../lib/helper'

interface QuestionBoxProps {
  item: Question
}

export const QuestionBox: FC<QuestionBoxProps> = ({ item }) => {
  const Title = styled.h4`
    color: blue;
  `

  const StartedTime = styled.p`
    text-decoration: none;
    color: black;
  `

  return (
    <>
      <Title data-testid="question-box-title">{item.question}</Title>
      <StartedTime>{formatTimeStamp(item.published_at)}</StartedTime>
      <ul>
        {item.choices.map((choiceData, i) => (
          <li key={i} data-testid="question-box-choice">
            {choiceData.choice}
          </li>
        ))}
      </ul>
    </>
  )
}
