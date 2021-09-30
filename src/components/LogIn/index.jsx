import React from "react";
import Button from "../Common/Button";

import "./index.css";

export default function LogIn() {
  const scopes = [
    "playlist-read-private",
    "user-follow-read",
    "user-read-private",
    "user-top-read",
    "user-read-recently-played",
    "playlist-read-private",
  ];

  let redirect = "http:%2F%2Flocalhost:3000%2fmain";

  if (window.location.href === "https://spotify-starter.netlify.app/") {
    redirect = "https:%2F%2Fkeen-lumiere-be6db9.netlify.app%2fmain";
  }

  return (
    <div className="root">
      <h2>Spotify Profile</h2>
      <a
        href={`https://accounts.spotify.com/authorize?client_id=59c69e76659b4a2498c9adc16b2aa81d&scope=${scopes.join(
          "%20"
        )}&redirect_uri=${redirect}&response_type=token`}
      >
        <Button content="Log in to Spotify" color="white" background="green" />
      </a>
    </div>
  );
}
