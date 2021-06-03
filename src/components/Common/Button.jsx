import React from "react";

export default function Button({ content, color, background, border }) {
  const buttonStyle = {
    color,
    background: background,
    padding: "1rem 2rem",
    borderRadius: "1.5rem",
    fontSize: "1rem",
    cursor: "pointer",
    border: border ? border : "none",
  };
  return <button style={buttonStyle}>{content}</button>;
}
