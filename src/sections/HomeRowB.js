import React, { useState } from "react"
import ScrollTrigger from "react-scroll-trigger"
import COLORS from "../../misc/COLORS"
import BigButton from "../components/BigButton"

export default function HomeRowB() {
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
        paddingBottom: 40,
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(to bottom, ${COLORS.purple}, ${COLORS.dark})`,
      }}
    >
      <div style={{ color: "white", fontSize: 48, fontWeight: "700" }}>
        ACCOMPLISH MORE WITH <span style={{ color: COLORS.green }}>UNIS</span>
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
              color: "white",
              fontSize: 42,
              fontWeight: "700",
              textAlign: "left",
              lineHeight: 1.2,
            }}
          >
            Communicate, Track & Manage{" "}
            <span style={{ color: COLORS.green }}>Effortlessly</span>
          </div>

          <div
            style={{
              color: "white",
              marginTop: 10,
              textAlign: "left",
              fontSize: 20,
            }}
          >
            Say goodbye to jumping between programmes and hello to handling your
            construction company from one place. <br />
            <br />
            We’ve packed all of the most important areas of construction into
            one simple-to-use dashboard & app software
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
