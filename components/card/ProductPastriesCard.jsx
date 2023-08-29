"use client";
import React from "react";
import Link from "next/link";
import { Button, Card } from "react-bootstrap";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

function ProductPastriesCard({ item }) {
  Aos.init();
  return (
    <>
      {item.map((items) => (
        <div data-aos="zoom-in">
          <Card
          key={items.id}
          className="d-flex product-card flex-column align-items-center border border-dark"
          style={{ width: "14rem", height: "350px", padding: "10px", backgroundColor: '#191919'}}
        >
          <Image
            src={items.imageUrl}
            alt="imageproduct"
            height={200}
            width={200}
            style={{ height: "180px", borderRadius: "10px" }}
          />
          <Card.Body
            className="d-flex flex-column justify-content-center"
            style={{ justifyContent: "space-between" }}
          >
            <div>
              <h6>{items.name}</h6>
              <p>PHP {items.price}</p>
            </div>
            <div style={{display: 'flex'}}>
            <Link href={`/product/${items.id}`}>
                <Button variant="secondary" className="card-button">
                  Explore
                </Button>
            </Link>
            <Link href={`/product/${items.id}`}>
                <Button style={{backgroundColor: '#d3ad7f'}} variant="dark" className="card-button">
                  Buy Now
                </Button>
            </Link>
            </div>
          </Card.Body>
        </Card>
        </div>
          ))}
    </>
  );
}

export default ProductPastriesCard;
