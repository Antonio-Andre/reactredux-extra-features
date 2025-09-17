import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function authorReducer(state = initialState.authors, action) {
  console.log("Reducer saw action:", action.type, action);
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      console.log("loading in autor reducer:", action)
      return action.authors;
    case types.CREATE_AUTHOR_SUCCESS:
      console.log("creating in autor reducer:", action)
      return [...state, action.author];
    case types.UPDATE_AUTHOR_SUCCESS:
      console.log("Reducer is updating author:", action.author);
      return state.map(a => 
        (a.id === action.author.id ? action.author : a));
    default:
      return state;
  }
}


