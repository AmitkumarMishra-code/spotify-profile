import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNavigation } from "../../redux/actions/action_types";

export default function SideBar() {
  const dispatch = useDispatch();

  const current = useSelector((state) => state.navigation);

  return (
    <div className="side-bar">
      <div className="logo">
        <img src="./images/spotify.svg" alt="spotify" />
      </div>

      <div className="navigation-links">
        <div
          className={`nav-link ${current === "profile" && "active"}`}
          onClick={() => dispatch(setNavigation("profile"))}
        >
          <div className="wrapper">
            <img src="./images/user.svg" alt="user" />
            <p>Profile</p>
          </div>
        </div>

        <div
          className={`nav-link ${current === "artists" && "active"}`}
          onClick={() => dispatch(setNavigation("artists"))}
        >
          <div className="wrapper">
            <img src="./images/microphone-with-wire.svg" alt="artist" />
            <p>Artists</p>
          </div>
        </div>

        <div
          className={`nav-link ${current === "tracks" && "active"}`}
          onClick={() => dispatch(setNavigation("tracks"))}
        >
          <div className="wrapper">
            <img src="./images/playlist.svg" alt="tracks" />
            <p>Tracks</p>
          </div>
        </div>

        <div
          className={`nav-link ${current === "recent" && "active"}`}
          onClick={() => dispatch(setNavigation("recent"))}
        >
          <div className="wrapper">
            <img src="./images/history.svg" alt="recent" />
            <p>Recent</p>
          </div>
        </div>

        <div
          className={`nav-link ${current === "playlists" && "active"}`}
          onClick={() => dispatch(setNavigation("playlists"))}
        >
          <div className="wrapper">
            <img src="./images/musical-note.svg" alt="tracks" />
            <p>Playlists</p>
          </div>
        </div>
      </div>

      <div className="git">
        <img src="./images/github.svg" alt="git" />
      </div>
    </div>
  );
}
