import React, { useState } from "react"
import ScrollTrigger from "react-scroll-trigger"
import COLORS from "../../misc/COLORS"

export default function HomeRowC() {
  const [isVisible, setIsVisible] = useState(false)

  const handleEnterViewport = () => {
    setIsVisible(true)
  }

  const imageStyle = {
    opacity: isVisible ? 1 : 0,
    transition: "opacity 1s ease-in-out",
    marginLeft: isVisible ? 0 : "-100px",
    height: 500,
    padding: 70,
    resize: "contain",
    borderRadius: 30,

    opacity: isVisible ? 1 : 0,
    transition: "opacity 1s ease-in-out",
    marginLeft: isVisible ? 0 : "-100px", // Adjust the initial left position
  }

  return (
    <div style={{ width: "100%", marginTop: 120 }}>
      <div
        style={{
          color: "white",
          fontSize: 48,
          fontWeight: "700",
          //   marginBottom: 30,
        }}
      >
        ALL YOU NEED IN <span style={{ color: COLORS.green }}>ONE PLACE</span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          //   justifyContent: "center",
        }}
      >
        {/* Col A */}
        <div style={{ width: "50%" }}>
          <ScrollTrigger
            style={{ borderRadius: 30 }}
            onEnter={handleEnterViewport}
          >
            <img src="https://i.imgur.com/dQYsrqC.png" style={imageStyle} />
          </ScrollTrigger>
        </div>
        {/* Col B */}
        <div style={{ width: "50%", paddingRight: 120, marginBottom: 20 }}>
          <div
            style={{
              color: "white",
              marginTop: 10,
              textAlign: "left",
              fontSize: 20,
            }}
          >
            The ideal construction management software didn’t exist - so we
            built it
            <br /> <br />{" "}
            <span>
              <span style={{ color: COLORS.green, fontWeight: "700" }}>
                UNIS
              </span>{" "}
            </span>
            is for construction companies who want less hassle, better
            communication and more efficiency
            <br /> <br /> Unlock exclusive tools built to help companies like
            yours succeed
          </div>

          <div
            style={{
              backgroundColor: COLORS.purple,
              color: "white",
              paddingLeft: 15,
              paddingRight: 15,
              paddingTop: 8,
              paddingBottom: 8,
              borderRadius: 40,
              width: 300,
              marginTop: 20,
              fontWeight: "700",
            }}
          >
            SEE HOW UNIS CAN HELP ME
          </div>
        </div>
      </div>
    </div>
  )
}
