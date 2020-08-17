import { combineReducers } from "redux";
import appReducer from "./app/reducer";
import storyReducer from "./story/reducer"

const rootReducer = combineReducers({
  app: appReducer,
  stories: storyReducer
})

export default rootReducer;