import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTopTracks,
  getUserProfile,
  setArtistFilter,
  setNavigation,
  setPlayerStatus,
} from "../../../redux/actions/action_types";
import Button from "../../Common/Button";
import Track from "./Track";

const url = "https://www.spotify.com/logout/";

export default function Profile() {
  const { user, following, playlists } = useSelector((state) => state.user);
  const filter = useSelector((state) => state.artists.filter);
  const artists = useSelector((state) => state.artists);
  const tracksLongTerm = useSelector((state) => state.tracks.tracks.long_term);
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

    useEffect(() => {
        dispatch(getTopTracks('long_term'))
        // eslint-disable-next-line
    }, [])

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
    dispatch(setArtistFilter("long_term"));
    dispatch(getTopTracks("long_term"));
  }, [dispatch]);
  if (!user) {
    return <></>;
  }

  function handleLogOut() {
    const spotifyLogoutWindow = window.open(
      url,
      "Spotify Logout",
      "width=700,height=500,top=40,left=40"
    );
    setTimeout(() => spotifyLogoutWindow.close(), 0);
  }

  return (
    <div className="profile w-full">
      <picture>
        <source srcset={user?.images[0]?.url} />
        <source srcset="/images/user.svg" />
        <img
          className="avatar"
          alt=""
          style={
            user.images[0]
              ? {}
              : { border: "1px solid white", paddingTop: "10px" }
          }
        />
      </picture>

      <h2>{user.display_name}</h2>
      <div className="details">
        <div className="following">
          <h3>Following</h3>
          <p>{following.artists.total}</p>
        </div>
        <div className="followers">
          <h3>Followers</h3>
          <p>{user.followers.total}</p>
        </div>
        <div className="profile-playlists">
          <h3>Playlists</h3>
          <p>{playlists.total}</p>
        </div>
      </div>
      <a href="/" onClick={handleLogOut}>
        <Button
          content="LOGOUT"
          background="transparent"
          color="white"
          border="2px solid white"
        />
      </a>

      <div className="w-full flex mt-10">
        <div className="w-1/2 flex flex-col gap-5 px-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl">Top Artists Of All Time</h2>
            <button
              className="border border-white rounded-full pt-2 pb-2 pl-4 pr-4  "
              onClick={() => dispatch(setNavigation("artists"))}
            >
              See more
            </button>
          </div>
          <div className="flex flex-col gap-4 ">
            {artists[filter].map(({ images, name }, i) => (
              <div className="flex items-center gap-5">
                <img
                  alt=""
                  key={i}
                  src={images[0]?.url}
                  className="w-14 rounded-full"
                ></img>
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-5 px-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl">Top Tracks Of All Time</h2>
            <button
              className="border border-white rounded-full pt-2 pb-2 pl-4 pr-4  "
              onClick={() => dispatch(setNavigation("tracks"))}
            >
              See more
            </button>
          </div>
          <div className="flex flex-col gap-4 profile-tracks">
            {tracksLongTerm.map((track, idx) => (
              <Track
                key={idx}
                image={track.albumImage}
                trackName={track.trackName}
                albumName={track.albumName}
                runtime={track.trackDuration}
                artists={track.artists}
                preview={track.trackPreview}
                handlePlay={handlePlay}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
