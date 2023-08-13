import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const HeroSection: NextPage = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 hero-sec">
            <div className="align-items-baseline">
              <h1 className="main-color-text">We are</h1>
              <img
                src="/img/revert-logo.png"
                alt=""
                className="treo-img mb-5"
              ></img>
            </div>

            <h2>Let's make your digital dream come true</h2>
            <a href="#about" className="btn-get-started scrollto">
              Get Started
            </a>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img
              src="/img/hero-img.svg"
              className="img-fluid animated"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
