(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 687:
/***/ ((module) => {

// Exports
module.exports = {
	"body": "styles_body__8XwDu",
	"aboutcointainer": "styles_aboutcointainer__pS1mo",
	"aboutcontent": "styles_aboutcontent__zsb83",
	"description1": "styles_description1__SKH78",
	"description2": "styles_description2__ukch3",
	"minhaimg": "styles_minhaimg___req0"
};


/***/ }),

/***/ 198:
/***/ ((module) => {

// Exports
module.exports = {
	"headerContainer": "styles_headerContainer__uAgJk",
	"body": "styles_body__1mzDg",
	"headerContent": "styles_headerContent__h9eUe",
	"active": "styles_active__l7I1o"
};


/***/ }),

/***/ 712:
/***/ ((module) => {

// Exports
module.exports = {
	"body": "styles_body__d_WZ_",
	"technologiescontainer": "styles_technologiescontainer__uHQq2",
	"title2": "styles_title2__rUGOi",
	"technologiescontent": "styles_technologiescontent__CZGA0",
	"front": "styles_front__6aa9o",
	"back": "styles_back__xV4cN",
	"divfront": "styles_divfront__JkGn9",
	"reacticon": "styles_reacticon__QoW9Z",
	"divback": "styles_divback___BQ72",
	"settingsicon": "styles_settingsicon__nG102"
};


/***/ }),

/***/ 195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: ./src/components/Header/styles.module.scss
var styles_module = __webpack_require__(198);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/components/Header/index.tsx



function Header() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("body", {
        className: (styles_module_default()).body,
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            className: (styles_module_default()).headercontainer,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (styles_module_default()).headerContent,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: "/images/DevGustav.png",
                        alt: "logo",
                        width: "400rem",
                        height: "450rem"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: (styles_module_default()).active,
                                children: "Home"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: "About"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.instagram.com/gustavuwe/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Instagram"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://github.com/gustavuwe",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Github"
                            })
                        ]
                    })
                ]
            })
        })
    }));
}

// EXTERNAL MODULE: ./src/components/About/styles.module.scss
var About_styles_module = __webpack_require__(687);
var About_styles_module_default = /*#__PURE__*/__webpack_require__.n(About_styles_module);
;// CONCATENATED MODULE: ./src/components/About/index.tsx



function About() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("body", {
        className: (About_styles_module_default()).body,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
            className: (About_styles_module_default()).aboutcontainer,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (About_styles_module_default()).aboutcontent,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: "Discover"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "About me"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: (About_styles_module_default()).description1,
                            children: [
                                "I'm",
                                " a teenager, I study programming and i currently do it for fun.😜"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: (About_styles_module_default()).description2,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: " "
                                }),
                                "I am currently 14 years old, Live in Brazil, and Intend to become a developer in the future. follows",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                " down on the technologies ",
                                "I've",
                                " learned since I started"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (About_styles_module_default()).minhaimg,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: "/images/myimg.png",
                        alt: "minhaimg",
                        width: "500rem",
                        height: "500rem"
                    })
                })
            ]
        })
    }));
}

;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: external "react-icons/fi"
const fi_namespaceObject = require("react-icons/fi");
// EXTERNAL MODULE: ./src/components/Technologies/styles.module.scss
var Technologies_styles_module = __webpack_require__(712);
var Technologies_styles_module_default = /*#__PURE__*/__webpack_require__.n(Technologies_styles_module);
;// CONCATENATED MODULE: ./src/components/Technologies/index.tsx




function Technologies() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("body", {
        className: (Technologies_styles_module_default()).body,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
            className: (Technologies_styles_module_default()).technologiescontainer,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: (Technologies_styles_module_default()).title2,
                    children: "What i know"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "Technologies"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Technologies_styles_module_default()).technologiescontent,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Technologies_styles_module_default()).divfront,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaReact, {
                                    className: (Technologies_styles_module_default()).reacticon
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: (Technologies_styles_module_default()).front,
                                    children: "Front-End"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Html, Css, React, Next.js"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Technologies_styles_module_default()).divback,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(fi_namespaceObject.FiSettings, {
                                    className: (Technologies_styles_module_default()).settingsicon
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: (Technologies_styles_module_default()).back,
                                    children: "Back-End"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Javascript, Typescript, Python."
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./src/pages/_app.tsx





function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(About, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Technologies, {})
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 28:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(195)));
module.exports = __webpack_exports__;

})();