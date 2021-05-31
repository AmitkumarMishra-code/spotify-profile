import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// eslint-disable-next-line
import { getToken } from "../../redux/actions/action_types";
import Content from "./Content";
import SideBar from "./SideBar";

import "./styles.css";

export default function Main() {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getToken());
  }, []);
  return (
    <div className="main">
      <SideBar />
      <Content />
    </div>
  );
}
