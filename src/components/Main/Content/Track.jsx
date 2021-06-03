import { useEffect, useState } from "react"
import { ReactComponent as Play } from '../../../play-button.svg'
import { ReactComponent as Pause } from '../../../pause.svg'
import { ReactComponent as NoPreview } from '../../../silence.svg'
import { useDispatch, useSelector } from "react-redux"
import { setPlayerStatus } from "../../../redux/actions/action_types"

export default function Track({ image, trackName, albumName, runtime, artists, preview, handlePlay }) {
    let [clicked, setClicked] = useState(false)
    let playing = useSelector(state => state.playerStatus)
    let dispatch = useDispatch()

    let getTime = () => {
        let seconds = Math.floor(runtime / 1000)
        let minutes = Math.floor(seconds / 60)
        seconds = seconds % 60
        return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    }

    useEffect(() => {
        if (!playing) {
            setClicked(false)
        }
    }, [playing])

    useEffect(() => {
        dispatch(setPlayerStatus(clicked))
        if (clicked) {
            handlePlay(preview)
        }
        // eslint-disable-next-line
    }, [clicked])

    let clickHandler = () => {
        if (!playing) {
            setClicked(true)
        }
        else{
            setClicked(false)
        }
    }

    return (
        <div className="track">
            <div className="basic">
                <img src={image} alt="" />
                <div className="track-info">
                    <p>{trackName}</p>
                    <div className="album-info">
                        <p>{artists.join(', ')}</p>
                        <div className="dot"></div>
                        <p>{albumName}</p>
                    </div>
                </div>
            </div>
            <div className="track-runtime">
                <p>{getTime()}</p>
                {preview !== null ? <div className='preview' onClick={clickHandler}>{clicked && playing ? <Pause /> : <Play />}</div> : <div className='preview'><NoPreview /></div>}
            </div>
        </div>
    )
}