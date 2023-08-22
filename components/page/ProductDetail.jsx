"use client";
import Image from "next/image";
import React, { useState } from "react";
import StarRatings from "react-star-ratings";

function ProductDetail() {
  const [rating, setRating] = useState(0);
  const [count, setCount] = useState(1);

  const changeRating = (newRating, name) => {
    setRating(newRating);
  };

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

  return (
    <div className="product-detail-container">
      <div className="product-detail-content">
        <div className="img-container">
          <Image
            src="https://res.cloudinary.com/dkibnftac/image/upload/v1692619563/pexels-photo-2396220_ocjbup.jpg"
            height={1000}
            width={1000}
          />
        </div>
        <div className="product-details">
          <h1>Coffee</h1>
          <div className="rating">
            <StarRatings
              rating={rating}
              starRatedColor="yellow"
              changeRating={changeRating}
              numberOfStars={5}
              starDimension="18px"
              starSpacing="5px"
              name="rating"
            />
            <h3>123 Reviews</h3>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            exercitationem id explicabo iste cupiditate, tempore ab mollitia
            suscipit molestiae excepturi, magnam velit, aspernatur quo. Quod a
            officia dicta mollitia perspiciatis!
          </p>
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
          <h3 className="price">$10.21</h3>
          <button className="cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
