import { SET_NAVIGATION } from "../actions/actions";

export default function navigationReducer(state = "profile", action) {
    switch (action.type) {
        case SET_NAVIGATION:
            return action.payload;
        default:
            return state;
    }
}