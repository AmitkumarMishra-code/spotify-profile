import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../../redux/actions/action_types";

export default function Profile() {
  const { user, following, playlists } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  if (!user) {
    return <></>;
  }

  return (
    <div className="profile">
      <img src={user.images[0].url} alt="" />
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
        <div className="playlists">
              <h3>Playlists</h3>
              <p>{playlists.total}</p>
        </div>

      </div>
    </div>
  );
}
