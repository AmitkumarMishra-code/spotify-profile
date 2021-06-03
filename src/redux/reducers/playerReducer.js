import { SET_PLAYER_STATUS } from "../actions/actions";

export default function playerReducer(state = false, action) {
    switch (action.type) {
        case SET_PLAYER_STATUS:
            return action.payload
        default:
            return state
    }
}