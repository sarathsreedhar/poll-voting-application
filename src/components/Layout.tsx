import { type ReactNode } from 'react'
import styled from '@emotion/styled/macro'
import { mediaQueries } from '../lib/styles-utils'

const MainContainer = styled.main`
  ${mediaQueries({
    // maxWidth:['', '50%', '75%', '100%'],
  })}
  max-width:1200px;
  margin: 2em;
`

const Layout = ({ children }: { children: ReactNode }) => {
  return <MainContainer>{children}</MainContainer>
}

export default Layout