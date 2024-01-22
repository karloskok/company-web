import React from "react";
import "../scss/index.scss";
import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";
// require("../scripts/vendor/plugins/js/plugins.min.js");
// require("../scripts/js/theme.js");
// require("../scripts/js/views/view.contact.js");
// require("../scripts/js/demos/demo-business-consulting-2.js");
// require("../scripts/js/custom.js");
// require("../scripts/js/theme.init.js");

export default ({ children, className, hideHeader }) => (
    <>
        {/* <!-- Web Fonts  --> */}
        {/* <link
            id="googleFonts"
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap"
            rel="stylesheet"
            type="text/css"
        /> */}
        <div className="body">
            {!hideHeader && <Header />}
            <div className={className}>{children}</div>
            <Footer />
        </div>
    </>
);
