import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecentlyPlayed, setPlayerStatus } from "../../../redux/actions/action_types";
import Track from "./Track";

export default function RecentlyPlayed() {
    let recentlyPlayed = useSelector(state => state.recentlyPlayed)
    let [audio, setAudio] = useState(null)
  let playing = useSelector(state => state.playerStatus)

    let handlePlay = (preview) => {
        setAudio(new Audio(preview))
    }

    useEffect(() => {
        if (audio) {
            playing ? audio.play() : audio.pause()
        }
        // eslint-disable-next-line
    }, [playing])

    useEffect(() => {
        if (audio) {
            audio.addEventListener('ended', () => {
                dispatch(setPlayerStatus(false))
                setAudio(null)
            })
        }
        // eslint-disable-next-line
    }, [audio])

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRecentlyPlayed())
        // eslint-disable-next-line
    }, [])
    return (
        <div className="recently-played">
            <h2>Recently Played Tracks</h2>
            <div className="tracks-list">
                {recentlyPlayed.map((track, idx) => <Track key={idx} image={track.albumImage} trackName={track.trackName} albumName={track.albumName} runtime={track.trackDuration} artists={track.artists} preview={track.trackPreview} handlePlay={handlePlay}/>)}
            </div>
        </div>
    )
}