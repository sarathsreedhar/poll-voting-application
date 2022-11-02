import { useState, useEffect, type ReactNode } from 'react'
import styled from '@emotion/styled/macro'

const TextContainer = styled.main`
  text-align: center;
`

const Offline = ({ children }: { children: ReactNode }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  useEffect(() => {
    window.addEventListener('online', () => setIsOnline(true))
    window.addEventListener('offline', () => setIsOnline(false))

    return () => {
      window.removeEventListener('online', () => setIsOnline(true))
      window.removeEventListener('offline', () => setIsOnline(false))
    }
  }, [])

  return (
    <>
      {!isOnline && <TextContainer>App is Offline</TextContainer>} {children}
    </>
  )
}

export default Offline
