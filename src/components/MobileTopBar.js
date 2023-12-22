import React from "react"
import COLORS from "../../misc/COLORS"

export default function MobileTopBar({ onClick }) {
  const container = {
    // backgroundColor: COLORS.purple,
    display: "flex",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: "space-between",
    color: COLORS.purple,
  }

  return (
    <div style={container}>
      <img src="https://i.imgur.com/vIhCAJH.png" style={{ width: 40 }} />
      <div></div>
      <div style={{ paddingTop: 10 }} onClick={onClick}>
        Menu
      </div>
    </div>
  )
}
