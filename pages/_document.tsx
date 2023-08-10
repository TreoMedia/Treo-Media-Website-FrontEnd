import { Html, Head, Main, NextScript } from 'next/document'
import { HtmlComment } from '../components/HtmlComment'

export default function Document() {
    return (
        <Html>
            <Head>
                <HtmlComment content='<!-- CSS -->' />
                {/* <link href="/css/plugins/bootstrap.css" rel="stylesheet" type="text/css" /> */}
                <HtmlComment content='<!-- bootstrap css -->' />
                {/* <link href="/css/plugins/font-awesome.min.css" rel="stylesheet" type="text/css" /> */}
                <HtmlComment content='<!-- fontawesome css -->' />
                {/* <link href="/css/plugins/animate.css" rel="stylesheet" type="text/css" /> */}
                <HtmlComment content='<!-- animate css -->' />
                <link href="/css/style.css" rel="stylesheet" type="text/css" />
                <HtmlComment content='<!-- template css -->' />
                {/* <link href="/plugins/rev_slider/css/settings-ver.5.3.1.css" rel="stylesheet" type="text/css" /> */}
                <HtmlComment content='<!-- Slider Revolution Css Setting -->' />
                <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="/vendor/icofont/icofont.min.css" rel="stylesheet" />
                <link href="/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
                <link href="/vendor/venobox/venobox.css" rel="stylesheet" />
                <link href="/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet"></link>
                {/* <link href="/vendor/aos/aos.css" rel="stylesheet"></link> */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

