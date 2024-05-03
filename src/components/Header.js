/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const Header = () => {
  return (
    <>
      <header className="w-full bg-white relative z-10">
        <div className="container m-auto flex items-center justify-between">
          <div>
            <Image src="logo.png" width="58" />
          </div>
          <div>
            <ul className="list-none">
              <li className="inline">
                <div className="dropdown">
                  <button className="dropbtn">
                    <span>Products</span>
                    <i className="pi pi-chevron-down"></i>
                  </button>
                  <div className="dropdown-content">
                    <a>Link 1</a>
                    <a>Link 2</a>
                    <a>Link 3</a>
                  </div>
                </div>
              </li>
              <li className="inline">
                <div className="dropdown">
                  <button className="dropbtn">
                    <span>Docs</span>
                    <i className="pi pi-chevron-down"></i>
                  </button>
                  <div className="dropdown-content">
                    <a>Link 1</a>
                    <a>Link 2</a>
                    <a>Link 3</a>
                  </div>
                </div>
              </li>
              <li className="inline">
                <div className="dropdown">
                  <button className="dropbtn">
                    <span>Company</span>
                    <i className="pi pi-chevron-down"></i>
                  </button>
                  <div className="dropdown-content">
                    <a>Link 1</a>
                    <a>Link 2</a>
                    <a>Link 3</a>
                  </div>
                </div>
              </li>
              <li className="inline">
                <div className="dropdown">
                  <button className="dropbtn">
                    <span>Pricing</span>
                  </button>
                </div>
              </li>
              <li className="inline">
                <div className="dropdown">
                  <button className="dropbtn">
                    <span>Contact</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div className="signin">
            <Button
              label=" Login "
              severity="secondary"
              size="small"
              outlined
            />
            <Button label="Sign Up" size="small" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
