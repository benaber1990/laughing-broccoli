import React from "react"
import COLORS from "../../misc/COLORS"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"

export default function MobileMenu({ onClick }) {
  const container = {
    // backgroundColor: COLORS.green,
    marginTop: -30,
    paddingTop: 40,
    paddingBottom: 60,
    borderRadius: 20,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 100,
    background: `radial-gradient(circle at 50% 0%, #000 70%, ${COLORS.purple})`,
  }

  const linkContainer = {
    marginLeft: 20,
    fontSize: 18,
    color: "white",
    marginBottom: 10,
    cursor: "pointer",
  }

  return (
    <div style={container}>
      <div
        onClick={onClick}
        style={{ display: "flex", justifyContent: "flex-end", marginRight: 30 }}
      >
        <FontAwesomeIcon
          icon={faClose}
          size="2x"
          color={COLORS.purple}
          style={{ alignSelf: "flex-end" }}
        />
      </div>
      <div style={{}}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div style={linkContainer}>Home</div>
        </Link>
        <Link to="/comingsoon" style={{ textDecoration: "none" }}>
          <div style={linkContainer}>Features</div>
        </Link>

        <Link to="/comingsoon" style={{ textDecoration: "none" }}>
          <div style={linkContainer}>Pricing</div>
        </Link>

        <Link to="/comingsoon" style={{ textDecoration: "none" }}>
          <div style={linkContainer}>App</div>
        </Link>

        <Link to="/investors" style={{ textDecoration: "none" }}>
          <div style={linkContainer}>Investors</div>
        </Link>

        <Link to="/comingsoon" style={{ textDecoration: "none" }}>
          <div style={{ marginLeft: 20, fontSize: 18, color: "white" }}>
            Contact
          </div>
        </Link>
      </div>
    </div>
  )
}
