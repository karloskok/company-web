import React from "react";
import phone from "../images/business-consulting-2/icons/phone.svg";
import mail from "../images/business-consulting-2/icons/mail.svg";
import calendar from "../images/business-consulting-2/icons/calendar.svg";
import barcode from "../images/business-consulting-2/logos/barcode.png";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default () => (
    <header
        id="header"
        className="header-effect-shrink"
        data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyChangeLogo': true, 'stickyStartAt': 120, 'stickyHeaderContainerHeight': 70}"
    >
        <div className="header-body border-top-0">
            <div className="header-top header-top-default header-top-borders border-bottom-0 bg-color-light">
                <div className="container h-100">
                    <div className="header-row h-100">
                        <div className="header-column justify-content-between">
                            <div className="header-row">
                                <nav className="header-nav-top w-100">
                                    <ul className="nav nav-pills justify-content-between w-100 h-100">
                                        <li className="nav-item py-2 d-inline-flex">
                                            <span className="header-top-phone py-2 d-flex align-items-center text-color-secondary font-weight-semibold text-uppercase">
                                                <span>
                                                    <img
                                                        width="15"
                                                        height="18"
                                                        src={phone}
                                                        alt="Phone"
                                                    />
                                                </span>
                                                <a
                                                    className="text-color-secondary text-color-hover-primary text-decoration-none"
                                                    href="tel:123-456-7890"
                                                >
                                                    +385 (98) 329 525
                                                </a>
                                            </span>
                                            <span className="header-top-email px-0 font-weight-normal align-items-center d-none d-xl-flex">
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
                                            {/* <span className="header-top-opening-hours px-0 font-weight-normal align-items-center text-color-secondary d-none d-xl-flex">
                                                <span>
                                                    <img
                                                        width="19"
                                                        height="18"
                                                        src={calendar}
                                                        alt="Calendar"
                                                    />
                                                </span>
                                                Mon - Sat 9:00am - 6:00pm /
                                                Sunday - CLOSED
                                            </span> */}
                                        </li>
                                        {/* <li className="nav-item nav-item-header-top-socials d-none d-md-flex justify-content-between h-100">
                                            <span className="header-top-button-make-as-appoitment d-inline-flex align-items-center justify-content-center h-100 p-0 align-top">
                                                <a
                                                    href="demo-business-consulting-2-contact-us.html"
                                                    className="btn-primary d-flex align-items-center justify-content-center h-100 w-100 text-color-light font-weight-semibold text-decoration-none text-uppercase custom-button-header-top"
                                                >
                                                    free initial consultation
                                                </a>
                                            </span>
                                        </li> */}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-container container bg-color-light">
                <div className="header-row">
                    <div className="header-column header-column-logo">
                        <div className="header-row">
                            <div className="header-logo">
                                <a href="index.html">
                                    <img
                                        alt="Porto"
                                        width="123"
                                        height="32"
                                        src={barcode}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="header-column header-column-nav-menu justify-content-end">
                        <div className="header-row">
                            <div className="header-nav header-nav-links order-2 order-lg-1">
                                <div className="header-nav-main header-nav-main-square header-nav-main-effect-1 header-nav-main-sub-effect-1">
                                    <nav className="collapse">
                                        <ul
                                            className="nav nav-pills"
                                            id="mainNav"
                                        >
                                            <li className="dropdown-secondary">
                                                <a
                                                    href="/"
                                                    title="Our team"
                                                    className="nav-link active"
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            <li className="dropdown-secondary">
                                                <AnchorLink
                                                    className="nav-link"
                                                    to="#o-nama"
                                                    title="about us"
                                                >
                                                    O nama
                                                </AnchorLink>
                                            </li>
                                            <li className="dropdown-secondary">
                                                <AnchorLink
                                                    className="nav-link"
                                                    to="#usluge"
                                                    title="usluhgeee"
                                                >
                                                    Usluge
                                                </AnchorLink>
                                            </li>

                                            <li className="dropdown-secondary">
                                                <AnchorLink
                                                    className="nav-link"
                                                    to="#kontakt"
                                                    title="kontatatta"
                                                >
                                                    Kontakt
                                                </AnchorLink>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <button
                                    className="btn header-btn-collapse-nav"
                                    data-bs-toggle="collapse"
                                    data-bs-target=".header-nav-main nav"
                                >
                                    <i className="fas fa-bars"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="header-column header-column-search justify-content-center align-items-end">
                        <div className="header-nav-features">
                            <div className="header-nav-feature header-nav-features-search d-inline-flex">
                                <a
                                    href="#"
                                    className="header-nav-features-toggle"
                                    data-focus="headerSearch"
                                >
                                    <i className="fas fa-search header-nav-top-icon text-color-secondary text-3"></i>
                                </a>
                                <div
                                    className="header-nav-features-dropdown header-nav-features-dropdown-mobile-fixed border-radius-0"
                                    id="headerTopSearchDropdown"
                                >
                                    <form
                                        role="search"
                                        action="page-search-results.html"
                                        method="get"
                                    >
                                        <div className="simple-search input-group">
                                            <input
                                                className="form-control text-1"
                                                id="headerSearch"
                                                name="q"
                                                type="search"
                                                value=""
                                                placeholder="Search..."
                                            />
                                            <button
                                                className="btn"
                                                type="submit"
                                                aria-label="Search"
                                            >
                                                <i className="fa fa-search header-nav-top-icon text-color-secondary"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </header>
);
