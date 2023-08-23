import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Faq: NextPage = () => {
  return (
    <section id="faq" className="faq section-bg">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>F.A.Q</h2>
          <p>Frequently Asked Questions</p>
        </div>

        <ul className="faq-list">
          <li data-aos="fade-up" data-aos-delay="100">
            <a data-toggle="collapse" className="" href="#faq1">
              What does your company do? <i className="icofont-simple-up"></i>
            </a>
            <div id="faq1" className="collapse show" data-parent=".faq-list">
              <p>
                We are a software company that specializes in Full-Stack Web
                developing and mobile app developing.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="200">
            <a data-toggle="collapse" href="#faq2" className="collapsed">
              What makes your software unique?{" "}
              <i className="icofont-simple-up"></i>
            </a>
            <div id="faq2" className="collapse" data-parent=".faq-list">
              <p>
                Our software stands out due to its innovative blend of
                cutting-edge technology and user-centric design. With a robust
                set of features we offer a comprehensive solution that addresses
                the specific challenges faced by businesses today.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="300">
            <a data-toggle="collapse" href="#faq3" className="collapsed">
              How can I get started with your service?{" "}
              <i className="icofont-simple-up"></i>
            </a>
            <div id="faq3" className="collapse" data-parent=".faq-list">
              <p>
                You can be in touch with us using the “Contact us” in this page
                or directly through email. Then we can start the journey.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="400">
            <a data-toggle="collapse" href="#faq4" className="collapsed">
              Is your software suitable for businesses of all sizes?
              <i className="icofont-simple-up"></i>
            </a>
            <div id="faq4" className="collapse" data-parent=".faq-list">
              <p>
                Yes, our software is designed to cater to businesses of all
                sizes, from startups to enterprises.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="500">
            <a data-toggle="collapse" href="#faq5" className="collapsed">
              What industries do you serve?
              <i className="icofont-simple-up"></i>
            </a>
            <div id="faq5" className="collapse" data-parent=".faq-list">
              <p>
                We serve a diverse range of industries including E-Commerce,
                Government and Public Services, Retail and Loyalty,
                Communication and Collaboration, Healthcare, Education,
                Entertainment and Media, Travel and Hospitality, Real Estate,
                Food and Beverage, Logistics and Transportation, Automotive,
                Fitness and Wellness, Utilities, Manufacturing, Social Impact,
                and the list goes on.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="600">
            <a data-toggle="collapse" href="#faq6" className="collapsed">
              How does your pricing work? <i className="icofont-simple-up"></i>
            </a>
            <div id="faq6" className="collapse" data-parent=".faq-list">
              <p>
                Our pricing is based on Scope, Complexity, Development Time,
                Resource Costs, Technology Stack, Customization, client budget
                etc.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="600">
            <a data-toggle="collapse" href="#faq7" className="collapsed">
              Is my data secure with your services?
              <i className="icofont-simple-up"></i>
            </a>
            <div id="faq7" className="collapse" data-parent=".faq-list">
              <p>
                Absolutely. We prioritize data security and follow industry best
                practices to ensure your data is protected.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="600">
            <a data-toggle="collapse" href="#faq8" className="collapsed">
              Are there any hidden fees? <i className="icofont-simple-up"></i>
            </a>
            <div id="faq8" className="collapse" data-parent=".faq-list">
              <p>
                No, we are transparent about our pricing and do not have any
                hidden fees.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="600">
            <a data-toggle="collapse" href="#faq9" className="collapsed">
              Are the technologies used new?{" "}
              <i className="icofont-simple-up"></i>
            </a>
            <div id="faq9" className="collapse" data-parent=".faq-list">
              <p>
                We leverage cutting-edge technologies to ensure our software is
                at the forefront of innovation.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="600">
            <a data-toggle="collapse" href="#faq10" className="collapsed">
              Tell me about your team's expertise.{" "}
              <i className="icofont-simple-up"></i>
            </a>
            <div id="faq10" className="collapse" data-parent=".faq-list">
              <p>
                Our team consists of highly skilled software engineers who are
                adept with the latest tech stacks. Collectively, the team brings
                over 10+ years of invaluable experience to the table, driving
                our software's excellence.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="600">
            <a data-toggle="collapse" href="#faq11" className="collapsed">
              Are your rates competitive in the market?{" "}
              <i className="icofont-simple-up"></i>
            </a>
            <div id="faq11" className="collapse" data-parent=".faq-list">
              <p>
                Absolutely, we strive to offer competitive rates without
                compromising on quality. Our pricing is designed to provide you
                with the best value for your investment.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="600">
            <a data-toggle="collapse" href="#faq12" className="collapsed">
              How quickly can I expect responses from your customer service?{" "}
              <i className="icofont-simple-up"></i>
            </a>
            <div id="faq12" className="collapse" data-parent=".faq-list">
              <p>
                Our customer service team aims to respond within 1 hour during
                business hours and strives to resolve your inquiries as swiftly
                as possible.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="600">
            <a data-toggle="collapse" href="#faq13" className="collapsed">
              Can I see examples of businesses that have benefited from your
              software? <i className="icofont-simple-up"></i>
            </a>
            <div id="faq13" className="collapse" data-parent=".faq-list">
              <p>
                Certainly, we have case studies and testimonials available that
                showcase how businesses similar to yours have achieved success
                with our software.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Faq;
