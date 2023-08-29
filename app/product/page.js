'use client'
import React, { useEffect, useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import '../style.css'
import ProductCard from '../../components/card/ProductCoffeeCard';
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from '@/firebase/firebase';
import ProductPastriesCard from './../../components/card/ProductPastriesCard';


function page() {
    const [tab, setTab] = useState("coffee");

    const [coffee, setCoffee] = useState(null);
    const [pastries, setPastries] = useState(null);
    console.log(pastries)

    const toggleCoffee = () => {
        setTab("coffee")
    }

    const togglepastries = () => {
        setTab("pastries")
    }


    useEffect(() => {
        const coffee = onSnapshot(collection(db, "coffees"), (snapshot) =>
            setCoffee(snapshot.docs.map((e) => e.data()))
        );
        return () => {
            
            coffee();
        };
    }, []);

    useEffect(() => {
        const pastries = onSnapshot(collection(db, "pastries"), (snapshot) =>
            setPastries(snapshot.docs.map((e) => e.data()))
        );
        return () => {
            
            pastries();
        };
    }, []);

    return (
        <div className='product-container'>
            <div className='product-content'>
                <div className='d-flex justify-content-center tabs align-items-center'>
                    <button onClick={toggleCoffee} style={{ background: tab == "coffee" ? "#27374D" : "transparent" }}>Coffee</button>
                    <button onClick={togglepastries} style={{ background: tab == "pastries" ? "#27374D" : "transparent" }}>Pastries</button>
                </div>
                {tab == "coffee" ? <div className='tab d-flex justify-content-center' >
                    <ProductCard item={coffee} />
                </div>
                    : <div className='tab d-flex justify-content-center' >
                    <ProductPastriesCard item={pastries} />
                </div>}
            </div>
        </div>
    )
}

export default page