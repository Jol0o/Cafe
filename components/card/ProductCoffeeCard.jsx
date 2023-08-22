"use client";
import Link from "next/link";
import React from "react";
import { Button, Card } from "react-bootstrap";
import Image from "next/image";

function ProductCard({ item }) {
  console.log(item);
  return (
    <>
      {item &&
        item.map((items) => (
          <Card
            key={items.id}
            className="d-flex product-card flex-column align-items-center bg-dark"
            style={{ width: "15rem", height: "350px", padding: "10px" }}
          >
            <Image
              src={items.imgUrl}
              alt="imageproduct"
              height={200}
              width={200}
              style={{ height: "180px", borderRadius: "10px" }}
            />
            <Card.Body
              className="d-flex flex-column"
              style={{ justifyContent: "space-between" }}
            >
              <Card.Title>{items.name}</Card.Title>
              <p>PHP {items.price}</p>
              <Link href={`/product/${items.id}`}>
                <Button variant="secondary" className="card-button">
                  Add to Cart
                </Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
    </>
  );
}

export default ProductCard;
