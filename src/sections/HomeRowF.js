import React, { useState, useEffect, useLayoutEffect } from "react"
import COLORS from "../../misc/COLORS"
import * as styles from "../components/index.module.css"

export default function HomeRowF() {
  //  Check Small Device Screen Size
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useLayoutEffect(() => {
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
    <div style={{ marginTop: 120, marginBottom: 40 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          // flexDirection: "column",
          marginTop: 120,
        }}
      >
        {/* Col A */}
        <div
          style={{
            paddingLeft: isSmallScreen ? 20 : 100,
            paddingRight: isSmallScreen ? 20 : null,
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            alignItems: isSmallScreen ? "center" : null,
          }}
        >
          <div
            className={styles.rowstitletext}
            style={{
              fontSize: isSmallScreen ? 36 : null,
              textAlign: isSmallScreen ? "center" : "left",
            }}
          >
            Unlock the power of{" "}
            <span style={{ color: COLORS.green }}>UNIS</span> today & organise
            your company with one platform
          </div>
          <div
            style={{
              color: "white",
              fontSize: 22,
              textAlign: isSmallScreen ? "center" : "left",
              marginTop: 10,
            }}
          >
            Talk to our team today to find out more
          </div>
        </div>

        {/* Col B */}
        <div
          style={{
            width: isSmallScreen ? null : "50%",
            marginLeft: isSmallScreen ? 0 : 120,
            marginRight: isSmallScreen ? 0 : 160,
          }}
        >
          <div style={{ marginRight: isSmallScreen ? 0 : 60 }}>
            {!isSmallScreen ? (
              <img
                src="https://i.imgur.com/CBR1m7R.png"
                style={{ margin: 20, borderRadius: 30, marginTop: 0 }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
