import axios from "axios";
import { REFRESH_TOKEN, SET_NAVIGATION, SET_TOKEN, SET_USER } from "./actions";

const querystring = require("querystring");

let urlParams = window.location.href;
urlParams = urlParams.replace("#", "?&");
const params = new URLSearchParams(urlParams);
let token = params.get("access_token");

export const setToken = () => {
  let url = window.location.href;
  url = url.replace("#", "?&");
  const params = new URLSearchParams(url);
  const token = params.get("access_token");
  return { type: SET_TOKEN, payload: token };
};


export function getToken() {
  return async (dispatch) => {
    let code = params.get("code");
    let data = {
      grant_type: "authorization_code",
      code: code,
      redirect_uri: "http://localhost:3000/main",
    };

    data = querystring.stringify(data);

    let res = await axios({
      method: "post",
      url: "https://accounts.spotify.com/api/token",
      data: data,
      headers: {
        Authorization:
          "Basic NTljNjllNzY2NTliNGEyNDk4YzlhZGMxNmIyYWE4MWQ6ZmI4OWM4YjIwZTRhNDhjMDgxZTAyMDhmZmFmNWZhZTk=",
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

export let getArtists = () => {
  return async function (dispatch, getState) {
    // try {
    //     let response = await axios.get('https://api.spotify.com/v1/me/top/artists', headers);
    //     dispatch({
    //         type: SET_ARTISTS,
    //         payload: response.data
    //     })
    // let artists = await requestData("me/top/artists")
    // dispatch({
    //     type: SET_ARTISTS,
    //     payload: artists
    // })
  };
};

export const setNavigation = (nav) => ({ type: SET_NAVIGATION, payload: nav });


export function getUserProfile(token) {
  return async (dispatch) => {
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
    if (err.response.status === 403) {
      try {
        let response = await axios.post(
          "https://accounts.spotify.com/api/token",
          {
            headers: {
              Authorization:
                "Basic oNTljNjllNzY2NTliNGEyNDk4YzlhZGMxNmIyYWE4MWQ6ZmI4OWM4YjIwZTRhNDhjMDgxZTAyMDhmZmFmNWZhZTk=",
              "Content-Type": "application/x-www-form-urlencoded",
            },
            data: "grant_type=client_credentials",
          }
        );
        console.log(response);
        token = response.access_token;
        requestData(url);
      } catch (error) {
        console.log(error.message);
      }
    }
  }
}

export let makeAPICall = () => {
  return async function (dispatch, getState) {
    try {
      let response = await axios.post(
        "https://accounts.spotify.com/api/token",
        {
          headers: {
            Authorization:
              "Basic NTljNjllNzY2NTliNGEyNDk4YzlhZGMxNmIyYWE4MWQ6ZmI4OWM4YjIwZTRhNDhjMDgxZTAyMDhmZmFmNWZhZTk=",
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
