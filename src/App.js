import React, { Component } from "react";
import Loadable from "react-loadable";

import Loading from "./Loading";

import Map from "./Map";

import "./App.css";

import butik from "./img/butik-min.jpg";
import butikWebp from "./img/butik-min@1x.webp";
import logga from "./img/logga-min.png";
import loggaWebp from "./img/logga-min@1x.webp";

class App extends Component {
  render() {
    return (
      <div className="flex-column-container">
        <div className="flex-item">
          <picture>
            <source srcSet={loggaWebp} />
            <img className="logga" src={logga} alt="Landins logga" />
          </picture>
        </div>

        <div className="flex-row-container box-background">
          <div className="flex-item">
            <h1>Besök oss här!</h1>
            <div
              style={{
                dispaly: "block",
                width: "400px",
                height: "400px",
                background: "grey",
                textShadow: "none"
              }}
            >
              <Map />
            </div>
          </div>
          <div className="flex-item">
            <h1>Kontakta oss!</h1>

            {["046-58318", "046-58934", "0734-43 60 73"].map(number => (
              <div key={number} className="CallUsLink">
                <CallUsLink number={number} />
              </div>
            ))}

            <a href="mailto:Landinsblommor@telia.com" target="_top">
              <i className="fas fa-envelope" />
              Landinsblommor@telia.com
            </a>
            <p>
              Vi finns även på <FacebookLink /> och <InstagramLink /> där
              aktuella erbjudanden presenteras.
            </p>
            <picture>
              <source srcSet={butikWebp} />
              <img src={butik} alt="Outside view of the shop" />
            </picture>
          </div>
        </div>

        <div className="flex-item box-background margin-top">
          <p>
            Affie Landin driver vår butik som är välfylld och speglar vår
            grossists sortiment. Den är öppen <OpenHoursAffie /> Den består av
            en förbutik, en växthusavdelning och ett stort snittrum där du själv
            kan välja bland varorna i lugn och ro.
          </p>
          <p>
            Vill du ha råd hjälper vi dig gärna. Vi har alltid många färdiga
            buketter och arrangemang att välja bland. Våra florister klarar all
            slags binderi, brud och sorgbinderi bör förbeställas. Vi har egen
            budkörning och förmedlar även till andra butiker världen över.
          </p>
          <p>
            Bengt Landin driver vår grossistverksamhet. Den består av en snitt
            och en krukväxtavdelning. Har öppet <OpenHoursBength />. Behöver ni
            varor andra tider.
          </p>
          <p>
            Kontakta Bengt på mobil <CallUsLink number="0734-43 60 73" />
          </p>
          <h3>Välkomna</h3>
        </div>
      </div>
    );
  }
}

const CallUsLink = ({ number }) => (
  <a href={`tel:${number}`}>
    <i className="fas fa-phone" /> {number}
  </a>
);

const FacebookLink = () => (
  <a href="https://www.facebook.com/LandinsBlommor/?fref=ts">
    <i className="fab fa-facebook" /> Faceboook
  </a>
);

const InstagramLink = () => (
  <a href="https://www.facebook.com/LandinsBlommor/?fref=ts">
    <i className="fab fa-instagram" /> Instagram
  </a>
);

const OpenHoursAffie = () => (
  <span className="lightcoral" id="openhoursAffie">
    vardagar 10.00-18.00. Lördagar 11.00-14.00
  </span>
);

const OpenHoursBength = () => (
  <span className="lightcoral" id="openhoursBength">
    vardagar 8.00-18.00
  </span>
);

export default App;
