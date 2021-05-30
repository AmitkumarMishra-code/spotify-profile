export default function Track({ image, trackName, albumName, runtime, artists, preview }) {
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
                <p>{Math.floor(runtime/60000)}:{(runtime%60000).toString().substring(0,2)}</p>
                <a href={preview}><p>Preview</p></a>
            </div>
        </div>
    )
}