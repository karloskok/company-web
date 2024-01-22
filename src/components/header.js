import React from "react";
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
                                                        src="images/phone.svg"
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
                                                        src="images/mail.svg"
                                                        alt="Mail"
                                                    />
                                                </span>
                                                <a
                                                    className="text-color-secondary text-color-hover-primary text-decoration-none"
                                                    href="mailto:business@portotheme.com"
                                                >
                                                    igor.neto@gmail.com
                                                </a>
                                            </span>
                                        </li>
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
                                <a href="/">
                                    <img
                                        alt="Porto"
                                        width="auto"
                                        height="60"
                                        src="images/logo.png"
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
                                                    className="nav-link active"
                                                    href="/"
                                                >
                                                    Naslovna
                                                </a>
                                            </li>
                                            <li className="dropdown-secondary">
                                                <AnchorLink
                                                    className="nav-link"
                                                    to="#usluge"
                                                >
                                                    Usluge
                                                </AnchorLink>
                                            </li>
                                            <li className="dropdown-secondary">
                                                <AnchorLink
                                                    className="nav-link"
                                                    to="#o-nama"
                                                >
                                                    O nama
                                                </AnchorLink>
                                            </li>

                                            <li className="dropdown-secondary">
                                                <AnchorLink
                                                    className="nav-link"
                                                    to="#kontakt"
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
                </div>
            </div>
        </div>
    </header>
);
