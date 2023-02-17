"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 523:
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
;// CONCATENATED MODULE: ./components/ctui/AppBar/AppBar.js
// import React from 'react'
// import Link from 'next/link'
// // nodejs library that concatenates classes
// import classNames from 'classnames'
// // nodejs library to set properties for components
// import PropTypes from 'prop-types'
// // @material-ui/core components
// import { makeStyles } from '@material-ui/core/styles'
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import IconButton from '@material-ui/core/IconButton'
// import Button from '@material-ui/core/Button'
// import Hidden from '@material-ui/core/Hidden'
// import Drawer from '@material-ui/core/Drawer'
// // @material-ui/icons
// import Menu from '@material-ui/icons/Menu'
// // core components
// import styles from '/styles/jss/nextjs-material-kit/components/headerStyle.js'
// const useStyles = makeStyles(styles)
// export default function Header(props) {
//   const classes = useStyles()
//   const [mobileOpen, setMobileOpen] = React.useState(false)
//   React.useEffect(() => {
//     if (props.changeColorOnScroll) {
//       window.addEventListener('scroll', headerColorChange)
//     }
//     return function cleanup() {
//       if (props.changeColorOnScroll) {
//         window.removeEventListener('scroll', headerColorChange)
//       }
//     }
//   })
//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen)
//   }
//   const headerColorChange = () => {
//     const { color, changeColorOnScroll } = props
//     const windowsScrollTop = window.pageYOffset
//     if (windowsScrollTop > changeColorOnScroll.height) {
//       document.body
//         .getElementsByTagName('header')[0]
//         .classList.remove(classes[color])
//       document.body
//         .getElementsByTagName('header')[0]
//         .classList.add(classes[changeColorOnScroll.color])
//     } else {
//       document.body
//         .getElementsByTagName('header')[0]
//         .classList.add(classes[color])
//       document.body
//         .getElementsByTagName('header')[0]
//         .classList.remove(classes[changeColorOnScroll.color])
//     }
//   }
//   const { color, rightLinks, leftLinks, brand, fixed, absolute } = props
//   const appBarClasses = classNames({
//     [classes.appBar]: true,
//     [classes[color]]: color,
//     [classes.absolute]: absolute,
//     [classes.fixed]: fixed,
//   })
//   const brandComponent = (
//     <Link href="/components" as="/components">
//       <Button className={classes.title}>{brand}</Button>
//     </Link>
//   )
//   return (
//     <AppBar className={appBarClasses}>
//       <Toolbar className={classes.container}>
//         {leftLinks !== undefined ? brandComponent : null}
//         <div className={classes.flex}>
//           {leftLinks !== undefined ? (
//             <Hidden smDown implementation="css">
//               {leftLinks}
//             </Hidden>
//           ) : (
//             brandComponent
//           )}
//         </div>
//         <Hidden smDown implementation="css">
//           {rightLinks}
//         </Hidden>
//         <Hidden mdUp>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerToggle}
//           >
//             <Menu />
//           </IconButton>
//         </Hidden>
//       </Toolbar>
//       <Hidden mdUp implementation="js">
//         <Drawer
//           variant="temporary"
//           anchor={'right'}
//           open={mobileOpen}
//           classes={{
//             paper: classes.drawerPaper,
//           }}
//           onClose={handleDrawerToggle}
//         >
//           <div className={classes.appResponsive}>
//             {leftLinks}
//             {rightLinks}
//           </div>
//         </Drawer>
//       </Hidden>
//     </AppBar>
//   )
// }
// Header.defaultProp = {
//   color: 'white',
// }
// Header.propTypes = {
//   color: PropTypes.oneOf([
//     'primary',
//     'info',
//     'success',
//     'warning',
//     'danger',
//     'transparent',
//     'white',
//     'rose',
//     'dark',
//   ]),
//   rightLinks: PropTypes.node,
//   leftLinks: PropTypes.node,
//   brand: PropTypes.string,
//   fixed: PropTypes.bool,
//   absolute: PropTypes.bool,
//   // this will cause the sidebar to change the color from
//   // props.color (see above) to changeColorOnScroll.color
//   // when the window.pageYOffset is heigher or equal to
//   // changeColorOnScroll.height and then when it is smaller than
//   // changeColorOnScroll.height change it back to
//   // props.color (see above)
//   changeColorOnScroll: PropTypes.shape({
//     height: PropTypes.number.isRequired,
//     color: PropTypes.oneOf([
//       'primary',
//       'info',
//       'success',
//       'warning',
//       'danger',
//       'transparent',
//       'white',
//       'rose',
//       'dark',
//     ]).isRequired,
//   }),
// }
const AppBar = ()=>{
    return null;
};
/* harmony default export */ const AppBar_AppBar = (AppBar);

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
            /*#__PURE__*/ jsx_runtime_.jsx(AppBar_AppBar, {})
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
var __webpack_exports__ = (__webpack_exec__(523));
module.exports = __webpack_exports__;

})();