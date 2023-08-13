import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Home/header";
import Footer from "../components/Home/footer";
import ContactUsSection from "../components/Home/contact";
import Team from "../components/Home/team";
import TrustedClient from "../components/Home/TrustedClient";
import Faq from "../components/Home/faq";
import Portfolio from "../components/Home/portfolio";
import About from "../components/Home/about";
import Service from "../components/Home/service";
import HeroSection from "../components/Home/hero";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />

      <HeroSection />

      <main id="main">
        <About />

        <Service />

        <Portfolio />

        <Faq />

        <Team />

        <TrustedClient />
        <ContactUsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
