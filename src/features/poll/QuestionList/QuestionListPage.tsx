import styled from '@emotion/styled/macro'
import { QuestionBox } from './QuestionBox'
import { Loading } from '../../../components/Loading'
import { Link } from 'react-router-dom'
import { useGetQuestionListQuery } from '../../../app/api'

export const QuestionListPage = () => {
  const QuestionListContainerElem = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 2em;
  `
  const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    display: block;
    border: 1px solid;
    width: 200px;
    padding: 1em;
    cursor: pointer;
  `

  const TitleElem = styled.h2`
    text-align: center;
  `

  const { data, isLoading, isError } = useGetQuestionListQuery()

  if (isLoading) return <Loading />
  if (isError || !data) return <h4>Something went worng</h4>

  return (
    <>
      <TitleElem data-testid="question-title"> Poll Questions</TitleElem>
      <QuestionListContainerElem>
        {data.map((item, i) => {
          return (
            <StyledLink to={`${item.url}`} key={i}>
              <QuestionBox item={item} data-testid="question-box" />
            </StyledLink>
          )
        })}
      </QuestionListContainerElem>
    </>
  )
}
