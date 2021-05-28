import React from "react";

export default function SideBar() {
  return (
    <div className="side-bar">
      <div className="logo">
        <img src="./images/spotify.svg" alt="spotify" />
      </div>

      <div className="navigation-links">
          
        <div className="nav-link">
          <img src="./images/user.svg" alt="user" />
          <p>Profile</p>
        </div>

        <div className="nav-link">
          <img src="./images/microphone-with-wire.svg" alt="artist" />
          <p>Artists</p>
        </div>

        <div className="nav-link">
          <img src="./images/playlist.svg" alt="playlist" />
          <p>Tracks</p>
        </div>

        <div className="nav-link">
          <img src="./images/history.svg" alt="recent" />
          <p>Recent</p>
        </div>

        <div className="nav-link">
          <img src="./images/musical-note.svg" alt="tracks" />
          <p>Playlists</p>
        </div>

      </div>

      <div className="git">
        <img src="./images/github.svg" alt="git" />
      </div>
    </div>
  );
}
