import hackerNewsApi from '../../services/HackerNewsApi';

export const actionTypes = {
  FETCH_STORY_IDS_REQUEST: "FETCH_STORY_IDS_REQUEST",
  FETCH_STORY_IDS_SUCCESS: "FETCH_STORY_IDS_SUCCESS",
  FETCH_STORY_IDS_FAILURE: "FETCH_STORY_IDS_FAILURE",
  FETCH_STORIES_REQUEST: "FETCH_STORIES_REQUEST",
  FETCH_STORIES_SUCCESS: "FETCH_STORIES_REQUEST",
  FETCH_STORIES_FAILURE: "FETCH_STORIES_REQUEST"
}

const action = (type, payload) => ({ type, payload });

const actions = {

  fetchStoryIds: (payload = {}) => {
    return (dispatch) => {
      dispatch(action(actionTypes.FETCH_STORY_IDS_REQUEST, payload))
      // try {
      //   const storyIds = await hackerNewsApi.getTopStoryIds();
      //   dispatch(action(actionTypes.FETCH_STORIES_SUCCESS, { storyIds }));
      //   dispatch(action(actions.fetchStories({storyIds, page: 0})))
      // } catch (error) {
      //   dispatch(actionTypes.FETCH_STORY_IDS_FAILURE, error)
      // }
     return hackerNewsApi.getTopStoryIds()
      .then(storyIds => {
        dispatch(action(actionTypes.FETCH_STORIES_SUCCESS, { storyIds }));
        dispatch(action(actions.fetchStories({storyIds, page: 0})))
      }).catch(error => {
        dispatch(actionTypes.FETCH_STORY_IDS_FAILURE, error)
      })
    }
  },

  fetchStories: (payload= {}) => {
    return (dispatch) => {
      const { storyIds, page } = payload;
      dispatch(action(actionTypes.FETCH_STORIES_REQUEST, payload));
      // try {
      //   const stories = await hackerNewsApi.getStoryByPage(storyIds, page);
      //   console.log(stories)
      //   dispatch(action(actionTypes.FETCH_STORIES_SUCCESS, { stories }));
      // } catch (error) {
      //   dispatch(action(actionTypes.FETCH_STORIES_FAILURE, error));
      // }

      return hackerNewsApi.getStoryByPage(storyIds, page)
      .then(stories => {
        console.log(stories)
        dispatch(action(actionTypes.FETCH_STORIES_SUCCESS, { stories }));
      }).catch(error => {
        dispatch(action(actionTypes.FETCH_STORIES_FAILURE, error));
      })

    }
  }
}


export default actions; 