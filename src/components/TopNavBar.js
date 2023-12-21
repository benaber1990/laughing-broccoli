import React from "react"
import COLORS from "../../misc/COLORS"

const InvestorsButton = ({ title }) => (
  <div
    style={{
      //   background: `linear-gradient(to right, black, orange`,
      //   backgroundColor: "red",
      //   paddingTop: 8,
      //   paddingBottom: 8,
      paddingLeft: 12,
      paddingRight: 12,
      borderRadius: 40,
      width: 100,
      border: "2px solid",
      marginRight: 20,
      cursor: "pointer",
      maxHeight: 45,
      alignItems: "center",
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      paddingBottom: 1,
    }}
  >
    <div>{title}</div>
  </div>
)

const SignInButton = ({ title }) => (
  <div
    style={{
      //   backgroundColor: "red",
      //   paddingTop: 8,
      //   paddingBottom: 8,
      paddingLeft: 12,
      paddingRight: 12,
      borderRadius: 40,
      width: 100,
      border: "2px solid",
      marginRight: 20,
      cursor: "pointer",
      maxHeight: 45,
      alignItems: "center",
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      paddingBottom: 1,
    }}
  >
    <div>{title}</div>
  </div>
)

const SignUpButton = ({ title }) => (
  <div
    style={{
      background: `linear-gradient(to right, ${COLORS.purple}, ${COLORS.green})`,
      //   paddingTop: 8,
      //   paddingBottom: 8,
      paddingLeft: 12,
      paddingRight: 12,
      borderRadius: 40,
      width: 100,
      border: "2px solid",
      cursor: "pointer",
      maxHeight: 45,
      alignItems: "center",
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      paddingBottom: 1,
    }}
  >
    <div>{title}</div>
  </div>
)

export default function TopNavBar() {
  return (
    <div
      style={{
        color: "white",
        paddingTop: 20,
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: 100,
        paddingRight: 100,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src="https://i.imgur.com/vIhCAJH.png" style={{ width: 50 }} />
        <div style={{ paddingBottom: 30, display: "flex" }}>
          <div style={{ marginLeft: 30, fontSize: 18, fontWeight: "700" }}>
            Home
          </div>
          <div style={{ marginLeft: 20, fontSize: 18 }}>Features</div>
          <div style={{ marginLeft: 20, fontSize: 18 }}>Pricing</div>
          <div style={{ marginLeft: 20, fontSize: 18 }}>App</div>
          <div style={{ marginLeft: 20, fontSize: 18 }}>Contact</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <InvestorsButton title="Investors" />
        <SignInButton title="Sign In" />
        <SignUpButton title="Sign Up" />
      </div>
    </div>
  )
}
