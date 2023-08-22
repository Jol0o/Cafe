import Image from "next/image";
import React from "react";

function CoffeeCard() {
  return (
    <>
      <div className="first-card">
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
      <div className="coffee-card">
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
      <div className="coffee-card">
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
