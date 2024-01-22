import React from "react";
import { graphql, Link } from "gatsby";

import SEO from "../../components/SEO";
import Layout from "../../components/layout";

import bg_1 from "../../images/img/demos/business-consulting-2/bg/bg-1.jpg";
import strategic from "../../images/img/demos/business-consulting-2/icons/strategic.png";
import phone from "../../images/img/demos/business-consulting-2/icons/phone.svg";

// import PostListing from '../components/PostListing'
{
    /* <Link to={"/"} className="nav__link"></Link> */
}

// {cover && (
//     <div className="service__image">
//         <div
//             className="image"
//             style={{ paddingBottom: "71.42%" }}
//         >
//             <im/g
//                 className="image__item"
//                 src={`/${cover}`}
//                 width="210"
//                 height="150"
//                 alt=""
//             />
//         </div>
//     </div>
// )}

export default ({
    pageContext: { slug },
    location: { pathname },
    data: {
        service,
        service: {
            html,
            frontmatter: {
                cover,
                heading,
                title,
                description,
                date,
                updated,
                author,
            },
        },
        services: { edges },
    },
}) => {
    const serviceNode = service;
    const services = edges;
    return (
        <Layout className="service" pathname={pathname} hideHeader={true}>
            <SEO servicePath={slug} serviceNode={serviceNode} serviceSEO />

            <main className="service">
                {/* <h1
                    className="service__title"
                    dangerouslySetInnerHTML={{ __html: heading || title }}
                ></h1>

                <div className="service__content richtext">
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </div> */}
                <div role="main" className="main">
                    <section className="page-header page-header-modern custom-page-header bg-color-quaternary">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
                                    <h1
                                        className="font-weight-bold text-9 text-color-secondary appear-animation"
                                        data-appear-animation="fadeInRightShorter"
                                        data-appear-animation-delay="100"
                                    >
                                        {title}
                                    </h1>
                                </div>
                                <div className="col-md-4 order-1 order-md-2 align-self-center">
                                    <ul
                                        className="breadcrumb d-block text-md-end appear-animation"
                                        data-appear-animation="fadeInLeftShorter"
                                        data-appear-animation-delay="300"
                                    >
                                        <li>
                                            <a href="/">Naslovna</a>
                                        </li>
                                        <li className="active">Usluge</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="container py-5">
                        <div className="row align-items-center">
                            <div className="col-lg-9">
                                <p
                                    className="text-4 line-height-9 appear-animation"
                                    data-appear-animation="fadeIn"
                                    data-appear-animation-delay="100"
                                >
                                    {description}
                                </p>
                                <p
                                    className="m-0 p-0 appear-animation"
                                    data-appear-animation="fadeIn"
                                    data-appear-animation-delay="300"
                                >
                                    {description}
                                </p>
                            </div>
                            <div className="col-lg-3 pt-4 pt-lg-0">
                                <div className="card border-radius-0 box-shadow-1 border-0 me-lg-3 p-3 mb-3 mb-lg-0">
                                    <img
                                        src={bg_1}
                                        className="img-fluid border-radius-0"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col py-5">
                                <hr className="m-0" />
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col">
                                <p
                                    className="text-uppercase font-weight-semibold mb-1 text-color-primary appear-animation"
                                    data-appear-animation="fadeInRightShorter"
                                    data-appear-animation-delay="100"
                                >
                                    <span className="line-pre-title bg-color-primary"></span>
                                    Our Services
                                </p>
                                <h2
                                    className="text-color-secondary font-weight-bold text-capitalize mb-4 custom-letter-spacing-2 custom-text-1 appear-animation"
                                    data-appear-animation="fadeInRightShorter"
                                    data-appear-animation-delay="200"
                                >
                                    What We Do
                                </h2>

                                <div
                                    className="accordion accordion-sm mb-3 appear-animation"
                                    data-appear-animation="fadeInRightShorter"
                                    data-appear-animation-delay="500"
                                    id="accordionServices"
                                >
                                    <div className="border-radius mb-1 border-0 card-accordion-our-services-container">
                                        <div className="card-header py-2 bg-color-quaternary">
                                            <h4 className="card-title m-0">
                                                <a
                                                    className="accordion-toggle text-color-tertiary font-weight-semibold"
                                                    data-bs-toggle="collapse"
                                                    data-bs-parent="#accordionServices"
                                                    href="#collapse3One"
                                                >
                                                    Management Consulting
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapse3One"
                                            className="collapse card-accordion-our-services show"
                                        >
                                            <div className="card-body">
                                                <p className="font-weight-semibold mb-4">
                                                    Ut consectetur sed velit sed
                                                    dapibus. Nullam consectetur
                                                    auctor condimentum. Morbi
                                                    posuere nisi turpis,
                                                    fringilla pulvinar dui
                                                    volutpat eget. Integer
                                                    tempor, turpis nec
                                                    vestibulum rutrum, odio mi
                                                    iaculis enim, a iaculis leo
                                                    mi non erat. Pellentesque ac
                                                    iaculis felis. Phasellus at
                                                    augue a purus porttitor
                                                    pulvinar.{" "}
                                                </p>
                                                <p className="mb-4 pb-2">
                                                    Integer cursus ex enim,
                                                    vitae faucibus nisi ultrices
                                                    ac. Pellentesque non
                                                    tristique nunc. Fusce
                                                    consectetur facilisis odio
                                                    ut suscipit. Fusce ligula
                                                    magna, accumsan et massa ac,
                                                    rutrum elementum turpis.
                                                    Suspendisse porta mattis
                                                    massa vel ullamcorper. In id
                                                    ligula quam. Aliquam ac odio
                                                    ac eros gravida congue. Ut
                                                    eu molestie tortor. In ut
                                                    ullamcorper mauris, at
                                                    volutpat dui. Pellentesque
                                                    habitant morbi tristique
                                                    senectus et netus et
                                                    malesuada fames ac turpis
                                                    egestas. Vestibulum at
                                                    mauris quis mi cursus
                                                    consequat. Integer velit
                                                    metus, scelerisque sed est
                                                    vel, dapibus interdum quam.
                                                </p>

                                                <div className="row no-gutters">
                                                    <div className="col-md-6">
                                                        <img
                                                            src={strategic}
                                                            alt="Strategic Planning"
                                                            className="float-start me-4 mb-4"
                                                        />
                                                        <p className="mb-4 pb-2">
                                                            Integer cursus ex
                                                            enim, vitae faucibus
                                                            nisi ultrices ac.
                                                            Pellentesque non
                                                            tristique nunc.
                                                            Fusce consectetur
                                                            facilisis odio ut
                                                            suscipit. Fusce
                                                            ligula magna,
                                                            accumsan et massa
                                                            ac, rutrum elementum
                                                            turpis. Suspendisse
                                                            porta mattis massa
                                                            vel ullamcorper. In
                                                            id ligula quam.
                                                            Aliquam ac odio ac
                                                            eros gravida congue.
                                                            Ut eu molestie
                                                            tortor. In ut
                                                            ullamcorper mauris,
                                                            at volutpat dui.
                                                            Pellentesque
                                                            habitant morbi
                                                            tristique senectus
                                                            et netus et
                                                            malesuada fames ac
                                                            turpis egestas.
                                                        </p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul className="list list-icons list-primary ms-4">
                                                            <li
                                                                className="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay="0"
                                                            >
                                                                <i className="fas fa-check"></i>{" "}
                                                                Fusce sit amet
                                                                orci quis arcu
                                                                vestibulum.
                                                            </li>
                                                            <li
                                                                className="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay="300"
                                                            >
                                                                <i className="fas fa-check"></i>{" "}
                                                                Fusce sit amet
                                                                orci quis arcu
                                                                vestibulum
                                                                stibulum.
                                                            </li>
                                                            <li
                                                                className="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay="600"
                                                            >
                                                                <i className="fas fa-check"></i>{" "}
                                                                Fusce sit amet
                                                                orci q
                                                                vestibulum
                                                                vestibulum.
                                                            </li>
                                                            <li
                                                                className="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay="900"
                                                            >
                                                                <i className="fas fa-check"></i>{" "}
                                                                Fusce sit amet
                                                                orci qtibulum.
                                                            </li>
                                                            <li
                                                                className="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay="1200"
                                                            >
                                                                <i className="fas fa-check"></i>{" "}
                                                                Fusce sit amet
                                                                orci quis arcu
                                                                vestibulum
                                                                vestibulum.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
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
                                                    Business Coaching
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapse3Two"
                                            className="collapse card-accordion-our-services"
                                        >
                                            <div className="card-body">
                                                <p className="font-weight-semibold mb-4">
                                                    Ut consectetur sed velit sed
                                                    dapibus. Nullam consectetur
                                                    auctor condimentum. Morbi
                                                    posuere nisi turpis,
                                                    fringilla pulvinar dui
                                                    volutpat eget. Integer
                                                    tempor, turpis nec
                                                    vestibulum rutrum, odio mi
                                                    iaculis enim, a iaculis leo
                                                    mi non erat. Pellentesque ac
                                                    iaculis felis. Phasellus at
                                                    augue a purus porttitor
                                                    pulvinar.{" "}
                                                </p>
                                                <p className="mb-4 pb-2">
                                                    Integer cursus ex enim,
                                                    vitae faucibus nisi ultrices
                                                    ac. Pellentesque non
                                                    tristique nunc. Fusce
                                                    consectetur facilisis odio
                                                    ut suscipit. Fusce ligula
                                                    magna, accumsan et massa ac,
                                                    rutrum elementum turpis.
                                                    Suspendisse porta mattis
                                                    massa vel ullamcorper. In id
                                                    ligula quam. Aliquam ac odio
                                                    ac eros gravida congue. Ut
                                                    eu molestie tortor. In ut
                                                    ullamcorper mauris, at
                                                    volutpat dui. Pellentesque
                                                    habitant morbi tristique
                                                    senectus et netus et
                                                    malesuada fames ac turpis
                                                    egestas. Vestibulum at
                                                    mauris quis mi cursus
                                                    consequat. Integer velit
                                                    metus, scelerisque sed est
                                                    vel, dapibus interdum quam.
                                                </p>

                                                <div className="row no-gutters">
                                                    <div className="col-md-6">
                                                        <img
                                                            src={strategic}
                                                            alt="Strategic Planning"
                                                            className="float-start me-4 mb-4"
                                                        />
                                                        <p className="mb-4 pb-2">
                                                            Integer cursus ex
                                                            enim, vitae faucibus
                                                            nisi ultrices ac.
                                                            Pellentesque non
                                                            tristique nunc.
                                                            Fusce consectetur
                                                            facilisis odio ut
                                                            suscipit. Fusce
                                                            ligula magna,
                                                            accumsan et massa
                                                            ac, rutrum elementum
                                                            turpis. Suspendisse
                                                            porta mattis massa
                                                            vel ullamcorper. In
                                                            id ligula quam.
                                                            Aliquam ac odio ac
                                                            eros gravida congue.
                                                            Ut eu molestie
                                                            tortor. In ut
                                                            ullamcorper mauris,
                                                            at volutpat dui.
                                                            Pellentesque
                                                            habitant morbi
                                                            tristique senectus
                                                            et netus et
                                                            malesuada fames ac
                                                            turpis egestas.
                                                        </p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul className="list list-icons list-primary ms-4">
                                                            <li
                                                                className="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay="0"
                                                            >
                                                                <i className="fas fa-check"></i>{" "}
                                                                Fusce sit amet
                                                                orci quis arcu
                                                                vestibulum.
                                                            </li>
                                                            <li
                                                                className="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay="300"
                                                            >
                                                                <i className="fas fa-check"></i>{" "}
                                                                Fusce sit amet
                                                                orci quis arcu
                                                                vestibulum
                                                                stibulum.
                                                            </li>
                                                            <li
                                                                className="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay="600"
                                                            >
                                                                <i className="fas fa-check"></i>{" "}
                                                                Fusce sit amet
                                                                orci q
                                                                vestibulum
                                                                vestibulum.
                                                            </li>
                                                            <li
                                                                className="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay="900"
                                                            >
                                                                <i className="fas fa-check"></i>{" "}
                                                                Fusce sit amet
                                                                orci qtibulum.
                                                            </li>
                                                            <li
                                                                className="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay="1200"
                                                            >
                                                                <i className="fas fa-check"></i>{" "}
                                                                Fusce sit amet
                                                                orci quis arcu
                                                                vestibulum
                                                                vestibulum.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
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
                                                    href="#collapse3Three"
                                                >
                                                    Performance Consulting and
                                                    Coaching
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapse3Three"
                                            className="collapse card-accordion-our-services"
                                        >
                                            <div className="card-body">
                                                <p className="font-weight-semibold mb-4">
                                                    Ut consectetur sed velit sed
                                                    dapibus. Nullam consectetur
                                                    auctor condimentum. Morbi
                                                    posuere nisi turpis,
                                                    fringilla pulvinar dui
                                                    volutpat eget. Integer
                                                    tempor, turpis nec
                                                    vestibulum rutrum, odio mi
                                                    iaculis enim, a iaculis leo
                                                    mi non erat. Pellentesque ac
                                                    iaculis felis. Phasellus at
                                                    augue a purus porttitor
                                                    pulvinar.{" "}
                                                </p>
                                                <p className="mb-4 pb-2">
                                                    Integer cursus ex enim,
                                                    vitae faucibus nisi ultrices
                                                    ac. Pellentesque non
                                                    tristique nunc. Fusce
                                                    consectetur facilisis odio
                                                    ut suscipit. Fusce ligula
                                                    magna, accumsan et massa ac,
                                                    rutrum elementum turpis.
                                                    Suspendisse porta mattis
                                                    massa vel ullamcorper. In id
                                                    ligula quam. Aliquam ac odio
                                                    ac eros gravida congue. Ut
                                                    eu molestie tortor. In ut
                                                    ullamcorper mauris, at
                                                    volutpat dui. Pellentesque
                                                    habitant morbi tristique
                                                    senectus et netus et
                                                    malesuada fames ac turpis
                                                    egestas. Vestibulum at
                                                    mauris quis mi cursus
                                                    consequat. Integer velit
                                                    metus, scelerisque sed est
                                                    vel, dapibus interdum quam.
                                                </p>

                                                <div className="row no-gutters">
                                                    <div className="col-md-6">
                                                        <img
                                                            src={strategic}
                                                            alt="Strategic Planning"
                                                            className="float-start me-4 mb-4"
                                                        />
                                                        <p className="mb-4 pb-2">
                                                            Integer cursus ex
                                                            enim, vitae faucibus
                                                            nisi ultrices ac.
                                                            Pellentesque non
                                                            tristique nunc.
                                                            Fusce consectetur
                                                            facilisis odio ut
                                                            suscipit. Fusce
                                                            ligula magna,
                                                            accumsan et massa
                                                            ac, rutrum elementum
                                                            turpis. Suspendisse
                                                            porta mattis massa
                                                            vel ullamcorper. In
                                                            id ligula quam.
                                                            Aliquam ac odio ac
                                                            eros gravida congue.
                                                            Ut eu molestie
                                                            tortor. In ut
                                                            ullamcorper mauris,
                                                            at volutpat dui.
                                                            Pellentesque
                                                            habitant morbi
                                                            tristique senectus
                                                            et netus et
                                                            malesuada fames ac
                                                            turpis egestas.
                                                        </p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul className="list list-icons list-primary ms-4">
                                                            <li
                                                                className="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay="0"
                                                            >
                                                                <i className="fas fa-check"></i>{" "}
                                                                Fusce sit amet
                                                                orci quis arcu
                                                                vestibulum.
                                                            </li>
                                                            <li
                                                                className="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay="300"
                                                            >
                                                                <i className="fas fa-check"></i>{" "}
                                                                Fusce sit amet
                                                                orci quis arcu
                                                                vestibulum
                                                                stibulum.
                                                            </li>
                                                            <li
                                                                className="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay="600"
                                                            >
                                                                <i className="fas fa-check"></i>{" "}
                                                                Fusce sit amet
                                                                orci q
                                                                vestibulum
                                                                vestibulum.
                                                            </li>
                                                            <li
                                                                className="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay="900"
                                                            >
                                                                <i className="fas fa-check"></i>{" "}
                                                                Fusce sit amet
                                                                orci qtibulum.
                                                            </li>
                                                            <li
                                                                className="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay="1200"
                                                            >
                                                                <i className="fas fa-check"></i>{" "}
                                                                Fusce sit amet
                                                                orci quis arcu
                                                                vestibulum
                                                                vestibulum.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
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
                                                    Strategy and Marketing
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapse3Four"
                                            className="collapse card-accordion-our-services"
                                        >
                                            <div className="card-body">
                                                <p className="font-weight-semibold mb-4">
                                                    Ut consectetur sed velit sed
                                                    dapibus. Nullam consectetur
                                                    auctor condimentum. Morbi
                                                    posuere nisi turpis,
                                                    fringilla pulvinar dui
                                                    volutpat eget. Integer
                                                    tempor, turpis nec
                                                    vestibulum rutrum, odio mi
                                                    iaculis enim, a iaculis leo
                                                    mi non erat. Pellentesque ac
                                                    iaculis felis. Phasellus at
                                                    augue a purus porttitor
                                                    pulvinar.{" "}
                                                </p>
                                                <p className="mb-4 pb-2">
                                                    Integer cursus ex enim,
                                                    vitae faucibus nisi ultrices
                                                    ac. Pellentesque non
                                                    tristique nunc. Fusce
                                                    consectetur facilisis odio
                                                    ut suscipit. Fusce ligula
                                                    magna, accumsan et massa ac,
                                                    rutrum elementum turpis.
                                                    Suspendisse porta mattis
                                                    massa vel ullamcorper. In id
                                                    ligula quam. Aliquam ac odio
                                                    ac eros gravida congue. Ut
                                                    eu molestie tortor. In ut
                                                    ullamcorper mauris, at
                                                    volutpat dui. Pellentesque
                                                    habitant morbi tristique
                                                    senectus et netus et
                                                    malesuada fames ac turpis
                                                    egestas. Vestibulum at
                                                    mauris quis mi cursus
                                                    consequat. Integer velit
                                                    metus, scelerisque sed est
                                                    vel, dapibus interdum quam.
                                                </p>

                                                <div className="row no-gutters">
                                                    <div className="col-md-6">
                                                        <img
                                                            src={strategic}
                                                            alt="Strategic Planning"
                                                            className="float-start me-4 mb-4"
                                                        />
                                                        <p className="mb-4 pb-2">
                                                            Integer cursus ex
                                                            enim, vitae faucibus
                                                            nisi ultrices ac.
                                                            Pellentesque non
                                                            tristique nunc.
                                                            Fusce consectetur
                                                            facilisis odio ut
                                                            suscipit. Fusce
                                                            ligula magna,
                                                            accumsan et massa
                                                            ac, rutrum elementum
                                                            turpis. Suspendisse
                                                            porta mattis massa
                                                            vel ullamcorper. In
                                                            id ligula quam.
                                                            Aliquam ac odio ac
                                                            eros gravida congue.
                                                            Ut eu molestie
                                                            tortor. In ut
                                                            ullamcorper mauris,
                                                            at volutpat dui.
                                                            Pellentesque
                                                            habitant morbi
                                                            tristique senectus
                                                            et netus et
                                                            malesuada fames ac
                                                            turpis egestas.
                                                        </p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul className="list list-icons list-primary ms-4">
                                                            <li
                                                                className="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay="0"
                                                            >
                                                                <i className="fas fa-check"></i>{" "}
                                                                Fusce sit amet
                                                                orci quis arcu
                                                                vestibulum.
                                                            </li>
                                                            <li
                                                                className="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay="300"
                                                            >
                                                                <i className="fas fa-check"></i>{" "}
                                                                Fusce sit amet
                                                                orci quis arcu
                                                                vestibulum
                                                                stibulum.
                                                            </li>
                                                            <li
                                                                className="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay="600"
                                                            >
                                                                <i className="fas fa-check"></i>{" "}
                                                                Fusce sit amet
                                                                orci q
                                                                vestibulum
                                                                vestibulum.
                                                            </li>
                                                            <li
                                                                className="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay="900"
                                                            >
                                                                <i className="fas fa-check"></i>{" "}
                                                                Fusce sit amet
                                                                orci qtibulum.
                                                            </li>
                                                            <li
                                                                className="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay="1200"
                                                            >
                                                                <i className="fas fa-check"></i>{" "}
                                                                Fusce sit amet
                                                                orci quis arcu
                                                                vestibulum
                                                                vestibulum.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
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
                                                    Service Benchmarking
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapse3Five"
                                            className="collapse card-accordion-our-services"
                                        >
                                            <div className="card-body">
                                                <p className="font-weight-semibold mb-4">
                                                    Ut consectetur sed velit sed
                                                    dapibus. Nullam consectetur
                                                    auctor condimentum. Morbi
                                                    posuere nisi turpis,
                                                    fringilla pulvinar dui
                                                    volutpat eget. Integer
                                                    tempor, turpis nec
                                                    vestibulum rutrum, odio mi
                                                    iaculis enim, a iaculis leo
                                                    mi non erat. Pellentesque ac
                                                    iaculis felis. Phasellus at
                                                    augue a purus porttitor
                                                    pulvinar.{" "}
                                                </p>
                                                <p className="mb-4 pb-2">
                                                    Integer cursus ex enim,
                                                    vitae faucibus nisi ultrices
                                                    ac. Pellentesque non
                                                    tristique nunc. Fusce
                                                    consectetur facilisis odio
                                                    ut suscipit. Fusce ligula
                                                    magna, accumsan et massa ac,
                                                    rutrum elementum turpis.
                                                    Suspendisse porta mattis
                                                    massa vel ullamcorper. In id
                                                    ligula quam. Aliquam ac odio
                                                    ac eros gravida congue. Ut
                                                    eu molestie tortor. In ut
                                                    ullamcorper mauris, at
                                                    volutpat dui. Pellentesque
                                                    habitant morbi tristique
                                                    senectus et netus et
                                                    malesuada fames ac turpis
                                                    egestas. Vestibulum at
                                                    mauris quis mi cursus
                                                    consequat. Integer velit
                                                    metus, scelerisque sed est
                                                    vel, dapibus interdum quam.
                                                </p>

                                                <div className="row no-gutters">
                                                    <div className="col-md-6">
                                                        <img
                                                            src={strategic}
                                                            alt="Strategic Planning"
                                                            className="float-start me-4 mb-4"
                                                        />
                                                        <p className="mb-4 pb-2">
                                                            Integer cursus ex
                                                            enim, vitae faucibus
                                                            nisi ultrices ac.
                                                            Pellentesque non
                                                            tristique nunc.
                                                            Fusce consectetur
                                                            facilisis odio ut
                                                            suscipit. Fusce
                                                            ligula magna,
                                                            accumsan et massa
                                                            ac, rutrum elementum
                                                            turpis. Suspendisse
                                                            porta mattis massa
                                                            vel ullamcorper. In
                                                            id ligula quam.
                                                            Aliquam ac odio ac
                                                            eros gravida congue.
                                                            Ut eu molestie
                                                            tortor. In ut
                                                            ullamcorper mauris,
                                                            at volutpat dui.
                                                            Pellentesque
                                                            habitant morbi
                                                            tristique senectus
                                                            et netus et
                                                            malesuada fames ac
                                                            turpis egestas.
                                                        </p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul className="list list-icons list-primary ms-4">
                                                            <li
                                                                className="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay="0"
                                                            >
                                                                <i className="fas fa-check"></i>{" "}
                                                                Fusce sit amet
                                                                orci quis arcu
                                                                vestibulum.
                                                            </li>
                                                            <li
                                                                className="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay="300"
                                                            >
                                                                <i className="fas fa-check"></i>{" "}
                                                                Fusce sit amet
                                                                orci quis arcu
                                                                vestibulum
                                                                stibulum.
                                                            </li>
                                                            <li
                                                                className="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay="600"
                                                            >
                                                                <i className="fas fa-check"></i>{" "}
                                                                Fusce sit amet
                                                                orci q
                                                                vestibulum
                                                                vestibulum.
                                                            </li>
                                                            <li
                                                                className="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay="900"
                                                            >
                                                                <i className="fas fa-check"></i>{" "}
                                                                Fusce sit amet
                                                                orci qtibulum.
                                                            </li>
                                                            <li
                                                                className="appear-animation"
                                                                data-appear-animation="fadeInUp"
                                                                data-appear-animation-delay="1200"
                                                            >
                                                                <i className="fas fa-check"></i>{" "}
                                                                Fusce sit amet
                                                                orci quis arcu
                                                                vestibulum
                                                                vestibulum.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>

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
                                        Schedule your company strategy session
                                        right now!
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

                    <div className="container py-5">
                        <div className="row">
                            <div className="col">
                                <p
                                    className="text-4 line-height-9 appear-animation"
                                    data-appear-animation="fadeIn"
                                    data-appear-animation-delay="100"
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed imperdiet libero id
                                    nisi euismod, sed porta est consectetur.
                                    Vestibulum auctor felis eget orci semr
                                    vestibulum. Pellentesque ultricies nibh
                                    gravida, accumsan libero luctus, molestie
                                    nunc. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                </p>
                                <p
                                    className="m-0 p-0 appear-animation"
                                    data-appear-animation="fadeIn"
                                    data-appear-animation-delay="300"
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed imperdiet libero id
                                    nisi euismod, sed porta est consectetur.
                                    Vestibulum auctor felis eget orci semr
                                    vestibulum. Pellentesque ultricies nibh
                                    gravida, accumsan libero luctus, molestie
                                    nunc. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="row process mt-5">
                                    <div
                                        className="process-step col-lg-4 mb-5 mb-lg-4 appear-animation"
                                        data-appear-animation="fadeInUpShorter"
                                        data-appear-animation-delay="200"
                                    >
                                        <div className="process-step-circle">
                                            <strong className="process-step-circle-content">
                                                01
                                            </strong>
                                        </div>
                                        <div className="process-step-content">
                                            <h4 className="mb-2 text-5 font-weight-bold">
                                                Task 1: Getting Started
                                            </h4>
                                            <p className="mb-0">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Curabitur rhoncus nulla dui, in
                                                dapibus magna ali.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="process-step col-lg-4 mb-5 mb-lg-4 appear-animation"
                                        data-appear-animation="fadeInUpShorter"
                                        data-appear-animation-delay="400"
                                    >
                                        <div className="process-step-circle">
                                            <strong className="process-step-circle-content">
                                                02
                                            </strong>
                                        </div>
                                        <div className="process-step-content">
                                            <h4 className="mb-2 text-5 font-weight-bold">
                                                Task 2: Improvements
                                            </h4>
                                            <p className="mb-0">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Curabitur rhoncus nulla dui, in
                                                dapibus magna ali.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="process-step col-lg-4 mb-5 mb-lg-4 appear-animation"
                                        data-appear-animation="fadeInUpShorter"
                                        data-appear-animation-delay="600"
                                    >
                                        <div className="process-step-circle">
                                            <strong className="process-step-circle-content">
                                                03
                                            </strong>
                                        </div>
                                        <div className="process-step-content">
                                            <h4 className="mb-2 text-5 font-weight-bold">
                                                Task 3: Delivery
                                            </h4>
                                            <p className="mb-0">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Curabitur rhoncus nulla dui, in
                                                dapibus magna ali.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
    query ($slug: String!) {
        service: markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            timeToRead
            excerpt
            frontmatter {
                title
                heading
                cover
                description
                date
                updated
                author
                twitter
                facebook
            }
            fields {
                slug
            }
        }
        services: allMarkdownRemark(
            limit: 2000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { fields: { slug: { ne: $slug } } }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        description
                        cover
                        date
                        openOnStart
                    }
                }
            }
        }
    }
`;
