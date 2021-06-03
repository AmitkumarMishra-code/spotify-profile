import {
  SET_TOP_ARTISTS_FILTER,
  SET_TOP_ARTISTS_LONGTERM,
  SET_TOP_ARTISTS_MEDIUMTERM,
  SET_TOP_ARTISTS_SHORTTERM,
} from "../actions/actions";

export default function artistsReducer(
  state = {
    filter: "long_term",
    long_term: [],
    medium_term: [],
    short_term: [],
  },
  action
) {
  switch (action.type) {
    case SET_TOP_ARTISTS_LONGTERM:
      return { ...state, long_term: action.payload };
    case SET_TOP_ARTISTS_MEDIUMTERM:
      return { ...state, medium_term: action.payload };
    case SET_TOP_ARTISTS_SHORTTERM:
      console.log(action.payload);
      return { ...state, short_term: action.payload };
    case SET_TOP_ARTISTS_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
