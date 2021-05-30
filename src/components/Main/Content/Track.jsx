import { useEffect, useState } from "react"
import {ReactComponent as Play} from '../../../play-button.svg'
import {ReactComponent as Pause} from '../../../pause.svg'
import {ReactComponent as NoPreview} from '../../../silence.svg'

export default function Track({ image, trackName, albumName, runtime, artists, preview }) {
    let [playing, setPlaying] = useState(false)
    let [audio] = useState(new Audio(preview))
    let getTime = () => {
        let seconds = Math.floor(runtime / 1000)
        let minutes = Math.floor(seconds / 60)
        seconds = seconds % 60
        return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    }
    let audioHandler = () => {
        setPlaying(!playing)
    }

    useEffect(() => {
        playing ? audio.play() : audio.pause()
    }, [playing])

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false))
    }, [])

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
                {preview!==null ? <div className='preview' onClick={audioHandler}>{!playing ? <Play/> : <Pause/>}</div> : <div className = 'preview'><NoPreview/></div>}
            </div>
        </div>
    )
}