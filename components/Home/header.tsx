import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Header: NextPage = () => {
  return (
    <header id="header" className="fixed-top">
      <div className="container-fluid d-flex">
        <div className="logo mr-auto">
          <a href="">
            <img src="/img/revert-logo.png" alt=""></img>
          </a>
        </div>

        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className="active">
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            {/* <li className="drop-down"><a href="">Drop Down</a>
                            <ul>
                                <li><a href="#">Drop Down 1</a></li>
                                <li className="drop-down"><a href="#">Drop Down 2</a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Drop Down 3</a></li>
                                <li><a href="#">Drop Down 4</a></li>
                                <li><a href="#">Drop Down 5</a></li>
                            </ul>
                        </li> */}
            <li>
              <a href="#contact">Contact Us</a>
            </li>

            <li className="get-started">
              <a href="#about">Get Started</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
