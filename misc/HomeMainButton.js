import React, { useState } from "react"
import { Link } from "gatsby"

const COLORS = {
  green: "#47d792", // Replace with your actual green color value
  underlineColor: "#06011f",
}

const HomeMainButton = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  const hasClickedHandler = () => {
    setClicked(p => !p)
  }

  const buttonStyle = {
    marginTop: 20,
    border: `3px solid ${COLORS.green}`,
    borderRadius: 3,
    color: isHovered ? "#06011f" : COLORS.green,
    fontSize: 20,
    fontWeight: "700",
    // width: 300,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: isHovered ? COLORS.green : "", // Set background color conditionally
    transition: "background-color 0.3s ease", // Optional: Add transition for a smoother effect
    textDecoration: isHovered ? `underline ${COLORS.underlineColor}` : "none",
    cursor: "pointer",
  }

  return (
    <div>
      <Link
        to="/comingsoon"
        style={{
          textDecoration: "none",
          color: COLORS.green,
        }}
      >
        <div
          style={buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={hasClickedHandler}
        >
          Start Free Trial
        </div>
      </Link>
    </div>
  )
}

export default HomeMainButton
