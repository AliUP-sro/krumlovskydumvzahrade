import React from "react"
import Image from "../components/image"
import { Parallax } from "react-scroll-parallax"
import { Link } from "gatsby"

const Button = ({ text, to }) => {
  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "200px",
    height: "40px",
    background: "#6A94A3",
    borderRadius: "6px",
    color: "white",
    textDecoration: "none",
    marginTop: "40px",
  }
  return (
    <Link to={to} style={styles}>
      {text}
    </Link>
  )
}

export default ({ height, page }) => {
  height = height || 100

  const styles = {
    wrapper: {
      height: `${height}%`,
    },
    welcomeImage: {
      width: "100%",
      height: "100%",
    },
    positionAbsolute: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  }

  return (
    <div id="home" style={styles.wrapper}>
      <div style={styles.welcomeImage}>
        <Image src="welcome-img.jpg" style={{ height: "100%" }} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: `calc(100% - ${height}%)`,
            background: "rgba(0, 0, 0, 0.65)",
          }}
        ></div>
        <Parallax
          styleInner={{
            height: "100%",
          }}
          styleOuter={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: `calc(100% - ${height}%)`,
            overflowY: "hidden",
          }}
          y={["-30%", "30%"]}
        >
          <div style={styles.positionAbsolute}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Sans-serif",
                height: "100%",
                marginTop: "0px",
              }}
            >
              <span
                style={{
                  maxWidth: "90%",
                  textAlign: "center",
                  color: "white",
                  fontSize: "3rem",
                  marginBottom: "25px",
                }}
              >
                Krumlovský dům v zahradě
              </span>
              <span
                style={{
                  maxWidth: "90%",
                  textAlign: "center",
                  color: "white",
                  opacity: 0.8,
                  fontSize: "1.2rem",
                  textAlign: "center",
                }}
              >
                Ubytování v Krumlovské zahradě se může stát skvělým <br />
                výchozím bodem pro Vaše zážitky.
              </span>
              {page && page === "ubytovani" ? null : (
                <Button text="Ubytování" to="/ubytovani" />
              )}
            </div>
          </div>
        </Parallax>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 5%",
            position: "absolute",
            top: 20,
            width: "80%",
            left: "50%",
            marginLeft: "-40%",
            height: "80px",
            color: "white",
          }}
        >
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}
