import React, { useState, useEffect } from "react"
import * as styles from "../components/index.module.css"
import Layout from "../components/layout"
import TopNavBar from "../components/TopNavBar"
import COLORS from "../../misc/COLORS"
import Checkbox from "../components/Checkbox"
import MobileMenu from "../components/MobileMenu"
import MobileTopBar from "../components/MobileTopBar"
import { firestore, auth } from "../../firebase.config"
import ReCAPTCHA from "react-google-recaptcha"

export default function Investors() {
  const [isTermsChecked, setTermsChecked] = useState(false)
  const [mobMenu, setMobMenu] = useState(false)
  const [recaptchaValue, setRecaptchaValue] = useState("")
  const [recaptchaVisible, setRecaptchaVisible] = useState(false)
  const [thankYou, setThankYou] = useState(false)

  const handleTermsCheckboxChange = isChecked => {
    setTermsChecked(isChecked)
  }

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

  const mobMenuHandler = () => setMobMenu(p => !p)

  // Email Form
  const [email, setEmail] = useState("")

  // const handleSubmit = async e => {
  //   e.preventDefault()

  //   // Add the email to Firestore
  //   try {
  //     await db.collection("investoremails").doc().set({
  //       email,
  //     })
  //     console.log("Email added to Firestore!")
  //   } catch (error) {
  //     console.error("Error adding email to Firestore: ", error)
  //   }

  //   // Clear the input field
  //   setEmail("")
  // }

  // Handle Submit
  const messagesRef = firestore.collection("investorsemails")
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
                background: `linear-gradient(to right, ${"silver"}, ${"orange"})`,
                WebkitBackgroundClip: "text",
                color: "transparent",
                lineHeight: isSmallScreen ? "1.2" : "1.3",
                display: "inline-block",
                fontWeight: "700",
                fontSize: isSmallScreen ? 54 : 64,
                paddingLeft: isSmallScreen ? 10 : null,
                paddingRight: isSmallScreen ? 10 : null,
                fontWeight: "700",
              }}
            >
              The World is Moving Quickly
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
              <span style={{ fontWeight: "300" }}>and so is </span>
              <span style={{ fontWeight: "900", color: COLORS.green }}>
                UNIS
              </span>
            </div>
            <div
              style={{
                fontSize: 32,
                marginTop: 100,
                fontWeight: "300",
                paddingRight: 15,
                paddingLeft: 15,
              }}
            >
              <span
                style={{
                  color: COLORS.green,
                  fontWeight: "700",
                }}
              >
                UNIS
              </span>{" "}
              is building the tools that will power the
              <br />
              <span style={{ fontWeight: "700" }}>
                {" "}
                next generation of tech in construction
              </span>
            </div>
            <div
              style={{
                fontSize: 26,
                fontWeight: "400",
                marginTop: 80,
                paddingLeft: 15,
                paddingRight: 15,
              }}
            >
              Request a{" "}
              <span style={{ color: "orange", fontWeight: "700" }}>
                UNIS Investor Pack
              </span>{" "}
              to join our journey
            </div>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {" "}
              <div>
                <form
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 15,
                  }}
                  onSubmit={handleSubmit}
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={styles.emailinput}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onFocus={handleEmailFocus}
                  />
                  <button
                    type="submit"
                    className={styles.emailsubmit}
                    style={{ backgroundColor: "orange", color: "black" }}
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div style={{ marginTop: 10, fontSize: 14, fontWeight: "400" }}>
                {recaptchaVisible ? (
                  <div>
                    <ReCAPTCHA
                      sitekey="6Lfl_EkpAAAAAEsRUaN1Ho5vTjypUgcrORPXiJGs" // Replace with your actual reCAPTCHA site key
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
          </div>
        </div>
      </div>
    </Layout>
  )
}
