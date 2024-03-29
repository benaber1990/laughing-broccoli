import React, { useState, useEffect, useLayoutEffect } from "react"
import Layout from "../components/layout"
import * as styles from "../components/index.module.css"
import COLORS from "../../misc/COLORS"
import TopNavBar from "../components/TopNavBar"
import Checkbox from "../components/Checkbox"
import MobileMenu from "../components/MobileMenu"
import MobileTopBar from "../components/MobileTopBar"
import ReCAPTCHA from "react-google-recaptcha"
import { firestore, auth } from "../../firebase.config"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { useMediaQuery } from "react-responsive"

export default function ComingSoon() {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 })
  const [isTermsChecked, setTermsChecked] = useState(false)
  const [mobMenu, setMobMenu] = useState(false)
  const [recaptchaValue, setRecaptchaValue] = useState("")
  const [recaptchaVisible, setRecaptchaVisible] = useState(false)
  const [thankYou, setThankYou] = useState(false)

  const handleTermsCheckboxChange = isChecked => {
    setTermsChecked(isChecked)
  }

  //  Check Small Device Screen Size

  const mobMenuHandler = () => setMobMenu(p => !p)

  // Email Form
  const [email, setEmail] = useState("")

  // Handle Submit
  const messagesRef = firestore.collection("marketingemails")

  const handleSubmit = async e => {
    e.preventDefault()

    if (!recaptchaValue) {
      alert("Please check terms and complete reCAPTCHA before submitting.")
      return
    }

    try {
      await messagesRef.doc().set({
        email,
        recaptcha: recaptchaValue,
        hello: "Hello",
      })

      alert("Email successfully submitted!")
      setEmail("")
      setRecaptchaValue("")
      setRecaptchaVisible(false)
      setThankYou(true)
    } catch (error) {
      console.error("Error adding email and reCAPTCHA to Firestore: ", error)
      alert("Error submitting email. Please try again.")
    }
  }

  // Handle Email Focus
  const handleEmailFocus = () => {
    // Show the reCAPTCHA when the user starts typing their email
    setRecaptchaVisible(true)
  }

  return (
    <Layout>
      <div
        className={styles.textCenter}
        style={{
          background: `radial-gradient(circle at 50% 0%, #000 70%, ${COLORS.purple})`,
          paddingBottom: 420,
        }}
      >
        <div className={styles.hiddenonsmall}>
          <TopNavBar />
        </div>

        {isSmallScreen ? <MobileTopBar onClick={mobMenuHandler} /> : null}
        <div className={styles.herocontainer} />

        {mobMenu ? <MobileMenu onClick={mobMenuHandler} /> : null}
        <div
          style={{
            paddingTop: 60,
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: "700",
              color: "white",
              lineHeight: 1.3,
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                background: `linear-gradient(to right, ${"silver"}, ${
                  COLORS.purple
                })`,
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: isSmallScreen ? "1.2" : "1.3",
                display: "inline-block",
                fontSize: isSmallScreen ? 54 : 64,
                paddingLeft: isSmallScreen ? 10 : null,
                paddingRight: isSmallScreen ? 10 : null,
                fontWeight: "700",
              }}
            >
              AI-Powered Tech for Construction
            </span>
            {isSmallScreen ? null : <br />}
            <div
              className={styles.pulse}
              style={{
                fontWeight: "300",
                fontSize: isSmallScreen ? 54 : 64,
                paddingLeft: isSmallScreen ? 10 : null,
                paddingRight: isSmallScreen ? 10 : null,
              }}
            >
              <span style={{}}>This is </span>
              <span style={{ fontWeight: "900", color: COLORS.green }}>
                UNIS
              </span>
            </div>
            <div
              style={{
                fontSize: 32,
                marginTop: isSmallScreen ? 50 : 100,
                fontWeight: "300",
                color: "white",
                fontWeight: "400",
                paddingLeft: isSmallScreen ? 20 : null,
                paddingRight: isSmallScreen ? 20 : null,
              }}
            >
              <span style={{ color: COLORS.green, fontWeight: "700" }}>
                UNIS{" "}
              </span>
              is building the tools that will power the
              <br />
              <span style={{ fontWeight: "700" }}>
                {" "}
                next generation of tech in construction
              </span>
            </div>
          </div>
        </div>

        {/* Sign Up Email */}
        <div style={{ height: 80 }} />
        <div
          style={{
            color: "white",
            fontSize: 20,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          To find out more, and be the first to get{" "}
          <span style={{ color: COLORS.green, fontWeight: "700" }}>UNIS</span>,
          enter your email
        </div>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.emailinput}
            value={email}
            onChange={e => setEmail(e.target.value)}
            onFocus={handleEmailFocus}
          />
          <button type="submit" className={styles.emailsubmit}>
            Submit
          </button>
        </form>
        <div style={{ marginTop: 10 }}>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {recaptchaVisible ? (
              <div>
                <ReCAPTCHA
                  sitekey="6Ld2K0spAAAAAG95-xc_a1UjkHa5ute-Qshcq-Oa" // Replace with your actual reCAPTCHA site key
                  onChange={value => setRecaptchaValue(value)}
                />
                <Checkbox onCheck={handleTermsCheckboxChange} />
              </div>
            ) : null}
            {thankYou ? (
              <div style={{ color: COLORS.green }}>
                Thank you - please look out for your email!
              </div>
            ) : null}
          </div>
        </div>

        {/* Contact informatiomn */}
        <div
          style={{
            color: "white",
            marginTop: 40,
            fontSize: 24,
            fontWeight: "700",
          }}
        >
          {" "}
          <FontAwesomeIcon
            icon={faPhone}
            size="1x"
            color={COLORS.green}
            style={{ alignSelf: "flex-end", marginRight: 10 }}
          />
          0345 548 1911
        </div>
        <div
          style={{
            color: "white",
            marginTop: 20,
            fontSize: 24,
            fontWeight: "700",
          }}
        >
          {" "}
          <FontAwesomeIcon
            icon={faEnvelope}
            size="1x"
            color={COLORS.green}
            style={{ alignSelf: "flex-end", marginRight: 10 }}
          />
          enquiries@unis.one
        </div>
      </div>
    </Layout>
  )
}
