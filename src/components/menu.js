import React, { useState } from "react"
import { Link } from "gatsby"
import Image from "./image"
import scrollTo from "gatsby-plugin-smoothscroll"

export default ({ currentLocation }) => {
  const [toggled, toggle] = useState(false)

  return (
    <div className={`page-menu ${toggled ? "opened" : ""}`}>
      <div className="page-menu-backwall"></div>
      <div
        role="button"
        onClick={() => toggle(!toggled)}
        className="page-menu-button"
      >
        <Image src={toggled ? "menu-cross.png" : "menu-burger.png"} />
      </div>
      <div className="page-menu-content">
        {currentLocation === "/" ? (
          <div
            onClick={() => {
              scrollTo("#home")
              toggle(!toggled)
            }}
            className="page-menu-content-item"
          >
            Home
          </div>
        ) : (
          <Link to="/" className="page-menu-content-item">
            Home
          </Link>
        )}
        <Link to="/ubytovani" className="page-menu-content-item">
          Ubytování
        </Link>
        <Link to="/galerie" className="page-menu-content-item">
          Galerie
        </Link>
        {currentLocation === "/" ? (
          <div
            onClick={() => {
              scrollTo("#okoli")
              toggle(!toggled)
            }}
            className="page-menu-content-item"
          >
            Výlety po okolí
          </div>
        ) : (
          <a href="/?t=okoli" className="page-menu-content-item">
            Výlety po okolí
          </a>
        )}
        {currentLocation === "/" ? (
          <div
            onClick={() => {
              scrollTo("#contact")
              toggle(!toggled)
            }}
            className="page-menu-content-item"
          >
            Kontakt
          </div>
        ) : (
          <a href="/?t=contact" className="page-menu-content-item">
            Kontakt
          </a>
        )}

        <div className="page-menu-content-item page-menu-social">
          <a
            href="https://www.facebook.com/pages/category/Hotel---Lodging/krumlovsky_dum_v_zahrade-110560430295414/"
            target="_blank"
            className="page-menu-social-item"
            rel="nofollow noopener noreferrer"
            role="button"
          >
            <img
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABWElEQVRoQ+2X7VECQQyGHzqwA7QDOwArsATtQO0AKwA7oAQ6ADvQCtQOKMF5Z07HgV0g+3HuafIH5gh3eT+SzY0YeIwGXj8O4LcVdAX+gwKXwA0wBfT9Z2yBF+Ch+zTzUdNCZ8AcuD2hqitgc0LeXkotACp+HWA8VmNzABbAnYHRpgCcA2+G4pXaFID7zvsWDE0BWAHXkeqfgVlqw4buWaOJNU0mEQAXwLtFmmO5fQJ4NUylY3V//94nANlHh1nRcAABOmM94AqUnkJazLTr7Iaua5XYja/FLVSHzoGkyOkBNaT2nRKRXEfyH7uJUgJA1nhtAUBWc7cA4AnQ/pQULQB47Paj3gFobQ69benaOFDNB7AMXNfyp9fKpMhRIPZAP8gsUrgCvgtZ/BLIdQu5hdxCmQy4hTIJ9CnkFnILZTLwFy1UnpIDd6wxhRyAhQFXwMJWjdzBK/AJH/tNMQjWTkQAAAAASUVORK5CYII="
            />
          </a>
          <a
            href="https://www.instagram.com/krumlovsky_dum_v_zahrade/"
            target="_blank"
            className="page-menu-social-item"
            rel="nofollow noopener noreferrer"
            role="button"
          >
            <img
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADPklEQVRoQ+2ZPbJNQRSF1xsBRoARIFeFRKkSIJVgBLxAJEAikGAACoGcSIhA7GcCvBFgBNRX1V21tf7Z3ff05VTdrrp133mnf/baa+29u/vuaeVtb+X2awfgXzO4Y2CNDByTdEbSZUmHJfHMZ6R9k8Tnh6RXkt6HZ/dcPRLCyLuSrrtnH+sIkH0vEC8AjH4UPD5mVt8oGAHE89YwDwCMf5ZMdBAoh/5PrUUa709K4nNW0tGk740WiBYAZPPReP5n0P67DY0uDcdZjyUdCh1g4lRNTi0AUHgtTIbxAGLSmQ02cFAEwd/nSgvWAGDsVzOQSWZ4Hq1fDEzfDuvdCjEXlz9eYqEGwE7yOeh0ac9flfTSTIp8AESD6cgC/+PdX60GgHR2KYx4IglAPY0acSIMwAE56T2UFL1O1w+STocxdv3XIfa6ACAXChbtSsg6LQAYTa2gyKXFjYxFTOGMCOaCpDdm0juSHoTne2EuHilwZKkuAOg/GuHRv7dWpDke/Z+X9EXSU2OhlTDgiYMuAL9M7xYAm61aLMX39yXh5VLD42/Ny6zcazHgBZArdMgEULHIkRrpdzOxtlaoFgVAMclVXDSP1PimUStYuFSd0xyPnJBGLsAXBVBiitRmvVoCah0PCKp7S0pbAUBwxf1LT6q1MVMK0OkAkM1340mP92P3lIUjGRlNB+BaoJJlWknCNb83C+X6uRb4nwEsKaFhB23CAM5dIog5HOXO1C6GvQBKlXg1abQEABnBgj1B0bdWyNge2MJXOiRthQFklNtKwMyLZCtBwUtvNLa2lVjlZs4GaAtAZMIeyEsZlP0SW+XWlYndTjMmyu6PeWtBPHqgYWGkkl6RkG0wGpCei4GNDzRLHCnZMtAIao/R1rt2/aETmaUQA9jrbLOxz4qyGTrUb+taJeeU9FqluFFsXWzZOGjeki1ED7KztaIoH9ZrAUhZAATeIcfPaNQKgtdmnGoGbAEoFSpSLEG2xOUuFRdHxW/rmKL2YycPgBKIGQx0Ge+RkJ0QbZLD42XXLABoHhm57mG9DFhjoZubt/gTU7w+HAUUrx0xGFl2/d4wAmDU0CnjdgCmuLVj0h0DHc6a0nX1DPwGi4zVMfu33UAAAAAASUVORK5CYII="
            />
          </a>
        </div>
      </div>
    </div>
  )
}
