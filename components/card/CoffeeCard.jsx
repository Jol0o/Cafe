import Image from "next/image";
import React from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';


function CoffeeCard() {
  Aos.init();
  return (
    <>
      <div data-aos="zoom-in" className="first-card">
        <Image
          src="https://res.cloudinary.com/dkibnftac/image/upload/v1692415804/melissa-walker-horn-cGxX3OLFg5M-unsplash_1_lccnoq.png"
          alt="coffee"
          height={250}
          width={250}
        />
        <h5>Ameriacno</h5>
        <p>Lorem ipsum dolor sit amet.</p>
        <h3>Just $19.00</h3>
      </div>
      <div data-aos="zoom-in" className="first-card">
        <Image
          src="https://res.cloudinary.com/dkibnftac/image/upload/v1692415804/melissa-walker-horn-cGxX3OLFg5M-unsplash_1_lccnoq.png"
          alt="coffee"
          height={250}
          width={250}
        />
        <h5>Ameriacno</h5>
        <p>Lorem ipsum dolor sit amet.</p>
        <h3>Just $19.00</h3>
      </div>
      <div data-aos="zoom-in" className="first-card">
        <Image
          src="https://res.cloudinary.com/dkibnftac/image/upload/v1692415804/melissa-walker-horn-cGxX3OLFg5M-unsplash_1_lccnoq.png"
          alt="coffee"
          height={250}
          width={250}
        />
        <h5>Ameriacno</h5>
        <p>Lorem ipsum dolor sit amet.</p>
        <h3>Just $19.00</h3>
      </div>
    </>
  );
}

export default CoffeeCard;
