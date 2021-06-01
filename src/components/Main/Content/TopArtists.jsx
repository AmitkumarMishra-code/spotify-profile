import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../../Common/Filter";
import {
  getTopArtists,
  setArtistFilter,
} from "../../../redux/actions/action_types";

export default function TopArtists() {
  const filter = useSelector((state) => state.artists.filter);
  const artists = useSelector((state) => state.artists);

  console.log(artists);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopArtists("long_term"));
  }, [dispatch]);

  return (
    <div className="top-artists">
      <Filter heading="Top Artists" action={setArtistFilter} />
      <div className="artists-images">
        {artists[filter].map(({ images }, i) => (
          <img alt="" style={imageStyles} key={i} src={images[0]?.url}></img>
        ))}
      </div>
    </div>
  );
}

const imageStyles = {
  borderRadius: "50%",
  height: "160px",
  width: "160px",
  objectFit: "cover",
  objectPosition: "center top",
};
