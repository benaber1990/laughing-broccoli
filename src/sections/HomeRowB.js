import React, { useState, useEffect } from "react"
import ScrollTrigger from "react-scroll-trigger"
import COLORS from "../../misc/COLORS"
import BigButton from "../components/BigButton"
import * as styles from "../components/index.module.css"
import { Link } from "gatsby"

export default function HomeRowB() {
  const [isVisible, setIsVisible] = useState(false)

  const handleEnterViewport = () => {
    setIsVisible(true)
  }

  //  Check Small Device Screen Size
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  const imageStyle = {
    // border: `2px solid ${COLORS.green}`,
    marginTop: isSmallScreen ? 0 : -120,
    marginLeft: 120,
    width: 600,
    // height: "auto", // Maintain aspect ratio
    opacity: isVisible ? 1 : 0,
    transition: "opacity 1s ease-in-out",
    marginLeft: isVisible ? 0 : "-100px",
    // Adjust the initial left position
  }

  useEffect(() => {
    const updateWindowDimensions = () => {
      setIsSmallScreen(window.innerWidth < 768)
    }

    if (typeof window !== "undefined") {
      // Only run the following code in the browser
      window.addEventListener("resize", updateWindowDimensions)
      updateWindowDimensions()

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("resize", updateWindowDimensions)
      }
    }
  }, [])

  return (
    <div
      style={{
        paddingTop: 60,
        paddingBottom: 40,
        alignItems: "center",
        justifyContent: "center",
        borderTop: isSmallScreen ? "1px solid black" : null,
        background: `linear-gradient(to bottom, ${COLORS.purple}, ${COLORS.dark})`,
      }}
    >
      <div className={styles.rowstitletext}>
        HANDLE YOUR{" "}
        <span style={{ color: COLORS.green }}>PROJECTS, TEAMS & DOCS</span> IN
        ONE PLACE
      </div>

      <div style={{ height: 20 }} />
      <div className={styles.container}>
        {/* Col A */}
        <div
          style={
            {
              // width: "40%",
              // justifyContent: "flex-start",
            }
          }
        >
          <div className={styles.rowssubtitle}>
            Communicate, Track & Manage{" "}
            <span style={{ color: COLORS.green }}>Effortlessly</span>
          </div>
          <div style={{ height: 20 }} />

          <div className={styles.rowstext}>
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
              marginTop: 20,
              fontWeight: "700",
              display: "inline-block",
              float: !isSmallScreen ? "left" : null,
              cursor: "pointer",
            }}
          >
            <Link
              to="/comingsoon"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: 700,
              }}
            >
              <div style={{ paddingLeft: 10, paddingRight: 10 }}>
                SEE HOW UNIS CAN HELP ME
              </div>
            </Link>
          </div>
        </div>

        {/* Col B */}
        <div style={{}}>
          <ScrollTrigger
            className={styles.image1}
            onEnter={handleEnterViewport}
          >
            <img src="https://i.imgur.com/aITPT0z.png" style={imageStyle} />
          </ScrollTrigger>
        </div>
      </div>
    </div>
  )
}
