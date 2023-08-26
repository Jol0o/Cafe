"use client";
import { auth, db } from "@/firebase/firebase";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import StarRatings from "react-star-ratings";

function ProductDetail({ id }) {
  const [count, setCount] = useState(1);
  const [details, setDetails] = useState(null);
  const [user] = useAuthState(auth);
  const router = useRouter();

  const changeRating = (newRating, name) => {
    setRating(newRating);
  };

  const getProductById = async () => {
    const productDocRefCoffees = doc(collection(db, "coffees"), id);
    const productDocRefPastries = doc(collection(db, "pastries"), id);

    const productDocCoffees = await getDoc(productDocRefCoffees);
    const productDocPastries = await getDoc(productDocRefPastries);

    if (productDocCoffees.exists()) {
      setDetails(productDocCoffees.data());
    } else if (productDocPastries.exists()) {
      setDetails(productDocPastries.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getProductById();
  }, [id]);

  const increment = () => {
    if (count <= 9) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(1);
    }
  };

  const addToCart = async (product) => {
    if (!user) {
      router.push("/login");
    } else {
      const uid = user.uid;
      const userRef = doc(db, "cart", uid);
      try {
        const userSnap = await getDoc(userRef);
        const cart = [];
        if (userSnap.exists()) {
          const userData = userSnap.data();
          cart.push(...userData.cart);
        }
        const productIndex = cart.findIndex((item) => item.id === product.id);
        if (productIndex === -1) {
          // Add the product to the cart with a quantity of 1
          cart.push({ ...product, quantity: 1 });
        } else {
          // Increase the quantity of the product in the cart by 1
          cart[productIndex].quantity += 1;
        }
        await setDoc(userRef, { cart });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="product-detail-container">
      {details && (
        <div className="product-detail-content">
          <div className="img-container">
            <Image
              src={details?.imageUrl}
              height={1000}
              width={1000}
              quality={100}
              alt="img"
            />
          </div>
          <div className="product-details">
            <h1>{details?.name}</h1>
            <div className="rating">
              <StarRatings
                rating={details?.rating}
                starRatedColor="yellow"
                changeRating={changeRating}
                numberOfStars={5}
                starDimension="18px"
                starSpacing="5px"
                name="rating"
              />
              <h3>{details?.rating} Reviews</h3>
            </div>
            <p>{details?.description}</p>
            <div className="product-options">
              <div className="flavor">
                <h2>Flavor</h2>
                <p>Mocha</p>
              </div>
              <div className="quantity">
                <h2>Case Quantity</h2>
                <div className="increment">
                  <button onClick={decrement}>-</button>
                  <h3>{count}</h3>
                  <button onClick={increment}>+</button>
                </div>
              </div>
            </div>
            <h3 className="price">PHP {details?.price}</h3>
            <button className="cart" onClick={() => addToCart(details)}>
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
