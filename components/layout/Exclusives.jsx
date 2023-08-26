import React from "react";
import CoffeeCard from "./../card/CoffeeCard";
import Aos from 'aos';
import 'aos/dist/aos.css';


function Exclusives() {
  Aos.init();
  return (
    <div className="cafe-container">
      <h1>Exclusives Coffee</h1>
      <div className="card-container">
        <CoffeeCard />
      </div>
    </div>
  );
}

export default Exclusives;
