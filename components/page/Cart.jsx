"use client";
import { auth, db } from "@/firebase/firebase";
import { doc, collection, getDoc, onSnapshot } from "firebase/firestore";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import CartCard from "../card/CartCard";

function Cart() {
  const [user] = useAuthState(auth);
  const [cartItems, setCartItems] = useState(null);
  const [total, setTotal] = useState(null);

  const calculateTotal = () => {
    const calculatedTotal = cartItems.cart.reduce((accumulator, item) => {
      const itemTotal = item.price * item.quantity;
      return accumulator + itemTotal;
    }, 0);
    setTotal(calculatedTotal);
  };

 

  useEffect(() => {
  if (user) {
    const uid = user.uid;
    const cartRef = doc(db, "cart", uid);

    const unsubscribe = onSnapshot(cartRef, (doc) => {
      if (doc.exists()) {
        setCartItems(doc.data());
      } else {
        console.log("No cart document for this user.");
      }
    });
    return () => {
      unsubscribe();
    };
  }
}, [user]);



  return (
    <div className="cart-container">
      <div className="cart-content">
        {cartItems ? (
          <>
            <div className="item-section">
              <div className="cart-header w-30">
                <h1>Saving to celebrate</h1>
                <p>
                  Enjoy up to 60% off thousands of styles during the End of Year
                  sale - while supplies last. No code needed.
                </p>
              </div>
              <div className="bag">
                <div className="bag-text">
                  <h1>Your Bag</h1>
                  <p>
                    Items in your bag not reserved- check out now to make them
                    yours.
                  </p>
                </div>
                <div className="cart-cards ">
                  <CartCard items={cartItems} />
                </div>
              </div>
            </div>
            <div className="checkout-section">
              <h1>Order Summary</h1>
              <div className="d-flex">
                <h3>{cartItems.cart.lenght} Item</h3>
                <div>
                  {cartItems.cart.map((item) => (
                    <p key={item.id}>PHP {item.price}</p>
                  ))}
                </div>
              </div>
              <div className="d-flex">
                <h3>Total</h3>
                <p>
                  {cartItems?.cart?.reduce((accumulator, item) => {
                    const itemTotal = item.price * item.quantity;
                    return accumulator + itemTotal;
                  }, 0)}
                </p>
              </div>
              <button>Checkout</button>
            </div>
          </>
        ) : (
          <div className="no-cart">
            <h1>No Coffee Here</h1>
            <Image
              src="https://res.cloudinary.com/dkibnftac/image/upload/v1692969906/ilus-1_fa26w8.png"
              alt="img"
              width={600}
              height={600}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
