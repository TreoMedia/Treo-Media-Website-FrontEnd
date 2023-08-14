import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Service: NextPage = () => {
  return (
    <section id="services" className="services section-bg">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>Check out the great services we offer</p>
        </div>

        <div className="row">
          <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bxl-dribbble"></i>
              </div>
              <h4 className="title">
                <a href="">Web Application Development</a>
              </h4>
              <p className="description">
                "Unleash the Future: Elevate your digital presence with our
                top-tier web application development. Harness cutting-edge
                technologies to transform your ideas into seamless, dynamic
                experiences. Let's build the extraordinary together."
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-file"></i>
              </div>
              <h4 className="title">
                <a href="">Mobile Application Development</a>
              </h4>
              <p className="description">
                "Elevate your concepts through our premier mobile app
                development services. Our team leverages the latest and most
                advanced technologies to craft fluid and captivating mobile
                solutions, bringing your vision to life with excellence."
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-tachometer"></i>
              </div>
              <h4 className="title">
                <a href="">Software Testing</a>
              </h4>
              <p className="description">
                "Elevate your software's reliability with our top-notch Testing
                and Quality Assurance services. Our meticulous approach
                guarantees seamless functionality and enhances user
                satisfaction, ensuring your digital solutions exceed
                expectations."
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-world"></i>
              </div>
              <h4 className="title">
                <a href="">UI/UX</a>
              </h4>
              <p className="description">
                "Crafting Experiences, Shaping Perceptions. Seamless user
                experiences start here. Our UI/UX services blend creativity and
                functionality, transforming complex ideas into intuitive designs
                that captivate and engage, setting your brand apart in the
                digital landscape."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
