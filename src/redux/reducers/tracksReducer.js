import { SET_TRACKS_FILTER, SET_TRACKS_LONG_TERM, SET_TRACKS_MEDIUM_TERM, SET_TRACKS_SHORT_TERM } from "../actions/actions";

export default function tracksReducer(state = { tracks: { long_term: [], medium_term: [], short_term: [] }, filter: 'long_term' }, action) {
    switch (action.type) {
        case SET_TRACKS_LONG_TERM:
            return {...state, tracks: {...state.tracks, long_term: action.payload } }
        case SET_TRACKS_MEDIUM_TERM:
            return {...state, tracks: {...state.tracks, medium_term: action.payload } }
        case SET_TRACKS_SHORT_TERM:
            return {...state, tracks: {...state.tracks, short_term: action.payload } }
        case SET_TRACKS_FILTER:
            return {...state, filter: action.payload }
        default:
            return state
    }
}