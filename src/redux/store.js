import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import tokenReducer from "./reducers/tokenReducer";
import artistsReducer from "./reducers/artistsReducer";
import navigationReducer from "./reducers/navigationReducer";
import userReducer from "./reducers/userReducer";
import tracksReducer from "./reducers/tracksReducer";

//artistsReducer

const rootReducer = combineReducers({ token: tokenReducer, artists: artistsReducer, navigation: navigationReducer, user: userReducer, tracks: tracksReducer })
export const store = createStore(rootReducer, applyMiddleware(thunk));