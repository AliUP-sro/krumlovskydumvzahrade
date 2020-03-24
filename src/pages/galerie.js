import React, { useEffect } from "react"
import "./main.css"
import "./home.css"
import { ParallaxProvider } from "react-scroll-parallax"
import SEO from "../components/seo"
import Menu from "../components/menu"
import WelcomePage from "../components/mainheader"

import { useStaticQuery, graphql } from "gatsby"
import Image from "../components/image"
import Helmet from "react-helmet"

const IndexPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          internal: { mediaType: { regex: "images/" } }
          relativeDirectory: { eq: "galery" }
        }
      ) {
        edges {
          node {
            relativePath
            publicURL
          }
        }
      }
    }
  `)

  useEffect(() => {
    if (typeof window !== "undefined" && typeof $ !== "undefined") {
      $(".galery-list").lightGallery({
        getCaptionFromTitleOrAlt: false,
        download: false,
      })
    }
    if (typeof window !== "undefined" && typeof Macy !== "undefined") {
      Macy({
        container: ".galery-list",
        columns: 1,
        margin: 20,
        mobileFirst: true,
        breakAt: {
          620: {
            columns: 2,
          },
          900: {
            columns: 3,
          },
        },
      })
    }
  })

  return (
    <ParallaxProvider>
      <SEO />
      <WelcomePage height={70} />

      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.0/css/lightgallery.min.css"
        />
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/macy@2"
        ></script>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-3.4.1.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/lightgallery@1.6.12/dist/js/lightgallery.min.js"
        ></script>
      </Helmet>
      <div className="galery-section">
        <div className="galery-list">
          {data.allFile.edges.map(({ node }, idx) => (
            <a
              target="_blank"
              href={node.publicURL}
              key={idx}
              rel="noopener noreferrer"
              className="galery-section-img"
            >
              <Image src={node.relativePath} />
            </a>
          ))}
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-section-inner">
          <div className="contact-section-title">Kontakt na provozovatele</div>
          <div className="contact-section-list">
            <div className="contact-section-listitem contact-section-listitem--first">
              ARCHEVA s.r.o. <br />
              Polžov 2, 37401 Mokrý Lom
            </div>
            <div className="contact-section-listitem">
              Michaela Váňová, tel. 777826700 <br />
              Pavel Váňa, tel. 608826700
            </div>
            <div className="contact-section-listitem contact-section-listitem--third">
              info@krumlovskydum.cz
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        krumlovskydum.cz - 2019 &nbsp; | &nbsp; AliUP s.r.o.
      </div>

      <Menu currentLocation={location.pathname} />
    </ParallaxProvider>
  )
}

export default IndexPage
