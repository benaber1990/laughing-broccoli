import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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

const IndexPage = () => (
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
          // display: "flex",
          // paddingTop: 120,
          paddingBottom: 160,
          alignItems: "center",
          justifyContent: "center",
          background: `radial-gradient(circle at 50% 0%, #000 70%, ${COLORS.purple})`,
        }}
      >
        <TopNavBar />
        <div style={{ height: 100 }} />
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
            <br /> <span style={{ fontWeight: "300" }}>in</span>{" "}
            <span style={{ color: COLORS.green }}>One Place</span>
          </div>
          <div
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 32,
              lineHeight: 1.3,
              fontWeight: "400",
              marginTop: 10,
            }}
          >
            Get an{" "}
            <span style={{ fontWeight: "700", color: COLORS.purple }}>
              AI-Powered
            </span>{" "}
            app & dekstop dashboard <br />
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
                width: 1200,
                background: "white",
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
                  style={{
                    width: 400,
                    paddingTop: 15,
                    paddingBottom: 15,
                    backgroundColor: "white",
                    // padding: "10px",
                    // marginBottom: "10px",
                    border: "0px solid #ccc",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                    boxSizing: "border-box",
                    paddingLeft: 20,
                    fontSize: 18,
                    alignItems: "center",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    width: 150,
                    color: "white",
                    fontSize: 18,
                    fontWeight: "900",

                    // padding: "10px",
                    border: "0px solid #ccc",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                    backgroundColor: COLORS.purple,
                    cursor: "pointer",
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
            <HomeMainButton />
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
      <div>
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
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
