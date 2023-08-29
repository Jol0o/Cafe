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

          <div style={{ margin: '24px'}} className="product-details d-flex flex-column justify-content-between">
            <div>
            <h1>{details?.name}</h1>
            <p>{details?.description}</p>
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
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between' , marginTop: '42px'}}>
                <p>Flavor</p>
                <p>Mocha</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between' , margin: '0px 0px'}}>
                <p>Price</p>
                <p>PHP {details?.price}</p>
              </div>
            <div style={{display: 'flex'}}>
              { details?.isExclusive ? <p style={{color: 'black', backgroundColor: 'white', width: 'fit-content', padding: '2px 12px', borderRadius: '12px', marginRight: '6px', marginTop:'12px', fontWeight: 'normal'}}>Exclusive</p> : <p></p>}
              { details?.isPopular ? <p style={{color: 'black', backgroundColor: 'white', width: 'fit-content', padding: '2px 12px', borderRadius: '12px', marginRight: '6px',  marginTop:'12px', fontWeight: 'normal'}}>Popular</p> : <p></p>}
            </div>
          </div>
            <div style={{display: 'flex'}}>
            <button style={{backgroundColor: '#d3ad7f', borderRadius: '12px', margin: '0px 4px'}} className="cart" onClick={() => addToCart(details)}>
              Buy Now
            </button>
            <button style={{borderRadius: '12px', margin: '0px 4px'}} className="cart" onClick={() => addToCart(details)}>
              Add to Cart
            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
