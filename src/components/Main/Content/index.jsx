import React from "react";
import { useSelector } from "react-redux";
import Profile from "./Profile";


import "./contentStyles.css"
import TopTracks from './TopTracks';
import RecentlyPlayed from './RecentlyPlayed';
import TopArtists from "./TopArtists";

export default function Content() {
  const selected = useSelector((state) => state.navigation);

  let componentToRender = <></>;

    switch(selected){
        case "profile":
            componentToRender = <Profile/>
            break;
        case 'tracks':
            componentToRender = <TopTracks />
            break;
        case 'recent':
            componentToRender = <RecentlyPlayed />
            break
        case "artists":
            componentToRender = <TopArtists />;
            break;
        default:
            break;
    }

    return (
        <div className="content">
            {componentToRender}
        </div>
    )
}
