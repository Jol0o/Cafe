import React, { useEffect, useState } from "react";
import CoffeeCard from "./../card/CoffeeCard";
import Aos from "aos";
import "aos/dist/aos.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/firebase";

function Exclusives() {
  Aos.init();
  const [coffees, setCoffees] = useState([]);
  console.log(coffees);

  const popular = async () => {
    const coffeeRef = collection(db, "coffees");
    const q = query(coffeeRef, where("isExclusive", "==", true));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setCoffees(doc.data());
    });
  };

  useEffect(() => {
    popular();
  }, []);

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
