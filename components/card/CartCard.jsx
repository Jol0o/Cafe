import { auth, db } from "@/firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Image from "next/image";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsTrash } from "react-icons/bs";

function CartCard({ items }) {
  const [user] = useAuthState(auth);
  const [show, setShow] = useState(false);

  const deleteItem = async (id) => {
    const uid = user.uid;
    const userRef = doc(db, "cart", uid);
    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) {
      const userData = userSnapshot.data();
      const cart = userData.cart;

      const updatedCart = cart.filter((item) => item.id !== id);

      await updateDoc(userRef, { cart: updatedCart });
      setShow(true);
    } else {
      console.error("User document not found!");
    }
  };
  return (
    <>
      {show && (
        <Alert onClose={() => setShow(false)} variant="primary" dismissible>
          Delete Item Successfully
        </Alert>
      )}
      {items &&
        items.cart.map((item) => (
          <div
            key={item.id}
            className="
          d-flex gap-3  item-card"
          >
            <Image src={item.imageUrl} alt="img" height={250} width={250} />
            <div className="cart-info">
              <h1>{item.name}</h1>
              <div className="d-flex gap-3">
                <div>
                  <h4>Price</h4> <p>{item.price}</p>
                </div>
                <h3> x </h3>
                <div>
                  <h4>Quantity</h4> <p>{item.quantity}</p>
                </div>
                <h3> = </h3>
                <div>
                  <h4>Total</h4>
                  <p>PHP{item.price * item.quantity}</p>
                </div>
              </div>
              <BsTrash
                className="trash-icon"
                onClick={() => deleteItem(item.id)}
              />
            </div>
          </div>
        ))}
    </>
  );
}

export default CartCard;
