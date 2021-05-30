export default function Track({ image, trackName, albumName, runtime, artists, preview }) {
    let getTime =()=>{
        let seconds = Math.floor(runtime/1000)
        let minutes = Math.floor(seconds/60)
        seconds = seconds%60
        return `${minutes}:${seconds<10 ? '0'+seconds:seconds}`
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
                <a href={preview}><p>Preview</p></a>
            </div>
        </div>
    )
}