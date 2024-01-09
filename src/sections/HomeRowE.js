import React, { useState, useEffect, useLayoutEffect } from "react"
import COLORS from "../../misc/COLORS"
import { Link } from "gatsby"
import { useMediaQuery } from "react-responsive"

export default function HomeRowE() {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 })

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: 120,
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: isSmallScreen ? 42 : 48,
          fontWeight: "700",
          lineHeight: 1.1,
          paddingRight: 10,
          paddingLeft: 10,
        }}
      >
        ONE PLACE TO MANAGE
        <br /> YOUR CONSTRUCTION COMPANY
      </div>

      <div
        style={{
          color: "white",
          marginTop: 10,
          fontSize: 20,
          textAlign: "center",
        }}
      ></div>
      <div
        style={{
          backgroundColor: COLORS.purple,
          color: "white",
          paddingTop: 8,
          paddingBottom: 8,
          borderRadius: 40,
          // width: 300,
          textAlign: "center",
          marginTop: 20,
          fontWeight: "700",
          display: "flex",
          alignSelf: "center",
        }}
      >
        <Link
          to="/comingsoon"
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "700",
          }}
        >
          <div style={{ paddingLeft: 10, paddingRight: 10 }}>
            UNLOCK THE POWER OF UNIS
          </div>
        </Link>
      </div>
    </div>
  )
}
