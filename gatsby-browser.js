const addScript = (url) => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
};

exports.onInitialClientRender = () => {
    addScript("/js/theme.js");
    addScript("/js/views/view.contact.js");
    addScript("/js/demos/demo-business-consulting-2.js");
    addScript("/js/custom.js");

    addScript("/js/theme.init.js");
    console.log("ReactDOM.render has executed");
};

exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
    const { pathname } = location;
    const scrollToTopRoutes = [`/`];
    if (scrollToTopRoutes.indexOf(pathname) !== -1) {
        window.scrollTo(0, 0);
    }

    return false;
};
