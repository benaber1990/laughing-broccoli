import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled, { keyframes } from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import BigButton from "../components/BigButton"
import COLORS from "../../misc/COLORS"
import HomeRowB from "../sections/HomeRowB"
import HomeRowC from "../sections/HomeRowC"
import HomeRowD from "../sections/HomeRowD"
import HomeRowE from "../sections/HomeRowE"
import HomeRowF from "../sections/HomeRowF"
import HomeMainButton from "../../misc/HomeMainButton"
import TopNavBar from "../components/TopNavBar"
import HomeRowC2 from "../sections/HomeRowC2"
import MobileTopBar from "../components/MobileTopBar"

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => {
  // Define the keyframes for the color animation
  // Define the keyframes for the color animation
  const colorAnimation = keyframes`
  0%, 100% { color: #48d893; } /* Green */
  12.5% { color: #61c9a8; }
  25% { color: #7abfbf; }
  37.5% { color: #93b5d4; }
  50% { color: #a8aecf; } /* Gray */
  62.5% { color: #9f98c5; }
  75% { color: #9372ba; }
  87.5% { color: #8c52ff; } /* Purple */
`

  // Create a styled component with the animation
  const AnimatedText = styled.div`
    animation: ${colorAnimation} 16s infinite; /* 16s duration, infinite loop */
  `

  const colorAnimationPurpleToWhite = keyframes`
  0%, 100% { color: #8c52ff; } /* Purple */
  12.5% { color: #9872ff; }
  25% { color: #a994ff; }
  37.5% { color: #bcb0ff; }
  50% { color: #e1d3ff; } /* Light Purple */
  62.5% { color: #ffffff; } /* White */
  75% { color: #ffffff; } /* White */
  87.5% { color: #8c52ff; } /* Purple */
`

  // Create a styled component with the animation
  const AnimatedTextPurpleToWhite = styled.div`
    animation: ${colorAnimationPurpleToWhite} 8s infinite; /* 8s duration, infinite loop */
    display: inline; /* or display: inline-block; */
  `

  //  Check Small Device Screen Size
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    // Function to update isSmallScreen state based on window width
    const updateWindowDimensions = () => {
      setIsSmallScreen(window.innerWidth < 768) // You can adjust the threshold (768) based on your design
    }

    // Event listener to update state when the window is resized
    window.addEventListener("resize", updateWindowDimensions)

    // Initial call to set the initial state
    updateWindowDimensions()

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWindowDimensions)
    }
  }, [])

  return (
    <Layout>
      <div className={styles.textCenter}>
        {/* <StaticImage
        src="https://i.imgur.com/vIhCAJH.png"
        loading="eager"
        width={48}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: 0 }}
      /> */}

        <div
          style={{
            background: `radial-gradient(circle at 50% 0%, #000 70%, ${COLORS.purple})`,
          }}
        >
          <div className={styles.hiddenonsmall}>
            <TopNavBar />
          </div>

          {isSmallScreen ? <MobileTopBar /> : null}
          <div className={styles.herocontainer} />
          {/* Col A */}
          <div style={{}}>
            <div
              className={styles.siteheadertext}
              // style={{
              //   lineHeight: 1.2,
              //   fontWeight: "700",
              //   color: "white",
              //   textAlign: "center",
              //   width: "100%",
              //   marginTop: 120,
              // }}
            >
              Construction Management
              <br />
              <span style={{ color: "white" }}>
                <AnimatedText>in One Place</AnimatedText>
              </span>
            </div>
            <div style={{ height: 10 }} />
            <div className={styles.sitesubheader}>
              Get an{" "}
              <span style={{ fontWeight: "700", color: COLORS.purple }}>
                <AnimatedTextPurpleToWhite>
                  AI-Powered
                </AnimatedTextPurpleToWhite>
              </span>{" "}
              app & desktop dashboard {!isSmallScreen ? <br /> : null}
              for everything from conception to completion
            </div>

            {/* Horizontal Line */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 60,
              }}
            >
              <div
                style={{
                  height: 1,
                  width: isSmallScreen ? 400 : 800,
                  background: `linear-gradient(to left, ${COLORS.green}, ${COLORS.purple})`,
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ color: "white", marginTop: 40, fontSize: 18 }}>
                  Send me my free{" "}
                  <span style={{ color: COLORS.green, fontWeight: "700" }}>
                    UNIS
                  </span>{" "}
                  info pack:
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 5,
                  }}
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={styles.emailinput}
                  />
                  <button type="submit" className={styles.emailsubmit}>
                    Submit
                  </button>
                </div>
              </div>
              <HomeMainButton />
              <div style={{ height: isSmallScreen ? 100 : 200 }} />
            </div>
          </div>

          {/* Col B */}
          <div
            style={{
              marginRight: 160,
              width: "40%",
              backgroundImage: '"https://i.imgur.com/XPsr0yf.png"',
            }}
          >
            {/* <img
            src="https://i.imgur.com/XPsr0yf.png"
            style={{
              // width: 1200,
              height: 800,
              // resize: "contain",
              objectFit: "cover",
              marginTop: -30,
            }}
          /> */}
          </div>
        </div>

        {/* Row B */}
        <div style={{}}>
          <HomeRowB />
        </div>

        {/* Row C2 */}
        <div style={{ paddingTop: 40 }}>
          <HomeRowC2 />
        </div>

        {/* Row C */}
        <div>
          <HomeRowC />
        </div>

        {/* Row D */}
        <div>
          <HomeRowD />
        </div>

        {/* Row E */}
        <div>
          <HomeRowE />
        </div>

        {/* Row F */}
        <div>
          <HomeRowF />
        </div>

        <h2>All your team needs to be connected, compliant & competitive</h2>
      </div>
      {moreLinks.map((link, i) => (
        <React.Fragment key={link.url}></React.Fragment>
      ))}
    </Layout>
  )
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
