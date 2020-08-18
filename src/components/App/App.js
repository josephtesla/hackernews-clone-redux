import React, { useEffect } from 'react'
import List from "../List/index"
import { ThemeProvider } from 'styled-components'
import { colorsDark, colorsLight } from "../../styles/palette";
import { AppWrapper, Wrapper } from './styles'
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "react-loader-spinner"
import NavBar from '../NavBar';


export default function App({
  fetchStories,
  fetchStoriesFirstPage,
  stories,
  page,
  storyIds,
  isFetching,
  hasMoreStories,
  switchTheme,
  theme
}) {

  console.log(fetchStories)

  useEffect(() => {
    fetchStoriesFirstPage();
  }, [fetchStoriesFirstPage])

  const fetchStories2 = () => {
    if (!isFetching) {
      fetchStories({ storyIds, page })
    }
  }

  const handleThemeChange = () => {
    switchTheme(theme);
  }

  return (
    <ThemeProvider theme={theme === "dark"? colorsDark: colorsLight}>
      <AppWrapper>
        <Wrapper >
          <NavBar handleThemeChange={handleThemeChange} theme={theme} />
          <InfiniteScroll
            dataLength={stories.length}
            next={fetchStories2}
            hasMore={hasMoreStories}
            loader={<Loader style={{textAlign: "center"}}/>}
            style={{
              height: '100%',
              overflow: 'visible'
            }}
          >
            <List stories={stories} />
          </InfiniteScroll>
        </Wrapper>
      </AppWrapper>
    </ThemeProvider>
  )
}