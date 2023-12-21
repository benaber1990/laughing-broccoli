import React, { useState } from "react"
import ScrollTrigger from "react-scroll-trigger"
import COLORS from "../../misc/COLORS"
import BigButton from "../components/BigButton"

export default function HomeRowD() {
  const [isVisible, setIsVisible] = useState(false)

  const handleEnterViewport = () => {
    setIsVisible(true)
  }

  const imageStyle = {
    borderRadius: 30,
    border: `2px solid ${COLORS.green}`,
    marginLeft: 120,
    width: 600,
    height: "auto", // Maintain aspect ratio
    opacity: isVisible ? 1 : 0,
    transition: "opacity 1s ease-in-out",
    marginLeft: isVisible ? 0 : "-100px", // Adjust the initial left position
  }

  return (
    <div
      style={{
        paddingTop: 60,
        paddingBottom: 60,
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(to right, ${COLORS.purple}, ${COLORS.dark})`,
      }}
    >
      <div style={{ color: "white", fontSize: 48, fontWeight: "700" }}>
        All You Need On The Move with Real-Time App Integration
      </div>

      <div style={{ display: "flex", marginTop: 40, alignItems: "center" }}>
        {/* Col A */}
        <div
          style={{
            width: "40%",
            justifyContent: "flex-start",
            paddingLeft: 180,
          }}
        >
          <div
            style={{
              textAlign: "left",
              color: "white",
              fontSize: 20,
            }}
          >
            The{" "}
            <span style={{ color: COLORS.green, fontWeight: "700" }}>
              UNIS App
            </span>{" "}
            is everything you need when you’re on the move - all in one place:{" "}
            <br />
            Store all your credentials & cards
            <br />
            Free personal business card <br />
            Get your unique QR code for one-click scanning & sharing
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

        {/* Col B */}
        <div style={{}}>
          <ScrollTrigger
            style={{ marginLeft: 200 }}
            onEnter={handleEnterViewport}
          >
            <img src="https://i.imgur.com/BwV3fgr.png" style={imageStyle} />
          </ScrollTrigger>
        </div>
      </div>
    </div>
  )
}
