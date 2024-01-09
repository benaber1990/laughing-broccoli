import React, { useState, useEffect, useLayoutEffect } from "react"
import ScrollTrigger from "react-scroll-trigger"
import COLORS from "../../misc/COLORS"
import BigButton from "../components/BigButton"
import * as styles from "../components/index.module.css"
import { Link } from "gatsby"
import { useMediaQuery } from "react-responsive"

export default function HomeRowD() {
  const [isVisible, setIsVisible] = useState(false)

  const handleEnterViewport = () => {
    setIsVisible(true)
  }

  const isSmallScreen = useMediaQuery({ maxWidth: 768 })

  const imageStyle = {
    borderRadius: 30,
    // border: `2px solid ${COLORS.green}`,
    marginLeft: isSmallScreen ? 20 : 120,
    // width: isSmallScreen ? 0 : 600,
    // width: 120,

    height: 400, // Maintain aspect ratio
    opacity: isVisible ? 1 : 0,
    transition: "opacity 1s ease-in-out",
    marginLeft: isVisible ? 0 : "100px", // Adjust the initial left position
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
      <div className={styles.rowstitletext}>
        A{" "}
        <span style={{ color: COLORS.green }}>
          Construction Rocket in Your Pocket:
        </span>
        <br /> Real-Time App Integration
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 40,
          alignItems: "center",
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        {/* Col A */}
        <div
          style={{
            // width: isSmallScreen ? null : "40%",
            justifyContent: "flex-start",
            paddingLeft: isSmallScreen ? null : 260,
          }}
        >
          <div
            className={styles.rowstext}
            style={{
              textAlign: isSmallScreen ? "center" : "left",
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
              // width: 300,
              marginTop: 20,
              fontWeight: "700",
              display: "inline-block",
              cursor: "pointer",
              float: !isSmallScreen ? "left" : null,
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                paddingLeft: 10,
                paddingRight: 10,
                color: "white",
                fontWeight: "700",
              }}
            >
              DISCOVER ALL FEATURES
            </Link>
          </div>
        </div>

        {/* Col B */}
        <div style={{}}>
          <ScrollTrigger
            style={{
              marginLeft: isSmallScreen ? null : 200,
              marginTop: isSmallScreen ? 30 : null,
            }}
            onEnter={handleEnterViewport}
          >
            <img src="https://i.imgur.com/tQNKmHk.png" style={imageStyle} />
          </ScrollTrigger>
        </div>
      </div>
    </div>
  )
}
