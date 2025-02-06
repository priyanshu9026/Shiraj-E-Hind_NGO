import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseGlobal from "../hooks/UseGlobal";

const Header = ({ path, User }) => {
  const [Toggle, setToggle] = useState("");
  console.log(User, "hello");
  return (
    <header>
      <div class="logo-container">
        <Link to="/">
          <img src="assets/ribbon.png" class="logo" alt="logos"/>
        </Link>
        <Link to="/">
          <div class="logo-text">
            <h1 class="logo-header">SHIRAJ - E - HIND</h1>
            <p>ORGANISATION</p>
          </div>
        </Link>
      </div>

      <div class="ham-btn">
        {Toggle === "active" ? (
          <i
            class="fa fa-times"
            onClick={() => {
              setToggle("");
            }}
          ></i>
        ) : (
          <i
            class="fa fa-solid fa-bars"
            onClick={() => {
              setToggle("active");
            }}
          ></i>
        )}
      </div>
      <div
        class={"header-links " + Toggle}
        onClick={() => {
          setToggle("");
        }}
      >
        <ul className="scroll-auto">
          <Link to="/" className="w-[100%] lg:w-auto">
            <li>
              <a href="#" style={{ color: path === "/" ? "red" : "" }}>
                Home
              </a>
            </li>
          </Link>
          <Link to="/about" className="w-[100%] lg:w-auto">
            <li>
              <a href="#" style={{ color: path === "/about" ? "red" : "" }}>
                About
              </a>
            </li>
          </Link>
          <Link to="/causes" className="w-[100%] lg:w-auto">
            <li>
              <a href="#" style={{ color: path === "/causes" ? "red" : "" }}>
                Causes
              </a>
            </li>
          </Link>
          <Link to="/events" className="w-[100%] lg:w-auto">
            <li>
              <a href="#" style={{ color: path === "/events" ? "red" : "" }}>
                Event
              </a>
            </li>
          </Link>
          <Link to="/news" className="w-[100%] lg:w-auto">
            <li>
              <a href="#" style={{ color: path === "/news" ? "red" : "" }}>
                News
              </a>
            </li>
          </Link>
          <Link to="contact" className="w-[100%] lg:w-auto">
            <li>
              <a href="#" style={{ color: path === "/contact" ? "red" : "" }}>
                Contact
              </a>
            </li>
          </Link>
          <Link to="login" className="w-[100%] lg:w-auto">
            <li>
              <a href="#" style={{ color: path === "/login" ? "red" : "" }}>
                <i class="fa fa-user" aria-hidden="true"></i>
                {User && User.username ? User.username : " Sign in"}
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
