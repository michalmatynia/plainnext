"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 50:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Box"
const Box_namespaceObject = require("@mui/material/Box");
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/IconButton"
const IconButton_namespaceObject = require("@mui/material/IconButton");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Typography"
const Typography_namespaceObject = require("@mui/material/Typography");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/InputBase"
const InputBase_namespaceObject = require("@mui/material/InputBase");
var InputBase_default = /*#__PURE__*/__webpack_require__.n(InputBase_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Badge"
const Badge_namespaceObject = require("@mui/material/Badge");
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/MenuItem"
const MenuItem_namespaceObject = require("@mui/material/MenuItem");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Menu"
const Menu_namespaceObject = require("@mui/material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const icons_material_Menu_namespaceObject = require("@mui/icons-material/Menu");
var icons_material_Menu_default = /*#__PURE__*/__webpack_require__.n(icons_material_Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Search"
const Search_namespaceObject = require("@mui/icons-material/Search");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/AccountCircle"
const AccountCircle_namespaceObject = require("@mui/icons-material/AccountCircle");
var AccountCircle_default = /*#__PURE__*/__webpack_require__.n(AccountCircle_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Mail"
const Mail_namespaceObject = require("@mui/icons-material/Mail");
var Mail_default = /*#__PURE__*/__webpack_require__.n(Mail_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Notifications"
const Notifications_namespaceObject = require("@mui/icons-material/Notifications");
var Notifications_default = /*#__PURE__*/__webpack_require__.n(Notifications_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/MoreVert"
const MoreVert_namespaceObject = require("@mui/icons-material/MoreVert");
var MoreVert_default = /*#__PURE__*/__webpack_require__.n(MoreVert_namespaceObject);
;// CONCATENATED MODULE: ./components/mui/AppBar/AppBar.tsx
// import s from "./Button.module.css";


















const Search = (0,styles_namespaceObject.styled)("div")(({ theme  })=>({
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: (0,styles_namespaceObject.alpha)(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: (0,styles_namespaceObject.alpha)(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "auto"
        }
    }));
const SearchIconWrapper = (0,styles_namespaceObject.styled)("div")(({ theme  })=>({
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }));
const StyledInputBase = (0,styles_namespaceObject.styled)((InputBase_default()))(({ theme  })=>({
        color: "inherit",
        "& .MuiInputBase-input": {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create("width"),
            width: "100%",
            [theme.breakpoints.up("md")]: {
                width: "20ch"
            }
        }
    }));
const PrimarySearchAppBar = ()=>{
    //   return (
    //     <button className={cn(className, s.root)} type="button" {...rest}>
    //       {children}
    //     </button>
    //   );
    const [anchorEl, setAnchorEl] = (0,external_react_.useState)(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = (0,external_react_.useState)(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleProfileMenuOpen = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = ()=>{
        setMobileMoreAnchorEl(null);
    };
    const handleMenuClose = ()=>{
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const handleMobileMenuOpen = (event)=>{
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const menuId = "primary-search-account-menu";
    const renderMenu = /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Menu_default()), {
        anchorEl: anchorEl,
        anchorOrigin: {
            vertical: "top",
            horizontal: "right"
        },
        id: menuId,
        keepMounted: true,
        transformOrigin: {
            vertical: "top",
            horizontal: "right"
        },
        open: isMenuOpen,
        onClose: handleMenuClose,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                onClick: handleMenuClose,
                children: "Profile"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                onClick: handleMenuClose,
                children: "My account"
            })
        ]
    });
    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Menu_default()), {
        anchorEl: mobileMoreAnchorEl,
        anchorOrigin: {
            vertical: "top",
            horizontal: "right"
        },
        id: mobileMenuId,
        keepMounted: true,
        transformOrigin: {
            vertical: "top",
            horizontal: "right"
        },
        open: isMobileMenuOpen,
        onClose: handleMobileMenuClose,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                        size: "large",
                        "aria-label": "show 4 new mails",
                        color: "inherit",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                            badgeContent: 4,
                            color: "error",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Mail_default()), {})
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Messages"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                        size: "large",
                        "aria-label": "show 17 new notifications",
                        color: "inherit",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                            badgeContent: 17,
                            color: "error",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Notifications_default()), {})
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Notifications"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                onClick: handleProfileMenuOpen,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                        size: "large",
                        "aria-label": "account of current user",
                        "aria-controls": "primary-search-account-menu",
                        "aria-haspopup": "true",
                        color: "inherit",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((AccountCircle_default()), {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Profile"
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            flexGrow: 1
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                position: "static",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            size: "large",
                            edge: "start",
                            color: "inherit",
                            "aria-label": "open drawer",
                            sx: {
                                mr: 2
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((icons_material_Menu_default()), {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "h6",
                            noWrap: true,
                            component: "div",
                            sx: {
                                display: {
                                    xs: "none",
                                    sm: "block"
                                }
                            },
                            children: "MUI"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Search, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(SearchIconWrapper, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Search_default()), {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(StyledInputBase, {
                                    placeholder: "Search…",
                                    inputProps: {
                                        "aria-label": "search"
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                flexGrow: 1
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                display: {
                                    xs: "none",
                                    md: "flex"
                                }
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                    size: "large",
                                    "aria-label": "show 4 new mails",
                                    color: "inherit",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                                        badgeContent: 4,
                                        color: "error",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Mail_default()), {})
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                    size: "large",
                                    "aria-label": "show 17 new notifications",
                                    color: "inherit",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                                        badgeContent: 17,
                                        color: "error",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Notifications_default()), {})
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                    size: "large",
                                    edge: "end",
                                    "aria-label": "account of current user",
                                    "aria-controls": menuId,
                                    "aria-haspopup": "true",
                                    onClick: handleProfileMenuOpen,
                                    color: "inherit",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((AccountCircle_default()), {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                display: {
                                    xs: "flex",
                                    md: "none"
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                size: "large",
                                "aria-label": "show more",
                                "aria-controls": mobileMenuId,
                                "aria-haspopup": "true",
                                onClick: handleMobileMenuOpen,
                                color: "inherit",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((MoreVert_default()), {})
                            })
                        })
                    ]
                })
            }),
            renderMobileMenu,
            renderMenu
        ]
    });
};
/* harmony default export */ const AppBar = (PrimarySearchAppBar);

