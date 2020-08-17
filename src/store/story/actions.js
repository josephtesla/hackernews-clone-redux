import hackerNewsApi from '../../services/HackerNewsApi';

export const actionTypes = {
  FETCH_STORY_IDS_REQUEST: "FETCH_STORY_IDS_REQUEST",
  FETCH_STORY_IDS_SUCCESS: "FETCH_STORY_IDS_SUCCESS",
  FETCH_STORY_IDS_FAILURE: "FETCH_STORY_IDS_FAILURE",
  FETCH_STORIES_REQUEST: "FETCH_STORIES_REQUEST",
  FETCH_STORIES_SUCCESS: "FETCH_STORIES_SUCCESS",
  FETCH_STORIES_FAILURE: "FETCH_STORIES_FAILURE"
}

const action = (type, payload) => ({ type, payload });

const actions = {

  fetchStoryIds: (payload = {}) => {
    return async (dispatch) => {
      dispatch(action(actionTypes.FETCH_STORY_IDS_REQUEST, payload))

      try {
        const storyIds = await hackerNewsApi.getTopStoryIds();
        dispatch(action(actionTypes.FETCH_STORY_IDS_SUCCESS, { storyIds }));
        dispatch(actions.fetchStories({ storyIds, page: 0 }))
        return storyIds;
      } catch (error) {
        dispatch(action(actionTypes.FETCH_STORY_IDS_FAILURE, error))
      }
    }
  },

  fetchStories: (payload = {}) => {
    return async (dispatch) => {
      const { storyIds, page } = payload;
      dispatch(action(actionTypes.FETCH_STORIES_REQUEST, payload));
      try {
        const stories = await hackerNewsApi.getStoryByPage(storyIds, page);
        dispatch(action(actionTypes.FETCH_STORIES_SUCCESS, { stories }));
      } catch (error) {
        dispatch(action(actionTypes.FETCH_STORIES_FAILURE, error));
      }
    }
  }
}


export default actions; 