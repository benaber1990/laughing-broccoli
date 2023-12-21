import React from "react"
import COLORS from "../../misc/COLORS"

export default function HomeRowF() {
  const ItemBox = () => (
    <div
      style={{
        display: "flex",
        border: `2px solid ${COLORS.purple}`,
        marginBottom: 30,
        color: "white",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
      }}
    ></div>
  )

  return (
    <div style={{ width: "100%", marginTop: 120, marginBottom: 40 }}>
      <div style={{ display: "flex" }}>
        {/* Col A */}
        <div
          style={{
            paddingLeft: 100,
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 48,
              fontWeight: "700",
              textAlign: "left",
              lineHeight: 1.2,
            }}
          >
            Unlock the power of{" "}
            <span style={{ color: COLORS.green }}>UNIS</span> today & organise
            your company with one platform
          </div>
          <div
            style={{
              color: "white",
              fontSize: 22,
              textAlign: "left",
              marginTop: 10,
            }}
          >
            Talk to our team today to find out more
          </div>
          <div
            style={{
              backgroundColor: COLORS.purple,
              color: "white",
              paddingLeft: 15,
              paddingRight: 15,
              paddingTop: 8,
              paddingBottom: 8,
              borderRadius: 40,
              // width: 300,
              marginTop: 20,
              fontWeight: "700",
              display: "flex",
              alignSelf: "flex-start",
            }}
          >
            SEE HOW UNIS CAN HELP ME
          </div>
        </div>

        {/* Col B */}
        <div
          style={{
            width: "50%",
            marginLeft: 120,
            marginRight: 160,
          }}
        >
          <div style={{ marginRight: 60 }}>
            <img
              src="https://i.imgur.com/0ZDTjQd.jpg"
              style={{ margin: 20, borderRadius: 30 }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
