"use client";
import { auth, db } from "@/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "../style.css";

function page() {
  const [isLogin, setIslogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const register = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(result);

      const userDocRef = doc(db, "users", result.user.uid);
      await setDoc(userDocRef, {
        email: result.user.email,
        name: result.user.displayName || "user",
        photo:
          result.user.photoURL ||
          "https://res.cloudinary.com/dkibnftac/image/upload/v1690208728/deku_ggqhox.jpg",
        id: result.user.uid,
      });
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      setEmail("");
      setPassword("");
      router.push("/");
      router.refresh();
    } catch (err) {
      console.log(err);
    }
  };

  const googleAuth = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const userDocRef = doc(db, "users", result.user.uid);
      await setDoc(userDocRef, {
        email: result.user.email,
        name: result.user.displayName || "user",
        photo:
          result.user.photoURL ||
          "https://res.cloudinary.com/dkibnftac/image/upload/v1690208728/deku_ggqhox.jpg",
        id: result.user.uid,
      });
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  const toggle = () => {
    setIslogin(!isLogin);
  };

  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <form>
            <h1>{isLogin ? "Login" : "Register"}</h1>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
            />
            <p style={{ color: "white" }}>Forgat your password?</p>
            {isLogin ? (
              <>
                <button onClick={login}>Login</button>
                <p style={{ color: "white" }}>
                  Don't have an account? <span onClick={toggle}>Register</span>{" "}
                </p>
              </>
            ) : (
              <>
                <button onClick={register}>Register</button>
                <p style={{ color: "white" }}>
                  Already have an account? <span onClick={toggle}>Login</span>{" "}
                </p>
              </>
            )}
            <div className="divider">
              <hr /> OR <hr />
            </div>

            <button onClick={googleAuth} className="google">
              <Image
                src="https://res.cloudinary.com/dkibnftac/image/upload/v1692519138/google_1_x7xonu.png"
                alt="logo"
                width={35}
                height={35}
              />
            </button>
          </form>
        </div>
        <div className="login-header">
          <Image
            src="https://res.cloudinary.com/dkibnftac/image/upload/v1692518225/showcase-container_lreomu.png"
            alt="logo"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
}

export default page;
