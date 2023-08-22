'use client'

import React from "react";
import { Button } from "react-bootstrap";
import Contacts from "../layout/Contacts";
import Exclusives from "../layout/Exclusives";
import FrontAbout from "../layout/FrontAbout";
import PopularMenu from "../layout/PopularMenu";
import Services from "../layout/Services";

function HomePage() {
  return (
    <>
      <div className="home-container">
        <div className="hero">
          <div className="hero-content">
            <h1>
              Rosted Coffee <br /> For you
            </h1>
            <p>
              The coffee is brewed by first roasting the green coffee <br />{" "}
              coals in a brazier. Given an oppotunity to sample.
            </p>
            <div className="hero-btn">
              <Button variant="dark" className="normal-btn">
                Testy Coffee
              </Button>
              <Button variant="dark" className="transparent-btn">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <FrontAbout />
      <PopularMenu />
      <Exclusives />
      <Services />
      <Contacts />
    </>
  );
}

export default HomePage;
