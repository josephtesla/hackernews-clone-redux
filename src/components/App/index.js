import { connect } from 'react-redux';
import actions from '../../store/story/actions'
import { setTheme } from '../../store/app/actions'
import App from './App'
import { hasMoreStoriesSelector } from "../../store/story/selectors";


const mapStateToProps = state => ({
  hasMoreStories: hasMoreStoriesSelector(state),
  stories: state.stories.stories,
  page: state.stories.page,
  storyIds: state.stories.storyIds,
  isFetching: state.stories.isFetching,
  theme: state.app.theme
})


const mapDispatchToProps = dispatch => ({
  fetchStoriesFirstPage: () => dispatch(actions.fetchStoryIds()),
  fetchStories: ({storyIds, page}) => dispatch(actions.fetchStories({storyIds, page})),
  switchTheme: (prevTheme) => dispatch(setTheme({theme: prevTheme}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

