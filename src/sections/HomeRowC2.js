import React, { useState, useEffect, useLayoutEffect } from "react"
import ScrollTrigger from "react-scroll-trigger"
import COLORS from "../../misc/COLORS"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faSquarePen,
  faLock,
  faBolt,
} from "@fortawesome/free-solid-svg-icons"
import * as styles from "../components/index.module.css"
import { useMediaQuery } from "react-responsive"

const boxComp = {
  marginRight: 20,
  marginLeft: 20,
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 20,
  paddingBottom: 20,
  borderRadius: 12,
}

export default function HomeRowC2() {
  const [isVisible, setIsVisible] = useState(false)
  const isSmallScreen = useMediaQuery({ maxWidth: 768 })

  const handleEnterViewport = () => {
    setIsVisible(true)
  }

  const container = {
    display: "flex",
    flexDirection: isSmallScreen ? "column" : "row",
  }

  const BoxComp = ({ title, text, iconName }) => (
    <ScrollTrigger onEnter={handleEnterViewport}>
      <div>
        <div style={boxComp}>
          <FontAwesomeIcon
            icon={iconName}
            size="3x"
            color={COLORS.green}
            style={{ marginBottom: 10 }}
          />

          <div style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
            {title}
          </div>

          <div style={{ fontWeight: "300", color: "darkgrey", maxWidth: 250 }}>
            {text}
          </div>
        </div>
      </div>
    </ScrollTrigger>
  )

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
    <div>
      <div
        className={styles.rowstitletext}
        style={{
          marginRight: 20,
          marginLeft: 20,
          marginBottom: 20,
          marginTop: 0,
        }}
      >
        GET A PLATFORM THAT IS{" "}
        <span style={{ color: COLORS.green }}>
          FAST<span style={{ color: "white" }}>,</span> SIMPLE{" "}
          <span style={{ color: "white" }}>&</span> SECURE
        </span>
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <div style={container}>
          <BoxComp
            title="Fast"
            text="Find, edit & send everything you need from one place - on mobile app & desktop"
            iconName={faBolt}
          />
          <BoxComp
            title="Simple"
            text="By people in construction for people in construction. We have you in mind"
            iconName={faSquarePen}
          />
          <BoxComp
            title="Secure"
            text="Robust leading-edge technology to keep you on track when you need it most"
            iconName={faLock}
          />
        </div>
      </div>
    </div>
  )
}
