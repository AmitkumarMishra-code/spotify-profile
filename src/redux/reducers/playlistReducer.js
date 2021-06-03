import { SET_PLAYLISTS } from "../actions/actions";

export default function playlistReducer(state = [], action) {
  switch (action.type) {
    case SET_PLAYLISTS:
      return action.payload;
    default:
      return state;
  }
}
