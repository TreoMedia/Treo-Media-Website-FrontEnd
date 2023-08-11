import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const TrustedClient: NextPage = () => {
    return (
        <section id="clients" className="clients section-bg">
            <div className="container">

                <div className="section-title" data-aos="fade-up">
                    <h2>Clients</h2>
                    <p>They trusted us</p>
                </div>

                <div className="owl-carousel clients-carousel" data-aos="fade-up" data-aos-delay="100">
                    <img src="/img/clients/client-1.png" alt="" />
                    <img src="/img/clients/client-2.png" alt="" />
                    <img src="/img/clients/client-3.png" alt="" />
                    <img src="/img/clients/client-4.png" alt="" />
                    <img src="/img/clients/client-5.png" alt="" />
                    <img src="/img/clients/client-6.png" alt="" />
                    <img src="/img/clients/client-7.png" alt="" />
                    <img src="/img/clients/client-8.png" alt="" />
                </div>

            </div>
        </section>
    )
}

export default TrustedClient
