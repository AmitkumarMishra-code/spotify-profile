import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Filter({ heading, action }) {
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();
  return (
    <div style={FilterStyle}>
      <h2>{heading}</h2>
      <div style={filterLinksStyle}>
        <p
          style={active === 0 ? ActiveStyle : PStyle}
          onClick={() => {
            setActive(0);
            dispatch(action("long_term"));
          }}
        >
          All time
        </p>
        <p
          style={active === 1 ? ActiveStyle : PStyle}
          onClick={() => {
            setActive(1);
            dispatch(action("medium_term"));
          }}
        >
          Last 6 months
        </p>
        <p
          style={active === 2 ? ActiveStyle : PStyle}
          onClick={() => {
            setActive(2);
            dispatch(action("short_term"));
          }}
        >
          Last 4 weeks
        </p>
      </div>
    </div>
  );
}

const FilterStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  color: "white",
};

const filterLinksStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
};

const ActiveStyle = {
  cursor: "pointer",
  textDecoration: "underline",
};

const PStyle = {
  cursor: "pointer",
};
