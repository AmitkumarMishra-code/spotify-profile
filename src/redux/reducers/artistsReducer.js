import { SET_TOP_ARTISTS } from "../actions/actions";

export default function artistsReducer(state = {}, action) {
  switch (action.type) {
    case SET_TOP_ARTISTS:
      return action.payload;
    default:
      return state;
  }
}
