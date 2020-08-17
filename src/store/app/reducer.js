import { actionTypes } from './actions';

const initialState = {
  theme: "dark"
}

export default function AppReducer(state = initialState, action) {
  switch( action.type ){

    case actionTypes.SET_THEME:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}