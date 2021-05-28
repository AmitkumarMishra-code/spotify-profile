import React from 'react'

export default function Button({content, color, background}) {

    const buttonStyle = {
        color,
        background: background,
        border: "none",
        padding: "1rem 2rem",
        borderRadius: "1.5rem",
        fontSize: "1rem",
        cursor: "pointer"
    }
    return (
        <button style={buttonStyle}>
            {content}
        </button>
    )
}
