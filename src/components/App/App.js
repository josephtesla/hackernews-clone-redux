import React, { useEffect } from 'react'
import List from "../List/index"
import { ThemeProvider } from 'styled-components'
import { colorsDark, colorsLight } from "../../styles/palette";
import { AppWrapper, Wrapper, Title, SwitchButton } from './styles'
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "react-loader-spinner"


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
          <div style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems: "center"
          }}>
          <Title>Hacker News Reader</Title>
          <SwitchButton onClick={handleThemeChange}>
            {theme === "dark"? <span>Light Mode</span>: <span>Night Mode</span>}
          </SwitchButton>
          </div>
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