;// CONCATENATED MODULE: ./components/mui/AppBar/index.ts


;// CONCATENATED MODULE: ./components/mui/index.ts


;// CONCATENATED MODULE: ./src/pages/index.tsx



function getStaticProps() {
    return {
        props: {},
        revalidate: 4 * 60 * 60
    };
}
function Home() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Create Next App"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }, "head"),
            /*#__PURE__*/ jsx_runtime_.jsx(AppBar, {})
        ]
    });
} // import Head from 'next/head'
 // import Image from 'next/image'
 // import { Inter } from '@next/font/google'
 // import styles from '@/styles/Home.module.css'
 // const inter = Inter({ subsets: ['latin'] })
 // export default function Home() {
 //   let Frf = ''
 //   Frf = 'cdsc'
 //   return (
 //     <>
 //       <Head>
 //         <title>Create Next App</title>
 //         <meta name="description" content="Generated by create next app" />
 //         <meta name="viewport" content="width=device-width, initial-scale=1" />
 //         <link rel="icon" href="/favicon.ico" />
 //       </Head>
 //       <main className={styles.main}>
 //         <div className={styles.description}>
 //           <p>
 //             Jest tutaj&nbsp;
 //             <code className={styles.code}>src/pages/index.tsx</code>
 //           </p>
 //           <div>
 //             <a
 //               href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
 //               target="_blank"
 //               rel="noopener noreferrer"
 //             >
 //               By{' '}
 //               <Image
 //                 src="/vercel.svg"
 //                 alt="Vercel Logo"
 //                 className={styles.vercelLogo}
 //                 width={100}
 //                 height={24}
 //                 priority
 //               />
 //             </a>
 //           </div>
 //         </div>
 //         <div className={styles.center}>
 //           <Image
 //             className={styles.logo}
 //             src="/next.svg"
 //             alt="Next.js Logo"
 //             width={180}
 //             height={37}
 //             priority
 //           />
 //           <div className={styles.thirteen}>
 //             <Image
 //               src="/thirteen.svg"
 //               alt="13"
 //               width={40}
 //               height={31}
 //               priority
 //             />
 //           </div>
 //         </div>
 //         <div className={styles.grid}>
 //           <a
 //             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
 //             className={styles.card}
 //             target="_blank"
 //             rel="noopener noreferrer"
 //           >
 //             <h2 className={inter.className}>
 //               Docs <span>-&gt;</span>
 //             </h2>
 //             <p className={inter.className}>
 //               Find in-depth information about Next.js features and&nbsp;API.
 //             </p>
 //           </a>
 //           <a
 //             href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
 //             className={styles.card}
 //             target="_blank"
 //             rel="noopener noreferrer"
 //           >
 //             <h2 className={inter.className}>
 //               Learn <span>-&gt;</span>
 //             </h2>
 //             <p className={inter.className}>
 //               Learn about Next.js in an interactive course with&nbsp;quizzes!
 //             </p>
 //           </a>
 //           <a
 //             href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
 //             className={styles.card}
 //             target="_blank"
 //             rel="noopener noreferrer"
 //           >
 //             <h2 className={inter.className}>
 //               Templates <span>-&gt;</span>
 //             </h2>
 //             <p className={inter.className}>
 //               Discover and deploy boilerplate example Next.js&nbsp;projects.
 //             </p>
 //           </a>
 //           <a
 //             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
 //             className={styles.card}
 //             target="_blank"
 //             rel="noopener noreferrer"
 //           >
 //             <h2 className={inter.className}>
 //               Deploy <span>-&gt;</span>
 //             </h2>
 //             <p className={inter.className}>
 //               Instantly deploy your Next.js site to a shareable URL
 //               with&nbsp;Vercel.
 //             </p>
 //           </a>
 //         </div>
 //       </main>
 //     </>
 //   )
 // }


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(50));
module.exports = __webpack_exports__;

})();