import React from "react"
import "./main.css"
import "./ubytovani.css"
import { Link } from "gatsby"
import { ParallaxProvider } from "react-scroll-parallax"
import SEO from "../components/seo"
import Menu from "../components/menu"
import WelcomePage from "../components/mainheader"
import Image from "../components/image"

const HeadingText = ({ text }) => (
  <div
    style={{
      display: "flex",
      height: "30px",
      margin: "50px 0 40px 0",
    }}
  >
    <div
      style={{
        color: "#032B3B",
        fontSize: "2rem",
      }}
    >
      {text}
    </div>
    <div
      style={{
        background: "#032B3B",
        width: "100px",
        height: "2px",
        alignSelf: "flex-end",
        marginLeft: "5px",
      }}
    ></div>
  </div>
)

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

const IndexPage = ({ location }) => {
  return (
    <ParallaxProvider>
      <SEO />
      <WelcomePage height={70} page="ubytovani" />
      <div className="accommodation-wrapper" style={{ background: "#FFF" }}>
        <div className="accommodation-section">
          <HeadingText text="Krumlovský dům v zahradě" />
          <div>
            <p>
              Krumlovský dům v zahradě z 15. st je zapsanou kulturní památkou.
              Tedy z něj dýchá historie a nejen to, zároveň je posazen do
              terasovité zahrady plné vzrostlých stromů a květin, a proto
              poskytuje odpočinek a relaxaci po dni plném rušných zážitků.
            </p>
            <p>
              Dům je pro Vaše pohodlí nově zrekonstruován, ale některé doplňky
              (naše historické poklady) ve Vás mohou navodit atmosféru doby
              dávno minulé.
            </p>
            <p>Jednou větou „Dům plný historie, květin a pokladů.“</p>
            <Image
              src="galery/3.jpg"
              style={{ height: "300px", margin: "50px auto" }}
            />
            <p>
              Dům má 2 podlaží. V přízemí z čela domu je vstup do
              zrekonstruovaného sklepení s úžasnou atmosférou. Kde u velkého
              kamenného krbu můžete posedět, pojíst, popít a hlavně pobavit se.
            </p>
            <p>
              V 1. patře z terasy je vstup do obytné místnosti s velkou luxusně
              vybavenou kuchyní, jídelním stolem pro 6 osob a sedacím koutem.
              Dále Zelená ložnice s manželkou postelí a velká koupelna se
              sprchovým koutem a odděleným WC.
            </p>
            {/* <div className="image-row">
              <Image
                src="galery/9.jpg"
                style={{ width: "80%", maxWidth: "200px", margin: "15px" }}
              />
              <Image
                src="galery/12.jpg"
                style={{ width: "80%", maxWidth: "150px", margin: "15px" }}
              />
              <Image
                src="galery/14.jpg"
                style={{ width: "80%", maxWidth: "250px", margin: "15px" }}
              />
            </div> */}
            <p>
              V 2. patře v podkroví je odpočinková místnost, kde jsou 2 válendy,
              které se dají připravit jako přistýlky pro děti, vstup do WC
              místnosti a vstup do Bílé ložnice s manželskou postelí a pohovkou,
              která se dá opět připravit jako přistýlka. V tomto patře můžete
              vyjít dveřmi na další kamennou terasu a projít do zahrady.
            </p>
          </div>

          <Button text="Virtuální prohlídka" to='http://tomasadamec.com/download/2019-krumlovsky-dum/tour.html' />
          <HeadingText text="Krumlovská chata v zahradě" />
          <div>
            <p>
              Chata schovaná ve vzrostlé rozlehlé zahradě nabízí jednodušší a
              levnější ubytování, než v našem historickém době, ale neméně
              romantické.
            </p>

            <p>
              Apartmán v přízemí: Z předsíňky je vstup do koupelny se sprchovým
              koutem a WC. A vstup do místnosti s manželskou postelí. V pokoji
              je vybavená minikuchyňka s rychlovarnou konvicí a vybavením na
              přípravu kávy a čaje. Talíře, hrnky, skleničky, příbory a
              minilednice. Vhodné pro 2 osoby. Apartmán má svou venkovní krytou
              terasu s posezením.
            </p>
            <p>
              Apartmán v patře: Z předsíňky je vstup do obytné místnosti
              s manželskou postelí a 2 válendami, které se dají upravit jako
              přistýlka pro děti. V pokoji je vybavená minikuchyňka
              s rychlovarnou konvicí a vybavením na přípravu kávy a čaje.
              Talíře, hrnky, skleničky, příbory a minilednice. Z obytné
              místnosti je vstup do koupelny se sprchovým koutem a WC. Vhodné
              pro 2 dospělé a 2 děti. Apartmán má svou krytou terasu s posezením
              jejíž součástí je i venkovní krb v naprostém soukromí díky
              vzrostlé zeleni.
            </p>
          </div>
          <HeadingText text="Krumlovská chata v zahradě" />
          <div>
            <p>
              Zde opravdu zapomenete na to, že jste ve městě. Dřevěná romantická
              chaloupka je schovaná v lesíku a kolem se pasou ovečky.{" "}
            </p>
            <Image
              src="galery/7.jpg"
              style={{ height: "300px", margin: "50px auto" }}
            />
            <p>
              Chaloupka je jednoduše účelně zařízena . Vstoupíte do obytné
              místnosti, kde jsou 2 dřevěné postele a malinká kuchyňka se
              stolkem. Dále místnost s chemickým WC a sprchou s lázeňskými
              kamnami. Vytápění malými kamínkami na dřevo. Není to sice luxus,
              ale dle našeho názoru je to romantika největší.
            </p>
          </div>
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
            michaela.vano@seznam.cz
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
