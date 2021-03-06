import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserProfile } from "../../redux/actions/action_types";
// eslint-disable-next-line
import { getToken } from "../../redux/actions/action_types";

import Content from "./Content";
import SideBar from "./SideBar";

import "./styles.css";

export default function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  return (
    <div className="main">
      <SideBar />
      <Content />
    </div>
  );
}
