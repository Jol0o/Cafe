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
          Item Deleted Successfully
        </Alert>
      )}
      {items &&
        items.cart.map((item) => (
          <div key={item.id} className="d-flex gap-3 item-card">
            <Image src={item.imageUrl} alt="img" height={50} width={50} />
            <div className="">
              <h1 style={{ fontSize: "16px" }}>{item.name}</h1>
              <div className="d-flex gap-3">
                <p style={{ fontSize: "12px" }}>Price PHP {item.price}</p>
                <p style={{ fontSize: "12px" }}>x</p>
                <p style={{ fontSize: "12px" }}>Quantity ({item.quantity})</p>
                <p style={{ fontSize: "12px" }}>=</p>
                <p style={{ fontSize: "12px" }}>
                  PHP {item.price * item.quantity}
                </p>
              </div>
              <button
                style={{
                  backgroundColor: "transparent",
                  padding: "0",
                  height: 0,
                  border: 0,
                  margin: 0,
                }}
              >
                <p
                  onClick={() => deleteItem(item.id)}
                  style={{ fontSize: "12px", color: "red" }}
                >
                  delete
                </p>
              </button>
            </div>
          </div>
        ))}
    </>
  );
}

export default CartCard;
