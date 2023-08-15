
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

const Portfolio: NextPage = () => {
    const [tab, setTab] = useState<number>(1)

    const handleClickTab = (tabValue: number) => {
        setTab(tabValue)
    }
    return (
        <section id="portfolio" className="portfolio">
            <div className="container">

                <div className="section-title" data-aos="fade-up">
                    <h2>Portfolio</h2>
                    <p>Check out our beautifull portfolio</p>
                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-12">
                        <ul id="portfolio-flters">
                            <li className="filter-active" onClick={() => handleClickTab(1)}>All</li>
                            <li onClick={() => handleClickTab(2)}>App</li>
                            <li onClick={() => handleClickTab(3)}>Card</li>
                            <li onClick={() => handleClickTab(4)}>Web</li>
                        </ul>
                    </div>
                </div>
                {
                    tab == 1 && (
                        <div className="row " >

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="icofont-plus-circle"></i></a>
                                        <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>App 1</h4>
                                        <p>App</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="icofont-plus-circle"></i></a>
                                        <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox" title="App 2"><i className="icofont-plus-circle"></i></a>
                                        <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>App 2</h4>
                                        <p>App</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox" title="Card 2"><i className="icofont-plus-circle"></i></a>
                                        <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Card 2</h4>
                                        <p>Card</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox" title="Web 2"><i className="icofont-plus-circle"></i></a>
                                        <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Web 2</h4>
                                        <p>Web</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox" title="App 3"><i className="icofont-plus-circle"></i></a>
                                        <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>App 3</h4>
                                        <p>App</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox" title="Card 1"><i className="icofont-plus-circle"></i></a>
                                        <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Card 1</h4>
                                        <p>Card</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox" title="Card 3"><i className="icofont-plus-circle"></i></a>
                                        <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Card 3</h4>
                                        <p>Card</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="icofont-plus-circle"></i></a>
                                        <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                }
                {
                    tab == 2 && (
                        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="icofont-plus-circle"></i></a>
                                        <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>App 1</h4>
                                        <p>App</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox" title="App 2"><i className="icofont-plus-circle"></i></a>
                                        <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>App 2</h4>
                                        <p>App</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox" title="App 3"><i className="icofont-plus-circle"></i></a>
                                        <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>App 3</h4>
                                        <p>App</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                }
                {
                    tab == 3 && (
                        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src="/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                    <a href="/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox" title="Card 2"><i className="icofont-plus-circle"></i></a>
                                    <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                </div>
                                <div className="portfolio-info">
                                    <h4>Card 2</h4>
                                    <p>Card</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src="/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                    <a href="/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox" title="Card 1"><i className="icofont-plus-circle"></i></a>
                                    <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                </div>
                                <div className="portfolio-info">
                                    <h4>Card 1</h4>
                                    <p>Card</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src="/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                    <a href="/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox" title="Card 3"><i className="icofont-plus-circle"></i></a>
                                    <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                </div>
                                <div className="portfolio-info">
                                    <h4>Card 3</h4>
                                    <p>Card</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    )
                }
                {
                    tab == 4 && (
                        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="icofont-plus-circle"></i></a>
                                        <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox" title="Web 2"><i className="icofont-plus-circle"></i></a>
                                        <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Web 2</h4>
                                        <p>Web</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="icofont-plus-circle"></i></a>
                                        <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Portfolio
