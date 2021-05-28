import { SET_USER } from "../actions/actions";

export default function userReducer(state = {}, action) {
    switch (action.type) {
        case SET_USER:
            return action.payload;
        default:
            return state;
    }
}