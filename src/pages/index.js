import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import "./main.css"
import "./home.css"
import scrollTo from "gatsby-plugin-smoothscroll"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import Helmet from "react-helmet"
import Image from "../components/image"
import SEO from "../components/seo"
import Menu from "../components/menu"
import WelcomePage from "../components/mainheader"

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

const HeadingText = ({ text }) => (
  <div
    style={{
      display: "flex",
      height: "30px",
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

const PriceCalculator = () => {
  const locations = [
    {
      name: "Krumlovský dům v zahradě",
      correntText: "krumlovském domě v zahradě",
      peoples: [2, 6],
      nights: [1, 7],
    },
    {
      name: "Krumlovská chata v zahradě (přízemí)",
      correntText: "krumlovské chatě v zahradě (přízemí)",
      nights: [1, 7],
    },
    {
      name: "Krumlovská chata v zahradě (patro)",
      correntText: "krumlovské chatě v zahradě (patro)",
      nights: [1, 7],
    },
    {
      name: "Pastevní chaloupka",
      correntText: "pastevní chaloupce",
      nights: [1, 7],
    },
  ]

  const [location, setLocation] = useState(0)
  const [peopleCount, setPeopleCount] = useState(1)
  const [nightsCount, setNightsCount] = useState(1)
  const [cena, setCena] = useState(null)

  useEffect(() => {
    if (location != null && peopleCount && nightsCount) {
      switch (location) {
        case 0:
          {
            let osobNaDen = {
              2: 3500,
              3: 4000,
              4: 4500,
              5: 5000,
              6: 5500,
            }
            let slevaPodleDni = {
              2: 10,
              3: 15,
              4: 20,
              5: 25,
              6: 30,
              7: 35,
            }

            setCena(
              osobNaDen[peopleCount] *
                nightsCount *
                (slevaPodleDni.hasOwnProperty(nightsCount)
                  ? 1 - slevaPodleDni[nightsCount] / 100
                  : 1)
            )
          }
          break
        case 1:
        case 3:
          {
            let zaNoc = 2000
            let slevaPodleDni = {
              2: 10,
              3: 15,
              4: 20,
              5: 25,
              6: 30,
              7: 35,
            }

            setCena(
              zaNoc *
                nightsCount *
                (slevaPodleDni.hasOwnProperty(nightsCount)
                  ? 1 - slevaPodleDni[nightsCount] / 100
                  : 1)
            )
          }
          break
        case 2:
          {
            let zaNoc = 3000
            let slevaPodleDni = {
              2: 10,
              3: 15,
              4: 20,
              5: 25,
              6: 30,
              7: 35,
            }

            setCena(
              zaNoc *
                nightsCount *
                (slevaPodleDni.hasOwnProperty(nightsCount)
                  ? 1 - slevaPodleDni[nightsCount] / 100
                  : 1)
            )
          }
          break
        default: {
        }
      }
    }
  }, [location, peopleCount, nightsCount])

  let peoples = (locations[location] && locations[location].peoples) || null
  let nights = (locations[location] && locations[location].nights) || null

  useEffect(() => {
    setPeopleCount(peoples ? peoples[0] : 1)
    setNightsCount(nights ? nights[0] : 1)
  }, [location])

  const selectLocation = idx => {
    setLocation(idx)
  }

  return (
    <>
      <div className="price-calc-list" style={{ marginTop: "50px" }}>
        {locations.map((l, idx) => (
          <div
            role="button"
            onClick={() => selectLocation(idx)}
            key={idx}
            className={`price-calc-item ${
              idx === location ? "price-calc-item--active" : ""
            }`}
          >
            {l.name}
          </div>
        ))}
      </div>
      {location !== null ? (
        <div className="price-calc-list">
          {peoples ? (
            <div>
              <label htmlFor="peopleCount">Počet osob:</label>{" "}
              <input
                name="peopleCount"
                value={peopleCount}
                onChange={(e, t = e.target.value) =>
                  t > 0 && t >= peoples[0] && t <= peoples[1]
                    ? setPeopleCount(t)
                    : null
                }
                className="price-calc-item"
                type="number"
              />
            </div>
          ) : null}
          <div>
            <label htmlFor="nightsCount">Počet nocí:</label>{" "}
            <input
              name="nightsCount"
              value={nightsCount}
              onChange={(e, t = e.target.value) =>
                t > 0 && t >= nights[0] && t <= nights[1]
                  ? setNightsCount(t)
                  : null
              }
              className="price-calc-item"
              type="number"
            />
          </div>
        </div>
      ) : null}
      <span style={{ textAlign: "center", margin: "50px 0" }}>
        Za {nightsCount} denní ubytování pro {peopleCount}{" "}
        {peopleCount > 1 ? (peopleCount >= 5 ? "osob" : "osoby") : "osobu"} v{" "}
        {locations[location].correntText} zaplatíte
        <div
          className="price-calc-item price-calc-item--result"
          style={{ display: "inline-block" }}
        >
          {parseInt(cena) || " - "} Kč
        </div>
      </span>
    </>
  )
}

const IndexPage = ({ location }) => {
  const [targetParam, setTargetParam] = useState(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const qParam = new URLSearchParams(window.location.search).get("t")
      const tp =
        qParam && ["home", "contact", "okoli"].includes(qParam) ? qParam : null
      if (targetParam !== tp) {
        setTargetParam(tp)
      }
    }

    if (typeof window !== "undefined" && typeof Macy !== "undefined") {
      Macy({
        container: ".trips-section-list",
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
  }, [])

  useEffect(() => {
    if (targetParam != null) {
      scrollTo(`#${targetParam}`)
    }
  }, [targetParam])

  return (
    <ParallaxProvider>
      <SEO />
      <Helmet>
        <script src="https://cdn.jsdelivr.net/npm/macy@2"></script>
      </Helmet>
      <WelcomePage />
      <div className="about-section">
        <div className="about-section-item">
          <HeadingText text="Úvod" />
          <div className="about-section-desc">
            <p>
              Buď si necháte zaparkované auto na našem uzavřeném parkovišti a
              10minutovou procházkou se ocitnete v historickém centru Krumlova,
              kde si můžete plnými doušky vychutnávat jeho nezapomenutelnou
              atmosféru. Nebo můžete vyjíždět za poznáním či zážitky do okolí.{" "}
            </p>
            <p>
              A, že je toho v okolí opravdu dost, zjistíte když se podíváte na
              naše tipy na výlety. Po dni plném zážitků musí přijít zklidnění a
              kde lépe než v zahradě plné vzrostlých stromů a květin. Kde
              cítíte, slyšíte, vidíte a dotýkáte se přírody.{" "}
            </p>
            <b>Více…</b>
          </div>
        </div>
        <div className="about-section-item about-section-images">
          <div className="about-section-images__image">
            <Image
              src="galery/17.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <Parallax y={["-20%", "20%"]}>
            <div className="about-section-images__image--center">
              <Image
                src="galery/11.jpg"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </Parallax>
          <div className="about-section-images__image">
            <Image
              src="galery/9.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="trevlix-reservation-wrapper">
        <div className="trevlix-reservation-section">
          <HeadingText text="Rezervace" />
          <iframe
            className="trevlix-reservation-app"
            src="https://book.trevlix.com/book/app/?cid=5353820"
            width="100%"
            title="trevlix-reservation"
            height="500px"
            frameborder="0"
            scrolling="auto"
          ></iframe>
        </div>
      </div>
      <div className="accommodation-wrapper">
        <div className="accommodation-section">
          <HeadingText text="Ubytování" />
          <div className="accommodation-section-list">
            <div
              className="accommodation-section-list-item"
              style={{ marginLeft: "-15%", maxWidth: "80%" }}
            >
              v Krumlovském historickém domě s 6 lůžky se samostatným vstupem
            </div>
            <div
              className="accommodation-section-list-item"
              style={{ marginLeft: "35%", maxWidth: "90%" }}
            >
              v Chatě v přízemí se 2 lůžky a samostatným vstupem
            </div>
            <div
              className="accommodation-section-list-item"
              style={{ marginLeft: "-35%", maxWidth: "70%" }}
            >
              v Chatě v patře se 4 lůžky a samostatným vstupem
            </div>
            <div
              className="accommodation-section-list-item"
              style={{ marginLeft: "10%", maxWidth: "90%" }}
            >
              v Pastevní chaloupce se lůžky a samostatným vstupem kolem které se
              pasou Naše miniovečky
            </div>
            <Button text="Informace o ubytování" to="/ubytovani" />
          </div>
        </div>
      </div>
      <div className="galery-section">
        <div className="galery-list">
          <div className="galery-section-img">
            <Parallax
              y={["-50px", "50px"]}
              styleOuter={{ transform: "scale(2.2)" }}
            >
              <Image src="galery/8.jpg" />
            </Parallax>
          </div>
          <div className="galery-section-img">
            {/* <Parallax
              y={["-25px", "25px"]}
              styleOuter={{ transform: "scale(2)" }}
            > */}
            <Image src="galery/5.jpg" />
            {/* </Parallax> */}
          </div>
          <div className="galery-section-img">
            {/* <Parallax
              y={["-25px", "25px"]}
              styleOuter={{ transform: "scale(2)" }}
            > */}
            <Image src="galery/1.jpg" />
            {/* </Parallax> */}
          </div>
          <div className="galery-section-img">
            <Parallax
              y={["-100px", "100px"]}
              styleOuter={{ transform: "scale(1.3)" }}
            >
              <Image src="galery/17.jpg" />
            </Parallax>
          </div>
          <div className="galery-section-img">
            {/* <Parallax
              y={["-50px", "50px"]}
              styleOuter={{ transform: "scale(1.2)" }}
            > */}
            <Image src="galery/13.jpg" />
            {/* </Parallax> */}
          </div>
          <div className="galery-section-img">
            {/* <Parallax
              y={["-50px", "50px"]}
              styleOuter={{ transform: "scale(1.5)" }}
            > */}
            <Image src="galery/21.jpg" />
            {/* </Parallax> */}
          </div>
          <div className="galery-section-img">
            {/* <Parallax
              y={["-50px", "50px"]}
              styleOuter={{ transform: "scale(1.5)" }}
            > */}
            <Image src="galery/9.jpg" />
            {/* </Parallax> */}
          </div>
        </div>

        <Button text="Vstoupit do galerie" to="/galerie" />
      </div>
      <div className="price-calc">
        <div className="price-calc-inner">
          <HeadingText text="Kalkulace ceny" />
          <PriceCalculator />
        </div>
      </div>
      <div id="okoli" className="trips-section">
        <div className="trips-section--inner">
          <HeadingText text="Výlety po okolí" />
          <div className="trips-section-list" style={{ marginTop: "50px" }}>
            <div className="trips-section-item">
              <div className="trips-section-item__image">
                <Image src="krumlov.png" />
              </div>
              <div className="trips-section-item__title">Český Krumlov</div>
              <div className="trips-section-item__desc">
                <p>
                Český Krumlov vás oslní jako barokní ohňostroj: renesanční a barokní domy na Latránu střídají malebná náměstí a uličky jak z pohádek. K nejznámějším památkám jižních Čech a také nejrozsáhlejším hradním areálům u nás i v Evropě patří hrad a zámek Český Krumlov s unikátním barokním divadlem.
                </p>
                <p>
                Je to město zážitků i odpočinku: navštivte Kláštery Český Krumlov, Egon Schiele Art Centrum a další muzea a galerie, četné obchůdky s uměleckými předměty, hudební a divadelní festivaly, otáčivé hlediště v zámecké zahradě anebo Museum Fotoatelier Seidel, původní fotoateliér z roku 1905 s nostalgickou atmosférou starých časů. K posezení lákají spousty kaváren a hospůdek, a k tomu všemu samozřejmě šumí řeka Vltava se zvolna plujícími vory, což je další z klasických krumlovských radovánek.
                </p>
              </div>
            </div>
            <div className="trips-section-item">
              <div className="trips-section-item__image">
                <Image src="rozmberk.png" />
              </div>
              <div className="trips-section-item__title">Rožmberk</div>
              <div className="trips-section-item__desc">
                <p>
                Město spojené s významným šlechtickým rodem Rožmberků, kteří svými aktivitami přinesli prosperitu širokému okolí, leží v podhůří Šumavy mezi Českým Krumlovem a Lipnem. Dobře ho znají vodáci splouvající Vltavu a kvůli impozantnímu hradu i milovníci historických památek.
                </p>
              </div>
            </div>
            <div className="trips-section-item">
              <div className="trips-section-item__image">
                <Image src="zlatakoruna.png" />
              </div>
              <div className="trips-section-item__title">Zlatá Koruna</div>
              <div className="trips-section-item__desc">
                <p>
                Několik kilometrů od Českého Krumlova stojí na ostrohu, obtékaném ze tří stran řekou Vltavou, půvabný cisterciácký klášter, jeden z nejcennějších komplexů gotické architektury ve střední Evropě. Místo vyzařuje zvláštní poklidnou atmosféru, tolik odlišnou od hektického tempa dnešního světa.
                </p>
              </div>
            </div>
            <div className="trips-section-item">
              <div className="trips-section-item__image">
                <Image src="vyssibrod.png" />
              </div>
              <div className="trips-section-item__title">Vyšší Brod</div>
              <div className="trips-section-item__desc">
                <p>
                Vyšší Brod Pod vodní nádrží Lipno Vltava protéká hlubokým zalesněným údolím, mine Čertovu stěnu a vzápětí se nad řekou objeví bílé zdi masivních budov, korunované půvabnou vysokou štíhlou věží. To vás v celé své kráse vítá cisterciácký klášter ve Vyšším Brodě s gotickým chrámem Nanebevzetí Panny Marie.
                </p>
              </div>
            </div>
            <div className="trips-section-item">
              <div className="trips-section-item__image">
                <Image src="lipno.png" />
              </div>
              <div className="trips-section-item__title">Lipno</div>
              <div className="trips-section-item__desc">
                <p>
                Původní dřevařská obec se od poloviny 20. století, kdy byla dokončena vodní nádrž Lipno, proměňuje v rekreační středisko. Kromě řady penzionů, hotelů a kempů tu objevíte například aquapark, bobovou dráhu a bikepark, v zimě pak lyžařský areál a bruslařskou dráhu. Novinkou je stezka v korunách stromů.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="contact-section">
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
