import axios from "axios";
import { REFRESH_TOKEN, SET_NAVIGATION, SET_RECENTLY_PLAYED, SET_TOKEN, SET_TRACKS_FILTER, SET_TRACKS_LONG_TERM, SET_TRACKS_MEDIUM_TERM, SET_TRACKS_SHORT_TERM, SET_USER } from "./actions";

const querystring = require("querystring");

let urlParams = window.location.href;
urlParams = urlParams.replace("#", "?&");
const params = new URLSearchParams(urlParams);
let token = params.get("access_token");

export const setToken = () => {
    let url = window.location.href;
    url = url.replace("#", "?&");
    const params = new URLSearchParams(url);
    const token = params.get("code");
    return { type: SET_TOKEN, payload: token };
};

export function getToken() {
    return async(dispatch) => {
        let code = params.get("code");
        let data = {
            grant_type: "authorization_code",
            code: code,
            redirect_uri: "http://localhost:3000/main",
        };

        data = querystring.stringify(data);
        // eslint-disable-next-line
        let headers = {
            Authorization: "Basic NTljNjllNzY2NTliNGEyNDk4YzlhZGMxNmIyYWE4MWQ6ZmI4OWM4YjIwZTRhNDhjMDgxZTAyMDhmZmFmNWZhZTk=",
        };

        let res = await axios({
            method: "post",
            url: "https://accounts.spotify.com/api/token",
            data: data,
            headers: {
                Authorization: "Basic NTljNjllNzY2NTliNGEyNDk4YzlhZGMxNmIyYWE4MWQ6ZmI4OWM4YjIwZTRhNDhjMDgxZTAyMDhmZmFmNWZhZTk=",
            },
        });

        console.log(res.data, "response");
    };
}

export let setUser = (user) => ({
    type: SET_USER,
    payload: user,
});

export let refreshToken = () => ({
    type: REFRESH_TOKEN,
});

export let setTracksFilter = (filter) => ({
    type: SET_TRACKS_FILTER,
    payload: filter
})

export let getTopTracks = (filter) => {
    return async function(dispatch, getState) {
        let tracksArray = []
        switch (filter) {
            case 'long_term':
                tracksArray = await getTracksData("long_term");
                dispatch({ type: SET_TRACKS_LONG_TERM, payload: tracksArray });
                break;
            case 'medium_term':
                tracksArray = await getTracksData("medium_term");
                dispatch({ type: SET_TRACKS_MEDIUM_TERM, payload: tracksArray });
                break;
            case 'short_term':
                tracksArray = await getTracksData("short_term");
                dispatch({ type: SET_TRACKS_SHORT_TERM, payload: tracksArray });
                break;
            default:
                tracksArray = await getTracksData("long_term");
                dispatch({ type: SET_TRACKS_LONG_TERM, payload: tracksArray });
        }
    };
};

async function getTracksData(timeRange) {
    let response = await requestData("me/top/tracks?time_range=" + timeRange);
    let tracksArray = response.items.map(track => getTrackInfo(track))
    while (response.next) {
        let index = response.next.indexOf('/me')
        let endpoint = response.next.substring(index + 1)
        response = await requestData(endpoint)
        let tempArray = response.items.map(track => getTrackInfo(track))
        tracksArray.push(...tempArray)
    }
    return tracksArray
}

function getTrackInfo(track) {
    let info = {
        albumName: track.album.name,
        albumImage: track.album.images[0].url,
        artists: track.artists.map(artist => artist.name),
        trackDuration: track.duration_ms,
        trackName: track.name,
        trackPreview: track.preview_url
    }
    return info
}

export const setNavigation = (nav) => ({ type: SET_NAVIGATION, payload: nav });

export function getUserProfile(token) {
    return async(dispatch) => {
        try {
            let user = await requestData("me");
            let following = await requestData("me/following?type=artist");
            let playlists = await requestData("me/playlists");
            let data = { user: user, following: following, playlists: playlists };

            dispatch(setUser(data));
        } catch (err) {
            console.log(err);
        }
    };
}

async function requestData(url) {
    const headers = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    let response = null;
    try {
        response = await axios.get(`https://api.spotify.com/v1/${url}`, headers);
        console.log(response.status);
        return response.data;
    } catch (err) {
        console.log(url);
        console.log("inside error");
        console.log(err);
        console.log(err.response.status);
        if (err.response.status === 403 || err.response === 401) {
            try {
                let response = await axios.post(
                    "https://accounts.spotify.com/api/token", {
                        headers: {
                            Authorization: "Basic oNTljNjllNzY2NTliNGEyNDk4YzlhZGMxNmIyYWE4MWQ6ZmI4OWM4YjIwZTRhNDhjMDgxZTAyMDhmZmFmNWZhZTk=",
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                        data: "grant_type=client_credentials",
                    }
                );
                console.log(response);
                // token = response.access_token;
                requestData(url);
            } catch (error) {
                console.log(error.message);
            }
        }
    }
}

export let makeAPICall = () => {
    return async function(dispatch, getState) {
        try {
            let response = await axios.post(
                "https://accounts.spotify.com/api/token", {
                    headers: {
                        Authorization: "Basic NTljNjllNzY2NTliNGEyNDk4YzlhZGMxNmIyYWE4MWQ6ZmI4OWM4YjIwZTRhNDhjMDgxZTAyMDhmZmFmNWZhZTk=",
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    data: "grant_type=client_credentials",
                }
            );
            console.log(response);
        } catch (error) {
            console.log(error.message);
        }
    };
};

//recently-played

export let getRecentlyPlayed = () => {
    return async function(dispatch, getState) {
        let response = await requestData("me/player/recently-played");
        console.log(response.items)
        let tracksArray = response.items.map(track => getTrackInfo(track.track))
        while (response.next) {
            let index = response.next.indexOf('/me')
            let endpoint = response.next.substring(index + 1)
            response = await requestData(endpoint)
            let tempArray = response.items.map(track => getTrackInfo(track.track))
            tracksArray.push(...tempArray)
        }
        dispatch({ type: SET_RECENTLY_PLAYED, payload: tracksArray })
    }
}