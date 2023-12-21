import React from "react"
import COLORS from "../../misc/COLORS"

export default function HomeRowE() {
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
          fontSize: 48,
          fontWeight: "700",
          lineHeight: 1.1,
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
        <div style={{ paddingLeft: 30, paddingRight: 30 }}>
          SEE HOW UNIS CAN HELP ME
        </div>
      </div>
    </div>
  )
}
