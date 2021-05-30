import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setTracksFilter } from "../../../redux/actions/action_types";
import Filter from "../../Common/Filter";
import Track from "./Track";

export default function TopTracks() {
    let { tracks, filter } = useSelector(state => state.tracks)

    let visibleTracks = () => {
        if(filter === 'long_term'){
            return tracks.long_term
        }
        else if (filter === 'medium_term'){
            return tracks.medium_term
        }
        else{
            return tracks.short_term
        }
    }

    return (
        <div className="top-tracks">
            <Filter heading={'Top Tracks'} action={setTracksFilter} />
            <div className="tracks-list">
                {visibleTracks().map((track, idx)=> <Track key = {idx} />)}
            </div>
        </div>
    )
}

// album, artists, duration_ms, name, preview_url