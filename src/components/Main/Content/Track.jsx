export default function Track({image, trackName, albumName, runtime, artists}){
    return(
        <div className="track">
            <div className="album-image">
                <img src={image} alt="" />
            </div>
            <div className="track-info">
                <p>{trackName}</p>
                <div className="album-info">
                <p>{artists}</p>
                <p>.</p>
                <p>{albumName}</p>
                </div>

            </div>
            <div className="track-runtime">{runtime}</div>
        </div>
    )
}