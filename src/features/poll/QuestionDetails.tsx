import { type FC } from 'react'
import styled from '@emotion/styled/macro'

import { Question } from '../../lib/types'
import { formatTimeStamp } from '../../lib/helper'

interface QuestionDetailsProps {
  item: Question
  voteForChoice: Function
}

export const QuestionDetails: FC<QuestionDetailsProps> = ({ item, voteForChoice }) => {
  const Title = styled.h4`
    color: blue;
  `

  const StartedTime = styled.p``

  return (
    <>
      <Title>{item.question}</Title>
      <StartedTime>{formatTimeStamp(item.published_at)}</StartedTime>
      <ul>
        {item.choices.map((choiceData, i) => (
          <li>{choiceData.choice}</li>
        ))}
      </ul>
    </>
  )
}
