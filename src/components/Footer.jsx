import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [Links, setLinks] = useState(false);
  const [Gallery, setGallery] = useState(false);
  const [Contact, setContact] = useState(false);
  return (
    <footer>
      <section class="contact">
        <div class="contact-1">
          <i class="fa fa-phone" id="call" aria-hidden="true"></i>
          <p className="text-black" class="question">DO YOU HAVE A QUESTION?</p>
          <p class="number">+919616165553</p>
        </div>
        <div class="contact-2">
          <div>
            <i class="fa fa-envelope-o" id="mail" aria-hidden="true"></i>
            <input
              type="search"
              placeholder="Enter email"
              className="text-black"
            />
          </div>
          <button
            onClick={() => {
              alert("subscribed!!!");
            }}
          >
            Subscribe
          </button>
        </div>
      </section>

      <section class="footer">
        <div class="footer-content">
          <div class="footer-about">
            <h1>OUR MISSION</h1>
            <p>
              Bringing clean water to an Asian village is a vital and impactful
              endeavor that can significantly improve the lives of the
              community's residents. Access to clean and safe drinking water is
              a fundamental human right
            </p>
            <br />
            <p>
              Initiatives focused on delivering clean water to Asian villages
              serve as a testament to our collective responsibility in ensuring
              a sustainable and equitable world.
            </p>
          </div>

          <div class="footer-links">
            <h2
              class="links"
              onClick={() => {
                setLinks(!Links);
              }}
            >
              QUICK LINKS
            </h2>
            <br />
            <ul class={"footer-links-ul " + (Links && "active-links")}>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="/">Home</Link>
              </li>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="about">About</Link>
              </li>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="causes">Causes</Link>
              </li>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="event">Events</Link>
              </li>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="news">News</Link>
              </li>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div class="gallery">
            <h2
              class="gal-btn"
              onClick={() => {
                setGallery(!Gallery);
              }}
            >
              GALLERY
            </h2>
            <div class={"gal-container " + (Gallery && "gal-container-active")}>
              <div>
                <img src="assets/ga1.png" alt="gal-img"/>
                <img src="assets/ga2.png" alt="gal-img"/>
              </div>
              <div>
                <img src="assets/gap3.png" alt="gal-img"/>
                <img src="assets/gal4.png" alt="gal-img"/>
              </div>
              <div>
                <img src="assets/gal5.png" alt="gal-img"/>
                <img src="assets/gal6.png" alt="gal-img"/>
              </div>
            </div>
          </div>

          <div class="contact-footer">
            <h2
              class="contact-btn"
              onClick={() => {
                setContact(!Contact);
              }}
            >
              CONTACT US
            </h2>

            <div
              class={
                "contact-container " + (Contact && "contact-container-active")
              }
            >
              <div class="contact-card">
                <div class="contact-heading">
                  <div class="location">
                    <i class="fa fa-map-marker one" aria-hidden="true"></i>
                  </div>
                  <h3>Head Office</h3>
                </div>
                <div class="contact-ad">
                  <p>Shahjahan Padav, near Mo.Hassan College, Jaunpur</p>
                  <p>Uttar Pradesh</p>
                </div>
              </div>
              <div class="contact-card">
                <div class="contact-heading">
                  <div class="location">
                    <i class="fa fa-phone two" aria-hidden="true"></i>
                  </div>
                  <h3>Phone Number</h3>
                </div>
                <div class="contact-ad">
                  <p>+91 9616165553</p>
                </div>
              </div>
              <div class="contact-card">
                <div class="contact-heading">
                  <div class="location">
                    <i class="fa fa-envelope three" aria-hidden="true"></i>
                  </div>
                  <h3>Email</h3>
                </div>
                <div class="contact-ad">
                  <p>singpriyanshu22@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <p class="copyright">
            Copyright @ 2024. Developed by Priyanshu Singh. All Rights Reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
