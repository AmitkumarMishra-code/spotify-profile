import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import tokenReducer from "./reducers/tokenReducer";
import artistsReducer from "./reducers/artistsReducer";
import navigationReducer from "./reducers/navigationReducer";
import userReducer from "./reducers/userReducer";
import tracksReducer from "./reducers/tracksReducer";
import recentlyPlayedReducer from "./reducers/recentlyPlayedreducer";
import playlistReducer from "./reducers/playlistReducer";
import playerReducer from "./reducers/playerReducer";

//artistsReducer

const rootReducer = combineReducers({
    token: tokenReducer,
    artists: artistsReducer,
    navigation: navigationReducer,
    user: userReducer,
    tracks: tracksReducer,
    recentlyPlayed: recentlyPlayedReducer,
    playlists: playlistReducer,
    playerStatus: playerReducer
});
export const store = createStore(rootReducer, applyMiddleware(thunk));