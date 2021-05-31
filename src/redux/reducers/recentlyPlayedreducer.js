import { SET_RECENTLY_PLAYED } from "../actions/actions";

export default function recentlyPlayedReducer(state = [], action) {
    switch (action.type) {
        case SET_RECENTLY_PLAYED:
            return action.payload
        default:
            return state
    }
}