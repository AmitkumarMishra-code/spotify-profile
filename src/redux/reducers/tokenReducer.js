import { SET_TOKEN } from '../actions/actions'
export default function tokenReducer(state = null, action) {
    switch (action.type) {
        case SET_TOKEN:
            state = action.payload;
        default:
            return state;
    }
}