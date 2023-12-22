import React from "react"
import * as styles from "../components/index.module.css"
import Layout from "../components/layout"
import TopNavBar from "../components/TopNavBar"

export default function Investors() {
  return (
    <Layout>
      <div className={styles.textCenter}>
        <TopNavBar />
        <div style={{ background: "red" }}>
          <div>Hello</div>
        </div>
      </div>
    </Layout>
  )
}
