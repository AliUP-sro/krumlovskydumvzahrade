import React, { useEffect } from "react"
import "./kd-prohlidka.css"
import SEO from "../components/seo"
import Menu from "../components/menu"

export default ({ location }) => {
  return (
    <div>
      <SEO />
      <iframe
        title="preview"
        src="http://krumlovskydum.aliup.cz/kdtour/tour.html"
        frameBorder="0"
        className="preview"
      />
      <Menu currentLocation={location.pathname} />
    </div>
  )
}
