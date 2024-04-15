import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Footer.css";
// import { SocialIcon } from "react-social-icons";
<a
  href="https://www.flaticon.com/free-icons/credit-card"
  title="credit card icons"
>
  Credit card icons created by Freepik - Flaticon
</a>;
function Footer() {
  return (
    <footer>
      <Container>
        <div className="footer-first">
          <Row>
            <Col id="firstCol">
              <label htmlFor="">Sign Up For Email Offers & Updates</label>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Enter Email"
                  aria-label="Enter Email"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  SUBMIT
                </Button>
              </InputGroup>
            </Col>
            <Col>
              <h5>Connect With Us</h5>
              <div className="socialIcon">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-pinterest-p"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </Col>
            <Col>
              <h6>SECURE ORDERING & TRANSACTIONS</h6>
              <img
                className="creditcard"
                src="assets/icons/visa.png"
                alt=""
              />
              <img
                className="creditcard"
                src="assets/icons/mastercard.png"
                alt=""
              />
              <img
                className="creditcard"
                src="assets/icons/rupay.png"
                alt=""
              />
              <img
                className="creditcard"
                src="assets/icons/paypal.png"
                alt=""
              />
            </Col>
          </Row>
        </div>
        <div className="footer-second">
          <h6>
            About us | TDI Team | Careers | Contact Us | Testimonials | Terms &
            Conditions | Disclaimer | Terms Of Use | Privacy Policy | FAQ |
            Retails Store | Franchise | Blog | Affiliate Program | Flower |
            Astrology | News | Room | Download App
          </h6>
        </div>
        <div className="footer-last">
          Copyright @ 2020 www.thedigitalindia.com. All right reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
