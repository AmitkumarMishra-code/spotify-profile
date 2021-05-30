import { useState } from "react";

export default function Filter({ heading }) {
  const [active, setActive] = useState(0);
  return (
    <div style={FilterStyle}>
      <h2>{heading}</h2>
      <div style={filterLinksStyle}>
        <p
          style={active === 0 ? ActiveStyle : PStyle}
          onClick={() => setActive(0)}
        >
          All time
        </p>
        <p
          style={active === 1 ? ActiveStyle : PStyle}
          onClick={() => setActive(1)}
        >
          Last 6 months
        </p>
        <p
          style={active === 2 ? ActiveStyle : PStyle}
          onClick={() => setActive(2)}
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
