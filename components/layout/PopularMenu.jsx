import Image from "next/image";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PopularMenu() {
  return (
    <div className="menu-container">
      <div className="menu-content">
        <div className="menu-img">
          <Image
            src="https://res.cloudinary.com/dkibnftac/image/upload/v1692281507/png2_3_w4xven.png"
            alt="coffee"
            height={200}
            width={200}
            className="menu-beans"
          />
          <Image
            src="https://res.cloudinary.com/dkibnftac/image/upload/v1692281507/Group_48_rjb5tb.png"
            alt="coffee"
            height={400}
            width={700}
            className="menu-coffee"
          />
          <Image
            src="https://res.cloudinary.com/dkibnftac/image/upload/v1692281507/png2_2_ustcsg.png"
            alt="coffee"
            height={200}
            width={200}
            className="menu-beans"
          />
        </div>
      </div>
      <div className="menu-table">
        <h1>Popular Menu</h1>
        <div className="grid-container">
          <Container className="menu-grid">
            <Row className="justify-content-center">
              <Col className="col" xs={12} sm={5}>
                <Image
                  src="https://res.cloudinary.com/dkibnftac/image/upload/v1692359391/image_3_cuog6o.png"
                  alt="coffee"
                  height={70}
                  width={70}
                />
                <div>
                  <h4>Irish</h4>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <h5>$7.00</h5>
              </Col>
              <Col className="col" xs={12} sm={5}>
                <Image
                  src="https://res.cloudinary.com/dkibnftac/image/upload/v1692359391/image_3_cuog6o.png"
                  alt="coffee"
                  height={70}
                  width={70}
                />
                <div>
                  <h4>Irish</h4>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <h5>$7.00</h5>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col className="col" xs={12} sm={5}>
                <Image
                  src="https://res.cloudinary.com/dkibnftac/image/upload/v1692359391/image_3_cuog6o.png"
                  alt="coffee"
                  height={70}
                  width={70}
                />
                <div>
                  <h4>Irish</h4>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <h5>$7.00</h5>
              </Col>
              <Col className="col" xs={12} sm={5}>
                <Image
                  src="https://res.cloudinary.com/dkibnftac/image/upload/v1692359391/image_3_cuog6o.png"
                  alt="coffee"
                  height={70}
                  width={70}
                />
                <div>
                  <h4>Irish</h4>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <h5>$7.00</h5>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col className="col" xs={12} sm={5}>
                <Image
                  src="https://res.cloudinary.com/dkibnftac/image/upload/v1692359391/image_3_cuog6o.png"
                  alt="coffee"
                  height={70}
                  width={70}
                />
                <div>
                  <h4>Irish</h4>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <h5>$7.00</h5>
              </Col>
              <Col className="col" xs={12} sm={5}>
                <Image
                  src="https://res.cloudinary.com/dkibnftac/image/upload/v1692359391/image_3_cuog6o.png"
                  alt="coffee"
                  height={70}
                  width={70}
                />
                <div>
                  <h4>Irish</h4>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <h5>$7.00</h5>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col className="col" xs={12} sm={5}>
                <Image
                  src="https://res.cloudinary.com/dkibnftac/image/upload/v1692359391/image_3_cuog6o.png"
                  alt="coffee"
                  height={70}
                  width={70}
                />
                <div>
                  <h4>Irish</h4>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <h5>$7.00</h5>
              </Col>
              <Col className="col" xs={12} sm={5}>
                <Image
                  src="https://res.cloudinary.com/dkibnftac/image/upload/v1692359391/image_3_cuog6o.png"
                  alt="coffee"
                  height={70}
                  width={70}
                />
                <div>
                  <h4>Irish</h4>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <h5>$7.00</h5>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default PopularMenu;
