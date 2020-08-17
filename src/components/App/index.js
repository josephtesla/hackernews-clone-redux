import { connect } from 'react-redux';
import actions from '../../store/story/actions'
import App from './App'


const mapStateToProps = state => ({
  stories: state.stories.stories,
  page: state.stories.page,
  storyIds: state.stories.storyIds,
  isFetching: state.stories.isFetching
})

const mapDispatchToProps = dispatch => ({
  fetchStoriesFirstPage: () => dispatch(actions.fetchStoryIds())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)