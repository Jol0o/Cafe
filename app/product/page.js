'use client'
import React, { useEffect, useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import '../style.css'
import ProductCard from '../../components/card/ProductCoffeeCard';
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from '@/firebase/firebase';
import ProductPastriesCard from './../../components/card/ProductPastriesCard';


function page() {
    const [key, setKey] = useState('home');
    const [coffee, setCoffee] = useState(null);
    const [pastries, setPastries] = useState(null);
    console.log(pastries)


    useEffect(() => {
        const coffee = onSnapshot(collection(db, "coffees"), (snapshot) =>
            setCoffee(snapshot.docs.map((e) => e.data()))
        );
        return () => {
            // Cleanup the listener when the component unmounts
            coffee();
        };
    }, []);

    useEffect(() => {
        const pastries = onSnapshot(collection(db, "pastries"), (snapshot) =>
            setPastries(snapshot.docs.map((e) => e.data()))
        );
        return () => {
            // Cleanup the listener when the component unmounts
            pastries();
        };
    }, []);

    return (
        <div className='product-container'>
            <div className='product-content'>
                <Tabs
                    defaultActiveKey="profile"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                >
                    <Tab eventKey="home" className='product-tab' title="Coffee">
                        <ProductCard item={coffee} />
                    </Tab>
                    <Tab eventKey="profile" className='product-tab' title="Pastries">
                        < ProductPastriesCard item={pastries} />
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default page