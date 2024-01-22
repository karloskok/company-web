import React from "react";
import ServicesListing from "./ServicesListing.js";

import strategic from "../images/business-consulting-2/icons/strategic.png";
import financial from "../images/business-consulting-2/icons/financial.png";
import cash from "../images/business-consulting-2/icons/cash.png";
import coaching_1 from "../images/business-consulting-2/coaching/coaching-1.jpg";
import coaching_2 from "../images/business-consulting-2/coaching/coaching-2.jpg";
import coaching_3 from "../images/business-consulting-2/coaching/coaching-3.jpg";
import case_logo_1 from "../images/business-consulting-2/logos/case-logo-1.png";
import case_logo_2 from "../images/business-consulting-2/logos/case-logo-2.png";
import case_logo_3 from "../images/business-consulting-2/logos/case-logo-3.png";

import avatar_2 from "../images/avatar-2.jpg";
import avatar_3 from "../images/avatar-3.jpg";

import phone from "../images/business-consulting-2/icons/phone.svg";

import blog_1 from "../images/business-consulting-2/blog/blog-1.png";
import blog_2 from "../images/business-consulting-2/blog/blog-2.png";

import bg_1 from "../images/business-consulting-2/bg/bg-1.jpg";

import slide_1 from "../images/img/demos/business-consulting-2/slides/slide-1.jpg";

