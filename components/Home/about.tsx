import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const About: NextPage = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
            <img
              src="/img/about-img.svg"
              className="img-fluid"
              alt=""
              data-aos="zoom-in"
            />
          </div>
          <div className="col-lg-6 pt-5 pt-lg-0">
            <h3 data-aos="fade-up">
              Don't sell yourself short – aim for the stars!
            </h3>
            <p data-aos="fade-up" data-aos-delay="100">
              We're a one-stop shop for web and mobile solutions, tackling all
              your digital business needs under one roof. Let's join hands and
              achieve nothing less than top-notch excellence!
            </p>
            <div className="row">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <i className="bx bx-receipt"></i>
                <h4>
                  Unleashing Technological Brilliance: Our Technical Expertise
                </h4>
                <p>
                  At Treo, we don't just write code; we craft exceptional
                  digital experiences driven by unparalleled technical
                  expertise. Our team of seasoned software developers,
                  engineers, and tech wizards is at the forefront of innovation,
                  constantly pushing the boundaries of what's possible in the
                  world of software development.
                </p>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <i className="bx bx-cube-alt"></i>
                <h4>
                  {" "}
                  Igniting Possibilities: Fueling Innovation and Creativity
                </h4>
                <p>
                  Welcome to Treo, where innovation and creativity converge to
                  redefine the boundaries of possibility. We don't just develop
                  software; we craft experiences that inspire, engage, and leave
                  an indelible mark on the digital landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
