import React from "react";
import { useSelector } from "react-redux";
import Filter from "../../Common/Filter";

export default function TopArtists() {
  const artists = useSelector((state) => state.artists.artistsArray);

  const res = useSelector((state) => state.artists.res);

  return (
    <div className="top-artists">
      <Filter heading="Top Artists" />
      <div className="artists-images">
        {artists.map(({ images }) => (
          <img style={imageStyles} src={images[0].url}></img>
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
