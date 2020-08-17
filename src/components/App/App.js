import React, { useEffect } from 'react'
import List from "../List/index"
import { ThemeProvider } from 'styled-components'
import { colorsDark, colorsLight } from '../../styles/palette'
import { AppWrapper, Wrapper, Title } from './styles'



export default function App({fetchStoriesFirstPage, stories}) {

  useEffect(() => {
    fetchStoriesFirstPage();

  }, [fetchStoriesFirstPage])

  return (
    <ThemeProvider theme={colorsLight}>
      <AppWrapper>
        <Wrapper>
          <Title>Hacker News Reader</Title>
          <List stories={stories}/>
        </Wrapper>
      </AppWrapper>
    </ThemeProvider>  
  )
}