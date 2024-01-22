import React from "react";

import phone from "../images/business-consulting-2/icons/phone.svg";
import calendar from "../images/business-consulting-2/icons/calendar.svg";
import mail from "../images/business-consulting-2/icons/mail.svg";
import barcode from "../images/business-consulting-2/logos/barcode.png";

export default () => (
    <footer
        id="footer"
        className="m-0 border-0 bg-color-quaternary overflow-hidden"
    >
        <div className="container">
            <div className="row py-5 custom-row-footer">
                <div className="col-12 col-sm-12 col-lg-3 d-flex align-items-start flex-column footer-column custom-footer-column-logo">
                    <img
                        width="123"
                        height="32"
                        src={barcode}
                        alt="Logo Footer"
                    />
                    <p className="d-block m-0 text-color-default">Barcode</p>
                </div>
                <div className="col-12 col-sm-12 col-lg-9 footer-column">
                    <div className="d-flex align-items-start align-sm-items-end justify-content-between flex-column h-100 mt-4 mt-sm-0">
                        <div className="d-flex flex-nowrap flex-lg-wrap justify-content-start justify-content-lg-end align-items-start align-items-lg-center w-100 flex-column flex-lg-row mt-4 mt-lg-0 custom-container-info-socials">
                            <ul className="nav nav-pills justify-content-between h-100 mb-4 mb-lg-0">
                                <li className="nav-item d-inline-flex flex-column flex-lg-row">
                                    <span className="footer-nav-phone py-2 d-flex align-items-center text-color-secondary font-weight-semibold text-uppercase justify-content-start mb-2 mb-lg-0">
                                        <span>
                                            <img
                                                width="15"
                                                height="18"
                                                src={phone}
                                                alt="Phone"
                                            />
                                        </span>
                                        <a
                                            className="font-weight-bold text-color-secondary text-color-hover-primary text-decoration-none"
                                            href="tel:123-456-7890"
                                        >
                                            +385 (98) 329 525
                                        </a>
                                    </span>
                                    <span className="footer-nav-email px-0 font-weight-normal d-flex align-items-center justify-content-start mb-2 mb-lg-0">
                                        <span>
                                            <img
                                                width="25"
                                                height="18"
                                                src={mail}
                                                alt="Mail"
                                            />
                                        </span>
                                        <a
                                            className="text-color-secondary text-color-hover-primary text-decoration-none"
                                            href="mailto:business@portotheme.com"
                                        >
                                            igor.glavic@gmail.com
                                        </a>
                                    </span>
                                    {/* <span className="footer-nav-opening-hours px-0 font-weight-normal d-flex align-items-center text-color-secondary justify-content-start mb-2 mb-lg-0">
                                        <span>
                                            <img
                                                width="19"
                                                height="18"
                                                src={calendar}
                                                alt="Calendar"
                                            />
                                        </span>
                                        Mon - Sat 9:00am - 6:00pm / Sunday -
                                        CLOSED
                                    </span> */}
                                </li>
                            </ul>
                            <ul className="social-icons custom-social-icons">
                                <li className="social-icons-instagram">
                                    <a
                                        className="custom-bg-color-light-grey"
                                        href="http://www.instagram.com/"
                                        target="_blank"
                                        title="Instagram"
                                    >
                                        <i className="fab fa-instagram text-4 font-weight-semibold text-color-secondary"></i>
                                    </a>
                                </li>
                                <li className="social-icons-twitter">
                                    <a
                                        className="custom-bg-color-light-grey"
                                        href="http://www.twitter.com/"
                                        target="_blank"
                                        title="Twitter"
                                    >
                                        <i className="fab fa-twitter text-4 font-weight-semibold text-color-secondary"></i>
                                    </a>
                                </li>
                                <li className="social-icons-facebook">
                                    <a
                                        className="custom-bg-color-light-grey"
                                        href="http://www.facebook.com/"
                                        target="_blank"
                                        title="Facebook"
                                    >
                                        <i className="fab fa-facebook-f text-4 font-weight-semibold text-color-secondary"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <nav className="nav-footer w-100 d-none d-lg-block">
                            <ul
                                className="nav nav-pills justify-content-end"
                                id="mainNav"
                            >
                                <li className="dropdown-secondary">
                                    <a
                                        className="nav-link text-color-secondary font-weight-bold letter-spacing-05 text-color-hover-primary"
                                        href="index.html"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="dropdown-secondary">
                                    <a
                                        className="nav-link text-color-secondary font-weight-bold letter-spacing-05 text-color-hover-primary"
                                        href="demo-business-consulting-2-about-us.html"
                                    >
                                        O nama
                                    </a>
                                </li>
                                <li className="dropdown-secondary">
                                    <a
                                        className="nav-link text-color-secondary font-weight-bold letter-spacing-05 text-color-hover-primary"
                                        href="demo-business-consulting-2-services.html"
                                    >
                                        Usluge
                                    </a>
                                </li>

                                <li className="dropdown-secondary">
                                    <a
                                        className="nav-link text-color-secondary font-weight-bold letter-spacing-05 text-color-hover-primary"
                                        href="demo-business-consulting-2-contact-us.html"
                                    >
                                        Kontakt
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-copyright container bg-color-quaternary">
            <div className="row">
                <div className="col-lg-12 text-center m-0">
                    <p className="text-color-grey">
                        Barcode. © 2024. All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    </footer>
);
