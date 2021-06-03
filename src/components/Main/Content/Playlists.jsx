import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlaylists } from "../../../redux/actions/action_types";

export default function Playlists() {
  const playlists = useSelector((state) => state.playlists);
  const dispatch = useDispatch();

  console.log(playlists);

  useEffect(() => {
    dispatch(getPlaylists());
  }, [dispatch]);
  return (
    <div className="playlists">
      <h2>Your Playlists</h2>
      <div className="playlists-container">
        {playlists.map((val) => (
          <div>
            <img style={imageStyles} src={val.image} alt="" />
            <p>{val.playlistName}</p>
            <span style={spanStyles}>{val.total} TRACKS</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const spanStyles = {
  opacity: 0.35,
  fontSize: "0.8rem",
};

const imageStyles = {
  height: "320px",
  width: "320px",
  objectFit: "cover",
  objectPosition: "center top",
};
