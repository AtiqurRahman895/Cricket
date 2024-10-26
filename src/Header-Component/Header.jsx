// import React from 'react';
// import PropTypes from 'prop-types';
import logo from "../assets/logo.png";
import coinImg from "../assets/coin.png";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const Header = ({ coins }) => {
  const headerRef = useRef(null)
  useEffect(()=>{
    window.addEventListener(`scroll`,()=>{
      if (window.scrollY >= 1) {
        document
          headerRef.current.classList.add(`headerSectionAnimation`);
      } else {
        document
          headerRef.current.classList.remove(`headerSectionAnimation`);
      }

    })
},[]) 
  return (
    <header ref={headerRef} className="sticky top-0 w-full z-50">
      <nav className="container wrapper py-2">
        <div className="navbar px-0">
          <div className="navbar-start">
            <div className="dropdown lg:hidden">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content duration-1000 w-56 bg-base-100 rounded-box z-[1] mt-3 p-2 shadow"
                style={{ transitionDuration: `.5s` }}
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Fixture</a>
                </li>
                <li>
                  <a>Schedules</a>
                </li>
                <li>
                  <details className="duration-1000">
                    <summary>Theme</summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                      <li>
                        <a>Light</a>
                      </li>
                      <li>
                        <a>Dark</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>

            <a href="">
              <img src={logo} alt="Cricket" className="w-[40px] md:w-[60px] " />
            </a>
          </div>
          {/* <a className="navbar-center lg:hidden">
          <img src={logo} alt="Cricket" className="w-[40px] md:w-[60px]" />

        </a> */}
          <div className="navbar-end gap-3">
            <div className="hidden lg:flex flex-none">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Fixture</a>
                </li>
                <li>
                  <a>Schedules</a>
                </li>
                <li>
                  <details className="duration-1000">
                    <summary>Theme</summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                      <li>
                        <a>Light</a>
                      </li>
                      <li>
                        <a>Dark</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>

            <div className="cardButton flex-none flex items-center gap-2">
              <b>{coins} Coin</b> <img src={coinImg} alt=" " />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  coins: PropTypes.number.isRequired
};

export default Header;
