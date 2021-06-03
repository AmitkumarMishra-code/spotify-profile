import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopTracks, setPlayerStatus, setTracksFilter } from "../../../redux/actions/action_types";
import Filter from "../../Common/Filter";
import Track from "./Track";

export default function TopTracks() {
    let { tracks, filter } = useSelector(state => state.tracks)
    let [audio, setAudio] = useState(null)
    const dispatch = useDispatch()

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

    useEffect(() => {
        dispatch(getTopTracks('long_term'))
        // eslint-disable-next-line
    }, [])

    let visibleTracks = () => {
        if (filter === 'long_term') {
            return tracks.long_term
        }
        else if (filter === 'medium_term') {
            if (tracks.medium_term.length === 0) {
                dispatch(getTopTracks('medium_term'))
            }
            return tracks.medium_term
        }
        else {
            if (tracks.short_term.length === 0) {
                dispatch(getTopTracks('short_term'))
            }
            return tracks.short_term
        }
    }

    return (
        <div className="top-tracks">
            <Filter heading={'Top Tracks'} action={setTracksFilter} />
            <div className="tracks-list">
                {visibleTracks().map((track, idx) => <Track key={idx} image={track.albumImage} trackName={track.trackName} albumName={track.albumName} runtime={track.trackDuration} artists={track.artists} preview={track.trackPreview} handlePlay={handlePlay} />)}
            </div>
        </div>
    )
}

