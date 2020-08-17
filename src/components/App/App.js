import React, { useEffect } from 'react'
import List from "../List/index"
import { ThemeProvider } from 'styled-components'
import { colorsDark } from '../../styles/palette'
import { Wrapper, Title } from './styles'



export default function App({fetchStoriesFirstPage, stories}) {


  useEffect(() => {

    console.log(stories)
    fetchStoriesFirstPage();


  }, [fetchStoriesFirstPage])

  return (
    <ThemeProvider theme={colorsDark}>
      <div>
        <Wrapper>
          <Title>Hacker News Reader</Title>
          <List />
        </Wrapper>
      </div>
    </ThemeProvider>  
  )
}
