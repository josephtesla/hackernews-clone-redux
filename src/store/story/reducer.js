import { actionTypes } from './actions';

const {
  FETCH_STORIES_REQUEST,
  FETCH_STORY_IDS_REQUEST,
  FETCH_STORY_IDS_SUCCESS,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_FAILURE,
  FETCH_STORY_IDS_FAILURE
} = actionTypes;


const initialState = {
  storyIds: [],
  stories: [],
  page: 0,
  isFetching: false,
  error: ''
}

export default function storyReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_STORY_IDS_REQUEST:
    case FETCH_STORIES_REQUEST:
      console.log("requesting ")
      return {
        ...state,
        isFetching: true
      }

    case FETCH_STORY_IDS_SUCCESS:
      console.log("loade successful")
      return {
        ...state,
        storyIds: action.payload.storyIds
      }


    case FETCH_STORIES_SUCCESS:
      return {
        ...state,
        stories: [...state.stories, ...action.payload.stories],
        page: state.page + 1,
        isFetching: false
      }

    case FETCH_STORY_IDS_FAILURE:
    case FETCH_STORIES_FAILURE:
      console.log("error occured")
      console.log(action.payload)
      return {
        ...state,
        isFetching: false,
        error: action.payload.message
      }



    default:
      return state
  }
}