import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecentlyPlayed } from "../../../redux/actions/action_types";
import Track from "./Track";

export default function RecentlyPlayed() {
    let recentlyPlayed = useSelector(state => state.recentlyPlayed)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRecentlyPlayed())
        // eslint-disable-next-line
    }, [])
    return (
        <div className="recently-played">
            <h2>Recently Played Tracks</h2>
            <div className="tracks-list">
                {recentlyPlayed.map((track, idx) => <Track key={idx} image={track.albumImage} trackName={track.trackName} albumName={track.albumName} runtime={track.trackDuration} artists={track.artists} preview={track.trackPreview} />)}
            </div>
        </div>
    )
}