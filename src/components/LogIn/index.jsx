import React from "react";
import Button from "../Common/Button";

import "./index.css";

export default function LogIn() {

  const scopes = ["playlist-read-private", "user-follow-read", "user-read-private", "user-top-read"];
  return (
    <div className="root">
      <a
        href={`https://accounts.spotify.com/authorize?client_id=59c69e76659b4a2498c9adc16b2aa81d&scope=${scopes.join("%20")}&redirect_uri=http:%2F%2Flocalhost:3000%2fmain&response_type=token`}
        target="_blank"
        rel="noreferrer"
      >
        <Button content="Sign in" color="white" background="green"/>
      </a>
    </div>
  );
}