export default ({ servicesEdges }) => (
    <main>
        <div role="main" className="main">
            <div
                className="owl-carousel owl-carousel-light owl-carousel-light-init-fadeIn owl-theme manual dots-inside dots-horizontal-center show-dots-hover show-dots-xs show-dots-sm show-dots-md nav-style-1 nav-inside nav-inside-plus nav-dark nav-lg nav-font-size-lg show-nav-hover bg-color-quaternary custom-slider-container mb-0"
                data-plugin-options="{'autoplay': true, 'autoplayTimeout': 7000}"
                data-dynamic-height="['991px','991px','991px','750px','750px']"
                style={{ height: "991px" }}
            >
                <div className="owl-stage-outer">
                    <div className="owl-stage">
                        <div className="owl-item position-relative overflow-hidden">
                            <div
                                className="background-image-wrapper position-absolute top-0 left-0 right-0 bottom-0"
                                data-appear-animation="kenBurnsToLeft"
                                data-appear-animation-duration="30s"
                                data-plugin-options="{'minWindowWidth': 0}"
                                data-carousel-onchange-show
                                style={{
                                    backgroundImage: { slide_1 },
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            ></div>
                            <div className="container position-relative z-index-3 pb-5 h-100">
                                <div className="row justify-content-center justify-content-lg-start align-items-center pb-5 h-100">
                                    <div className="col-sm-9 col-lg-7 text-center text-lg-start pb-5 mb-5">
                                        <h2
                                            className="text-color-primary font-weight-bold text-uppercase text-4 line-height-3 mb-2 appear-animation"
                                            data-appear-animation="fadeInUpShorter"
                                            data-appear-animation-delay="500"
                                            data-plugin-options="{'minWindowWidth': 0}"
                                        >
                                            <span className="line-pre-title bg-color-primary d-none d-lg-inline-block"></span>
                                            Business Consulting services located
                                            in Los Angeles, CA
                                        </h2>
                                        <h1
                                            className="text-color-secondary font-weight-extra-bold text-10 line-height-2 pe-lg-5 me-lg-5 mb-3 appear-animation"
                                            data-appear-animation="fadeInUpShorter"
                                            data-appear-animation-delay="750"
                                            data-plugin-options="{'minWindowWidth': 0}"
                                        >
                                            Reliable Management Consulting
                                            Services
                                        </h1>
                                        <p
                                            className="text-4 text-color-dark font-weight-light mb-4 appear-animation"
                                            data-appear-animation="fadeInUpShorter"
                                            data-appear-animation-delay="1000"
                                            data-plugin-options="{'minWindowWidth': 0}"
                                        >
                                            Professional helping you design
                                            success!
                                        </p>
                                        <a
                                            href="#"
                                            className="btn btn-primary btn-modern font-weight-bold text-2 btn-py-3 px-5 mt-2 appear-animation"
                                            data-appear-animation="fadeInUpShorter"
                                            data-appear-animation-delay="1250"
                                            data-plugin-options="{'minWindowWidth': 0}"
                                        >
                                            GET STARTED
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item position-relative overflow-hidden">
                            <div
                                className="background-image-wrapper position-absolute top-0 left-0 right-0 bottom-0"
                                data-appear-animation="kenBurnsToRight"
                                data-appear-animation-duration="30s"
                                data-plugin-options="{'minWindowWidth': 0}"
                                data-carousel-onchange-show
                                style={{
                                    BackgroundImage:
                                        "url(../images/img/demos/business-consulting-2/slides/slide-2.jpg)",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            ></div>
                            <div className="container position-relative z-index-3 pb-5 h-100">
                                <div className="row align-items-center justify-content-center justify-content-lg-end pb-5 h-100">
                                    <div className="col-sm-9 col-lg-7 text-center text-lg-start pb-5 mb-5">
                                        <h3
                                            className="text-color-primary font-weight-bold text-uppercase text-4 line-height-3 mb-2 appear-animation"
                                            data-appear-animation="fadeInUpShorter"
                                            data-appear-animation-delay="500"
                                            data-plugin-options="{'minWindowWidth': 0}"
                                        >
                                            <span className="line-pre-title bg-color-primary d-none d-lg-inline-block"></span>
                                            Business Consulting services located
                                            in Los Angeles, CA
                                        </h3>
                                        <h2
                                            className="text-color-secondary font-weight-extra-bold text-10 line-height-2 pe-lg-5 me-lg-5 mb-3 appear-animation"
                                            data-appear-animation="fadeInUpShorter"
                                            data-appear-animation-delay="750"
                                            data-plugin-options="{'minWindowWidth': 0}"
                                        >
                                            You Success is Our Main Business!
                                        </h2>
                                        <p
                                            className="text-4 text-color-dark font-weight-light mb-4 appear-animation"
                                            data-appear-animation="fadeInUpShorter"
                                            data-appear-animation-delay="1000"
                                            data-plugin-options="{'minWindowWidth': 0}"
                                        >
                                            Professional helping you design
                                            success!
                                        </p>
                                        <a
                                            href="#"
                                            className="btn btn-primary btn-modern font-weight-bold text-2 btn-py-3 px-5 mt-2 appear-animation"
                                            data-appear-animation="fadeInUpShorter"
                                            data-appear-animation-delay="1250"
                                            data-plugin-options="{'minWindowWidth': 0}"
                                        >
                                            GET STARTED
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-nav">
                    <button
                        type="button"
                        role="presentation"
                        className="owl-prev"
                        aria-label="Previous"
                    ></button>
                    <button
                        type="button"
                        role="presentation"
                        className="owl-next"
                        aria-label="Next"
                    ></button>
                </div>
            </div>

            <section className="bg-color-light p-relative z-index-2">
                <div
                    className="cards custom-cards custom-cards-slider h-auto pt-5 pb-4 container appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="100"
                >
                    <div className="row bg-color-light cards-container d-flex justify-content-center justify-content-xl-between w-100 mb-5 mx-0 box-shadow-1 p-relative top-0">
                        <div className="col-sm-12 col-md-6 col-xl-4 bg-light p-0 shadow-none">
                            <div className="card border-radius-0 border-0 shadow-none">
                                <div className="card-body d-flex align-items-center justify-content-between flex-column z-index-1">
                                    <img
                                        src={strategic}
                                        alt="Strategic Planning"
                                        className="appear-animation"
                                        data-appear-animation="fadeInUpShorter"
                                        data-appear-animation-delay="100"
                                    />
                                    <h4
                                        className="card-title mb-1 font-weight-semibold text-color-secondary appear-animation"
                                        data-appear-animation="fadeInUpShorter"
                                        data-appear-animation-delay="200"
                                    >
                                        Strategic Planning
                                    </h4>
                                    <p
                                        className="card-text text-center pt-2 appear-animation"
                                        data-appear-animation="fadeInUpShorter"
                                        data-appear-animation-delay="300"
                                    >
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Nunc viverra erat orci,
                                        ac auctor lacus tincidunt ut...
                                    </p>
                                    <a
                                        href="#"
                                        className="font-weight-bold text-uppercase text-decoration-none mt-3 appear-animation"
                                        data-appear-animation="fadeInUpShorter"
                                        data-appear-animation-delay="400"
                                    >
                                        read more +
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-xl-4 bg-light p-0 shadow-none">
                            <div className="card border-radius-0 border-0 shadow-none">
                                <div className="card-body d-flex align-items-center justify-content-between flex-column z-index-1">
                                    <img
                                        src={financial}
                                        alt="Financial Clean-Up"
                                        className="appear-animation"
                                        data-appear-animation="fadeInUpShorter"
                                        data-appear-animation-delay="500"
                                    />
                                    <h4
                                        className="card-title mb-1 font-weight-semibold text-color-secondary appear-animation"
                                        data-appear-animation="fadeInUpShorter"
                                        data-appear-animation-delay="600"
                                    >
                                        Financial Clean-Up
                                    </h4>
                                    <p
                                        className="card-text text-center pt-2 appear-animation"
                                        data-appear-animation="fadeInUpShorter"
                                        data-appear-animation-delay="700"
                                    >
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Nunc viverra erat orci,
                                        ac auctor lacus tincidunt ut...
                                    </p>
                                    <a
                                        href="#"
                                        className="font-weight-bold text-uppercase text-decoration-none mt-3 appear-animation"
                                        data-appear-animation="fadeInUpShorter"
                                        data-appear-animation-delay="800"
                                    >
                                        read more +
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-xl-4 bg-light p-0 shadow-none">
                            <div className="card border-radius-0 border-0 shadow-none">
                                <div className="card-body d-flex align-items-center justify-content-between flex-column z-index-1 border-end-0">
                                    <img
                                        src={cash}
                                        alt="Cash Flow Planning"
                                        className="appear-animation"
                                        data-appear-animation="fadeInUpShorter"
                                        data-appear-animation-delay="900"
                                    />
                                    <h4
                                        className="card-title mb-1 font-weight-semibold text-color-secondary appear-animation"
                                        data-appear-animation="fadeInUpShorter"
                                        data-appear-animation-delay="1000"
                                    >
                                        Cash Flow Planning
                                    </h4>
                                    <p
                                        className="card-text text-center pt-2 appear-animation"
                                        data-appear-animation="fadeInUpShorter"
                                        data-appear-animation-delay="1100"
                                    >
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Nunc viverra erat orci,
                                        ac auctor lacus tincidunt ut...
                                    </p>
                                    <a
                                        href="#"
                                        className="font-weight-bold text-uppercase text-decoration-none mt-3 appear-animation"
                                        data-appear-animation="fadeInUpShorter"
                                        data-appear-animation-delay="1200"
                                    >
                                        read more +
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="usluge"
                className="our-services d-flex p-relative z-index-1 bg-color-light lazyload"
                data-bg-src={bg_1}
            >
                <div className="col-img-our-services p-absolute overflow-hidden w-50 h-100"></div>
                <div className="container">
                    <div className="row justify-content-end align-items-center h-100">
                        <div className="col-lg-5 position-relative bg-color-light z-index-1 col-our-services-text">
                            <p
                                className="text-uppercase font-weight-semibold mb-1 text-color-primary appear-animation"
                                data-appear-animation="fadeInRightShorter"
                                data-appear-animation-delay="100"
                            >
                                <span className="line-pre-title bg-color-primary"></span>
                                naše usluge
                            </p>
                            <h2
                                className="text-color-secondary font-weight-bold text-capitalize mb-4 appear-animation"
                                data-appear-animation="fadeInRightShorter"
                                data-appear-animation-delay="200"
                            >
                                Što radimo?
                            </h2>
                            <p
                                className="font-weight-semibold mb-4 appear-animation"
                                data-appear-animation="fadeInRightShorter"
                                data-appear-animation-delay="300"
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi ut.
                            </p>
                            <p
                                className="mb-4 pb-2 appear-animation"
                                data-appear-animation="fadeInRightShorter"
                                data-appear-animation-delay="400"
                            >
                                Cras a elit sit amet leo accumsan volutpat.
                                Suspendisse hendrerit vehicula leo, vel
                                efficitur felis ultrices non. Integer aliquet.
                            </p>
                            <div
                                className="accordion accordion-sm appear-animation"
                                data-appear-animation="fadeInRightShorter"
                                data-appear-animation-delay="500"
                                id="accordionServices"
                            >
                                <ServicesListing services={servicesEdges} />

                                {/* <div className="border-radius mb-1 border-0 card-accordion-our-services-container">
                                    <div className="card-header py-2 bg-color-quaternary">
                                        <h4 className="card-title m-0">
                                            <a
                                                className="accordion-toggle text-color-tertiary font-weight-semibold"
                                                data-bs-toggle="collapse"
                                                data-bs-parent="#accordionServices"
                                                href="#collapse3One"
                                            >
                                                Izvedba građevinskih radova
                                            </a>
                                        </h4>
                                    </div>
                                    <div
                                        id="collapse3One"
                                        className="collapse card-accordion-our-services show"
                                    >
                                        <div className="card-body">
                                            <p className="mb-0">
                                                Adaptacija kuće, stana, pomoćnih
                                                objekata, garaža, potkrovlja,
                                                poslovnog, ugostiteljskog ili
                                                bilo kojeg prostora s bilo kojom
                                                namjenom. Vrhunski izvedena
                                                upravo po vašoj želji ili
                                                zamisli: atraktivno i
                                                kvalitetno.
                                            </p>
                                            <a
                                                href="demo-business-consulting-2-services.html"
                                                className="font-weight-bold text-uppercase text-decoration-none d-block mt-3"
                                            >
                                                read more +
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-radius mb-1 border-0 card-accordion-our-services-container">
                                    <div className="card-header py-2 bg-color-quaternary">
                                        <h4 className="card-title m-0">
                                            <a
                                                className="accordion-toggle text-color-tertiary font-weight-semibold"
                                                data-bs-toggle="collapse"
                                                data-bs-parent="#accordionServices"
                                                href="#collapse3Two"
                                            >
                                                Stručni nadzor građenja
                                            </a>
                                        </h4>
                                    </div>
                                    <div
                                        id="collapse3Two"
                                        className="collapse card-accordion-our-services"
                                    >
                                        <div className="card-body">
                                            <p className="mb-0">
                                                Obavljamo poslove kompletnog
                                                stručnog nadzora nad kvalitetom
                                                izvedbe građevinskih,
                                                elektroinstalaterskih i
                                                strojarskih radova u tijeku
                                                izgradnje temeljem ugovornih
                                                uvjeta, tehničkih propisa i
                                                uzanci struke - uz aktivno
                                                prisustvo na gradilištu.
                                            </p>
                                            <a
                                                href="demo-business-consulting-2-services.html"
                                                className="font-weight-bold text-uppercase text-decoration-none d-block mt-3"
                                            >
                                                read more +
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="border-radius mb-1 border-0 card-accordion-our-services-container">
                                    <div className="card-header py-2 bg-color-quaternary">
                                        <h4 className="card-title m-0">
                                            <a
                                                className="accordion-toggle text-color-tertiary font-weight-semibold"
                                                data-bs-toggle="collapse"
                                                data-bs-parent="#accordionServices"
                                                href="#collapse3Three"
                                            >
                                                Inženjering
                                            </a>
                                        </h4>
                                    </div>
                                    <div
                                        id="collapse3Three"
                                        className="collapse card-accordion-our-services"
                                    >
                                        <div className="card-body">
                                            <p className="mb-0">
                                                Svojim klijentima nudimo
                                                inženjerske usluge pisanje
                                                stručnih mišljenja, kontrolu
                                                troškovnika, izradu ponuda,
                                                izradu troškovnika za projekte
                                                sanacija, stručno pisanje izjava
                                                izvođača o obavljenim radovima i
                                                uvjetima održavanja građevine,
                                                kompletiranje dokumentacije za
                                                tehnički pregled građevine,
                                                izradu i vođenje građevinske
                                                knjige
                                            </p>
                                            <a
                                                href="demo-business-consulting-2-services.html"
                                                className="font-weight-bold text-uppercase text-decoration-none d-block mt-3"
                                            >
                                                read more +
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-radius mb-1 border-0 card-accordion-our-services-container">
                                    <div className="card-header py-2 bg-color-quaternary">
                                        <h4 className="card-title m-0">
                                            <a
                                                className="accordion-toggle text-color-tertiary font-weight-semibold"
                                                data-bs-toggle="collapse"
                                                data-bs-parent="#accordionServices"
                                                href="#collapse3Four"
                                            >
                                                Projektiranje
                                            </a>
                                        </h4>
                                    </div>
                                    <div
                                        id="collapse3Four"
                                        className="collapse card-accordion-our-services"
                                    >
                                        <div className="card-body">
                                            <p className="mb-0">
                                                Obavljamo kompletnu uslugu
                                                poslova arhitektonskog
                                                projektiranja građevina koja se
                                                sastoji od izrade idejnih,
                                                glavnih, izvedbenih projekata,
                                                projekata izvedenog stanja, te
                                                ishođenje potrebnih dozvola. U
                                                sklopu izrade projekta
                                                savjetujemo investitora u
                                                pogledu odabira tehnički
                                                optimalnih i ekonomski
                                                opravdanih tehničkih sustava.
                                            </p>
                                            <a
                                                href="demo-business-consulting-2-services.html"
                                                className="font-weight-bold text-uppercase text-decoration-none d-block mt-3"
                                            >
                                                read more +
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-radius mb-1 border-0 card-accordion-our-services-container">
                                    <div className="card-header py-2 bg-color-quaternary">
                                        <h4 className="card-title m-0">
                                            <a
                                                className="accordion-toggle text-color-tertiary font-weight-semibold"
                                                data-bs-toggle="collapse"
                                                data-bs-parent="#accordionServices"
                                                href="#collapse3Five"
                                            >
                                                Izrada energetskih certifikata
                                            </a>
                                        </h4>
                                    </div>
                                    <div
                                        id="collapse3Five"
                                        className="collapse card-accordion-our-services"
                                    >
                                        <div className="card-body">
                                            <p className="mb-0">
                                                Provođenje energetskih pregleda
                                                i energetsko certificiranje
                                                zgrada koji se sastoji od
                                                pregleda dostupne dokumentacije,
                                                vizualnog pregleda zgrade te
                                                izrade izvješća prema
                                                Metodologiji.
                                            </p>
                                            <a
                                                href="demo-business-consulting-2-services.html"
                                                className="font-weight-bold text-uppercase text-decoration-none d-block mt-3"
                                            >
                                                read more +
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-radius mb-1 border-0 card-accordion-our-services-container">
                                    <div className="card-header py-2 bg-color-quaternary">
                                        <h4 className="card-title m-0">
                                            <a
                                                className="accordion-toggle text-color-tertiary font-weight-semibold"
                                                data-bs-toggle="collapse"
                                                data-bs-parent="#accordionServices"
                                                href="#collapse3Six"
                                            >
                                                Ispitivanje zrakopropusnosti
                                                (Blower Door test)
                                            </a>
                                        </h4>
                                    </div>
                                    <div
                                        id="collapse3Six"
                                        className="collapse card-accordion-our-services"
                                    >
                                        <div className="card-body">
                                            <p className="mb-0">
                                                Blower Door je metoda
                                                ispitivanja zrakopropusnosti
                                                objekta gdje se mogu locirati
                                                dijelovi gdje Vaš objekt
                                                nepotrebno gubi energiju. Ovim
                                                testom lako otkrivamo da li je
                                                Vaš objekt adekvatno
                                                “zabrtvljen” i da li je samim
                                                time energetski učinkovit. U
                                                kombinaciji sa infracrvenom
                                                kamerom, možemo detektirati
                                                mjesta gdje energija odlazi i
                                                ponuditi Vam razne vrste
                                                rješenja.
                                            </p>
                                            <a
                                                href="demo-business-consulting-2-services.html"
                                                className="font-weight-bold text-uppercase text-decoration-none d-block mt-3"
                                            >
                                                read more +
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="demo-business-consulting-2-services.html"
                                className="btn btn-primary custom-btn text-center text-uppercase text-decoration-none border-0 py-0 px-5 font-weight-semibold mt-4 appear-animation"
                                data-appear-animation="fadeInRightShorter"
                                data-appear-animation-delay="600"
                            >
                                SAZNAJTE VIŠE
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="coaching-consulting d-flex p-relative bg-color-light pt-3 pb-3 pt-lg-5 pb-lg-4">
                <div className="container">
                    <div className="row justify-content-end py-5">
                        <div className="col-lg-6">
                            <p
                                className="text-uppercase font-weight-semibold mb-1 text-color-primary appear-animation"
                                data-appear-animation="fadeInRightShorter"
                                data-appear-animation-delay="100"
                            >
                                <span className="line-pre-title bg-color-primary"></span>
                                coaching and consulting
                            </p>
                            <h2
                                className="text-color-secondary font-weight-bold text-capitalize mb-4 custom-letter-spacing-2 custom-text-1 appear-animation"
                                data-appear-animation="fadeInRightShorter"
                                data-appear-animation-delay="200"
                            >
                                Experienced Team
                            </h2>
                            <p
                                className="font-weight-semibold mb-4 appear-animation"
                                data-appear-animation="fadeInRightShorter"
                                data-appear-animation-delay="300"
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Cras a elit sit amet leo
                                accumsan volutpat. Suspendisse hendrerit
                                vehicula leo, vel efficitur felis ultrices non.
                                Integer aliquet ullamcorper dolor, quis
                                sollicitudin.
                            </p>
                            <p
                                className="mb-4 pb-2 appear-animation"
                                data-appear-animation="fadeInRightShorter"
                                data-appear-animation-delay="400"
                            >
                                Cras a elit sit amet leo accumsan volutpat.
                                Suspendisse hendrerit vehicula leo, vel
                                efficitur felis ultrices non. Integer aliquet
                                ullamcorper dolor, quis sollicitudin.
                            </p>
                            <div
                                className="d-flex align-items-center justify-content-start appear-animation"
                                data-appear-animation="fadeIn"
                                data-appear-animation-delay="600"
                            >
                                <div className="circular-bar custom-circular-bar m-0">
                                    <div
                                        className="circular-bar-chart"
                                        data-percent="89"
                                        data-plugin-options="{'barColor': '#e8465f'}"
                                    >
                                        <strong className="text-5 text-color-tertiary">
                                            89%
                                        </strong>
                                    </div>
                                </div>
                                <h4 className="font-weight-bold text-color-tertiary m-0 ms-3">
                                    Successful cases
                                    <br />
                                    in 15 years.
                                </h4>
                            </div>
                        </div>
                        <div className="col-lg-6 col-coaching-consulting-imgs p-relative">
                            <div
                                className="card border-radius-0 box-shadow-1 border-0 p-3 appear-animation"
                                data-appear-animation="fadeIn"
                                data-appear-animation-delay="300"
                            >
                                <img
                                    src={coaching_1}
                                    className="img-fluid border-radius-0"
                                    alt=""
                                />
                            </div>
                            <div
                                className="card border-radius-0 box-shadow-1 border-0 p-3 appear-animation"
                                data-appear-animation="fadeIn"
                                data-appear-animation-delay="300"
                            >
                                <img
                                    src={coaching_2}
                                    className="img-fluid border-radius-0"
                                    alt=""
                                />
                            </div>
                            <div
                                className="card border-radius-0 box-shadow-1 border-0 p-3 appear-animation"
                                data-appear-animation="fadeIn"
                                data-appear-animation-delay="300"
                            >
                                <img
                                    src={coaching_3}
                                    className="img-fluid border-radius-0"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="real-word-stories bg-color-quaternary overflow-hidden p-relative pb-4">
                <div className="container py-xl-5">
                    <div className="row justify-content-between align-items-center pt-5 py-xl-5 mt-3">
                        <div className="col-xl-6 mb-5 pb-5 mb-xl-0 pb-xl-0">
                            <div
                                className="appear-animation"
                                data-appear-animation="fadeIn"
                                data-appear-animation-delay="100"
                            >
                                <div
                                    className="owl-carousel owl-theme m-0"
                                    data-plugin-options="{'items': 1, 'autoplay': false, 'animateOut': 'fadeOut', 'autoHeight': true}"
                                >
                                    <div className="custom-testimonial-container bg-color-light">
                                        <div className="testimonial custom-testimonial testimonial-style-2 mb-0">
                                            <div className="d-none d-sm-flex align-items-center justify-content-center custom-testimonial-right bg-color-light p-absolute z-index-1">
                                                <img
                                                    src={case_logo_1}
                                                    alt="Bullseye"
                                                />
                                                <a
                                                    href="demo-business-consulting-2-cases-detail.html"
                                                    className="d-block btn btn-primary custom-button-testimonial-right text-center text-uppercase text-decoration-none border-0 p-0 font-weight-semibold p-absolute"
                                                >
                                                    read more
                                                </a>
                                            </div>
                                            <blockquote className="px-0 pb-5">
                                                <h4 className="text-color-secondary font-weight-bold text-start">
                                                    Bullseye Case
                                                </h4>
                                                <p className="mb-0 text-start text-3">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Sed eget risus porta,
                                                    tincidunt turpis at,
                                                    interdum tortor. Suspendisse
                                                    potenti.
                                                    <a
                                                        href="demo-business-consulting-2-cases-detail.html"
                                                        className="font-weight-bold text-uppercase text-decoration-none d-block d-sm-none mt-3"
                                                    >
                                                        read more +
                                                    </a>
                                                </p>
                                            </blockquote>
                                            <div className="testimonial-arrow-down"></div>
                                            <div className="testimonial-author d-flex flex-row justify-content-start align-items-center">
                                                <img
                                                    src={avatar_3}
                                                    className="img-fluid rounded-circle m-0 me-3"
                                                    alt=""
                                                />
                                                <p>
                                                    <strong className="font-weight-extra-bold text-start text-color-secondary mb-1">
                                                        John Smith
                                                    </strong>
                                                    <span className="text-uppercase text-start">
                                                        Manager
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-testimonial-container bg-color-light">
                                        <div className="testimonial custom-testimonial testimonial-style-2 mb-0">
                                            <div className="d-none d-sm-flex align-items-center justify-content-center custom-testimonial-right bg-color-light p-absolute z-index-1">
                                                <img
                                                    src={case_logo_2}
                                                    alt="Bullseye"
                                                />
                                                <a
                                                    href="demo-business-consulting-2-cases-detail.html"
                                                    className="d-block btn btn-primary custom-button-testimonial-right text-center text-uppercase text-decoration-none border-0 p-0 font-weight-semibold p-absolute"
                                                >
                                                    read more
                                                </a>
                                            </div>
                                            <blockquote className="px-0 pb-5">
                                                <h4 className="text-color-secondary font-weight-bold text-start">
                                                    Wall Paint Shop Case
                                                </h4>
                                                <p className="mb-0 text-start text-3">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Sed eget porta, tincidunt
                                                    turpis at, interdum tortor.
                                                    Suspendisse potenti.
                                                </p>
                                            </blockquote>
                                            <div className="testimonial-arrow-down"></div>
                                            <div className="testimonial-author d-flex flex-row justify-content-start align-items-center">
                                                <img
                                                    src={avatar_2}
                                                    className="img-fluid rounded-circle m-0 me-3"
                                                    alt=""
                                                />
                                                <p>
                                                    <strong className="font-weight-extra-bold text-start text-color-secondary mb-1">
                                                        John Doe
                                                    </strong>
                                                    <span className="text-uppercase text-start">
                                                        Manager
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-testimonial-container bg-color-light">
                                        <div className="testimonial custom-testimonial testimonial-style-2 mb-0">
                                            <div className="d-none d-sm-flex align-items-center justify-content-center custom-testimonial-right bg-color-light p-absolute z-index-1">
                                                <img
                                                    src={case_logo_3}
                                                    alt="Bullseye"
                                                />
                                                <a
                                                    href="demo-business-consulting-2-cases-detail.html"
                                                    className="d-block btn btn-primary custom-button-testimonial-right text-center text-uppercase text-decoration-none border-0 p-0 font-weight-semibold p-absolute"
                                                >
                                                    read more
                                                </a>
                                            </div>
                                            <blockquote className="px-0 pb-5">
                                                <h4 className="text-color-secondary font-weight-bold text-start">
                                                    Go Gold Golden Case
                                                </h4>
                                                <p className="mb-0 text-start text-3">
                                                    Lorem ipsum dolor sit amet,
                                                    adipiscing elit. Sed eget
                                                    porta, tincidunt turpis at,
                                                    interdum tortor. Suspendisse
                                                    potenti.
                                                </p>
                                            </blockquote>
                                            <div className="testimonial-arrow-down"></div>
                                            <div className="testimonial-author d-flex flex-row justify-content-start align-items-center">
                                                <img
                                                    src={avatar_3}
                                                    className="img-fluid rounded-circle m-0 me-3"
                                                    alt=""
                                                />
                                                <p>
                                                    <strong className="font-weight-extra-bold text-start text-color-secondary mb-1">
                                                        Bob Smith
                                                    </strong>
                                                    <span className="text-uppercase text-start">
                                                        Manager
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 mb-5 mb-xl-0">
                            <p
                                className="text-uppercase font-weight-semibold mb-1 text-color-primary appear-animation"
                                data-appear-animation="fadeInRightShorter"
                                data-appear-animation-delay="300"
                            >
                                <span className="line-pre-title bg-color-primary"></span>
                                real world stories
                            </p>
                            <h2
                                className="text-color-secondary font-weight-bold text-capitalize mb-4 custom-letter-spacing-2 custom-text-1 appear-animation"
                                data-appear-animation="fadeInRightShorter"
                                data-appear-animation-delay="400"
                            >
                                Sucessful Cases
                            </h2>
                            <p
                                className="font-weight-semibold mb-4 appear-animation"
                                data-appear-animation="fadeInRightShorter"
                                data-appear-animation-delay="500"
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Cras a elit sit amet leo
                                accumsan volutpat.
                            </p>
                            <p
                                className="mb-4 pb-2 appear-animation"
                                data-appear-animation="fadeInRightShorter"
                                data-appear-animation-delay="600"
                            >
                                Cras a elit sit amet leo accumsan volutpat.
                                Suspendisse hendrerit vehicula leo, vel
                                efficitur felis ultrices non. Integer aliquet
                                ullamcorper dolor, quis sollicitudin.
                            </p>
                            <div className="counters custom-counters d-flex">
                                <div
                                    className="counter counter-primary appear-animation"
                                    data-appear-animation="fadeInUpShorter"
                                    data-appear-animation-delay="1000"
                                >
                                    <strong data-to="240" data-append="+">
                                        0
                                    </strong>
                                    <label className="text-color-primary font-weight-bold">
                                        Satisfied Clients
                                    </label>
                                </div>
                                <div
                                    className="counter counter-primary appear-animation"
                                    data-appear-animation="fadeInUpShorter"
                                    data-appear-animation-delay="1200"
                                >
                                    <strong data-to="2000" data-append="+">
                                        0
                                    </strong>
                                    <label className="text-color-primary font-weight-bold">
                                        Successfull Cases
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="are-you-looking-for bg-color-secondary">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-5">
                            <p
                                className="text-uppercase font-weight-semibold mb-1 text-color-light appear-animation"
                                data-appear-animation="fadeInRightShorter"
                                data-appear-animation-delay="100"
                            >
                                <span
                                    className="line-pre-title bg-color-primary appear-animation"
                                    data-appear-animation="fadeInRightShorter"
                                    data-appear-animation-delay="200"
                                ></span>
                                Are you looking for a
                            </p>
                            <h2
                                className="text-color-light font-weight-bold text-capitalize mb-1 letter-spacing-08 font-size-32 appear-animation"
                                data-appear-animation="fadeInRightShorter"
                                data-appear-animation-delay="200"
                            >
                                Business Plan Consultant?
                            </h2>
                            <p
                                className="font-weight-semibold text-color-light mb-0 appear-animation"
                                data-appear-animation="fadeInRightShorter"
                                data-appear-animation-delay="300"
                            >
                                Schedule your company strategy session right
                                now!
                            </p>
                        </div>
                        <div className="col-xl-6 d-flex align-items-start align-items-sm-center justify-content-start justify-content-xl-end mt-4 mt-xl-0 flex-column flex-sm-row">
                            <span
                                className="are-you-looking-for-phone py-2 d-flex align-items-center text-color-light font-weight-semibold text-uppercase text-4 mb-4 mb-md-0 appear-animation"
                                data-appear-animation="fadeInLeftShorter"
                                data-appear-animation-delay="500"
                            >
                                <span>
                                    <img
                                        width="18"
                                        height="25"
                                        src={phone}
                                        alt="Phone"
                                    />
                                </span>
                                <a
                                    className="text-color-light text-decoration-none"
                                    href="tel:123-456-7890"
                                >
                                    (800) 123-4567
                                </a>
                            </span>
                            <a
                                href="demo-business-consulting-2-contact-us.html"
                                className="btn btn-primary custom-btn text-center text-uppercase text-decoration-none border-0 py-0 px-5 font-weight-semibold appear-animation"
                                data-appear-animation="fadeInLeftShorter"
                                data-appear-animation-delay="600"
                            >
                                free initial consultation
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-blog">
                <div className="container">
                    <div className="row mt-3 pt-5">
                        <div className="col">
                            <p
                                className="text-uppercase font-weight-semibold mb-1 text-color-primary appear-animation"
                                data-appear-animation="fadeInRightShorter"
                                data-appear-animation-delay="100"
                            >
                                <span className="line-pre-title bg-color-primary"></span>
                                our blog
                            </p>
                            <h2
                                className="text-color-secondary font-weight-bold text-capitalize mb-4 custom-letter-spacing-2 custom-text-1 appear-animation"
                                data-appear-animation="fadeInRightShorter"
                                data-appear-animation-delay="200"
                            >
                                News and Articles
                            </h2>
                        </div>
                    </div>
                    <div className="row mb-3 pb-5">
                        <div className="col">
                            <div className="row">
                                <div className="col-lg-6 mb-4 mb-lg-0">
                                    <article>
                                        <div
                                            className="card border-0 border-radius-0 box-shadow-1 appear-animation"
                                            data-appear-animation="fadeInUpShorter"
                                            data-appear-animation-delay="500"
                                        >
                                            <div className="card-body p-4 z-index-1">
                                                <a href="demo-business-consulting-2-blog-post.html">
                                                    <img
                                                        className="card-img-top border-radius-0"
                                                        src={blog_1}
                                                        alt="Card Image"
                                                    />
                                                </a>
                                                <p className="text-uppercase text-1 mb-3 pt-1 text-color-default">
                                                    <time
                                                        pubdate=""
                                                        dateTime="2023-01-10"
                                                    >
                                                        10 Jan 2023
                                                    </time>{" "}
                                                    <span className="opacity-3 d-inline-block px-2">
                                                        |
                                                    </span>{" "}
                                                    3 Comments{" "}
                                                    <span className="opacity-3 d-inline-block px-2">
                                                        |
                                                    </span>{" "}
                                                    John Doe
                                                </p>
                                                <div className="card-body p-0">
                                                    <h4 className="card-title mb-3 text-5 font-weight-bold">
                                                        <a
                                                            className="text-color-secondary"
                                                            href="demo-business-consulting-2-blog-post.html"
                                                        >
                                                            An Interview with
                                                            John Doe
                                                        </a>
                                                    </h4>
                                                    <p className="card-text mb-3">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit. Nunc
                                                        viverra lorem ipsum erat
                                                        orci, ac auctor lacus
                                                        tincidunt ut...
                                                    </p>
                                                    <a
                                                        href="demo-business-consulting-2-blog-post.html"
                                                        className="font-weight-bold text-uppercase text-decoration-none d-block mt-3"
                                                    >
                                                        Read More +
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-lg-6">
                                    <article>
                                        <div
                                            className="card border-0 border-radius-0 box-shadow-1 appear-animation"
                                            data-appear-animation="fadeInUpShorter"
                                            data-appear-animation-delay="700"
                                        >
                                            <div className="card-body p-4 z-index-1">
                                                <a href="demo-business-consulting-2-blog-post.html">
                                                    <img
                                                        className="card-img-top border-radius-0"
                                                        src={blog_2}
                                                        alt="Card Image"
                                                    />
                                                </a>
                                                <p className="text-uppercase text-1 mb-3 pt-1 text-color-default">
                                                    <time
                                                        pubdate=""
                                                        dateTime="2023-01-10"
                                                    >
                                                        10 Jan 2023
                                                    </time>{" "}
                                                    <span className="opacity-3 d-inline-block px-2">
                                                        |
                                                    </span>{" "}
                                                    3 Comments{" "}
                                                    <span className="opacity-3 d-inline-block px-2">
                                                        |
                                                    </span>{" "}
                                                    John Doe
                                                </p>
                                                <div className="card-body p-0">
                                                    <h4 className="card-title mb-3 text-5 font-weight-bold">
                                                        <a
                                                            className="text-color-secondary"
                                                            href="demo-business-consulting-2-blog-post.html"
                                                        >
                                                            How to Grow your
                                                            Business
                                                        </a>
                                                    </h4>
                                                    <p className="card-text mb-3">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit. Nunc
                                                        viverra lorem ipsum erat
                                                        orci, ac auctor lacus
                                                        tincidunt ut...
                                                    </p>
                                                    <a
                                                        href="demo-business-consulting-2-blog-post.html"
                                                        className="font-weight-bold text-uppercase text-decoration-none d-block mt-3"
                                                    >
                                                        Read More +
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
);
