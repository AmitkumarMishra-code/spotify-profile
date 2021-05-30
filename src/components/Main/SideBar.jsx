import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNavigation } from "../../redux/actions/action_types";
import {ReactComponent as Profile} from '../../user.svg'
import {ReactComponent as Artists} from '../../microphone-with-wire.svg'
import {ReactComponent as Recent} from '../../history.svg'
import {ReactComponent as Playlist} from '../../playlist.svg'
import {ReactComponent as Tracks} from '../../musical-note.svg'

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
          <div className="wrapper" style = {{transform:current === 'profile' && 'scale(1.2)'}}>
            <Profile fill = {current === 'profile' ? '#ffffff':'#9b9a9d'}/>
            <p>Profile</p>
          </div>
        </div>

        <div
          className={`nav-link ${current === "artists" && "active"}`}
          onClick={() => dispatch(setNavigation("artists"))}
        >
          <div className="wrapper" style = {{transform:current === 'artists' && 'scale(1.2)'}}>
            <Artists fill = {current === 'artists' ? '#ffffff':'#9b9a9d'}/>
            <p>Artists</p>
          </div>
        </div>

        <div
          className={`nav-link ${current === "tracks" && "active"}`}
          onClick={() => dispatch(setNavigation("tracks"))}
        >
          <div className="wrapper" style = {{transform:current === 'tracks' && 'scale(1.2)'}}>
            <Playlist fill = {current === 'tracks' ? '#ffffff':'#9b9a9d'}/>
            <p>Tracks</p>
          </div>
        </div>

        <div
          className={`nav-link ${current === "recent" && "active"}`}
          onClick={() => dispatch(setNavigation("recent"))}
        >
          <div className="wrapper" style = {{transform:current === 'recent' && 'scale(1.2)'}}>
            <Recent fill = {current === 'recent' ? '#ffffff':'#9b9a9d'}/>
            <p>Recent</p>
          </div>
        </div>

        <div
          className={`nav-link ${current === "playlists" && "active"}`}
          onClick={() => dispatch(setNavigation("playlists"))}
        >
          <div className="wrapper" style = {{transform:current === 'playlists' && 'scale(1.2)'}}>
            <Tracks fill = {current === 'playlists' ? '#ffffff':'#9b9a9d'}/>
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
