/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"@solana/wallet-adapter-base\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"@solana/wallet-adapter-react\");\n/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-wallets */ \"@solana/wallet-adapter-wallets\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"@solana/wallet-adapter-react-ui\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/web3.js */ \"@solana/web3.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__]);\n([_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n// Use require instead of import since order matters\n__webpack_require__(/*! @solana/wallet-adapter-react-ui/styles.css */ \"./node_modules/@solana/wallet-adapter-react-ui/styles.css\");\n__webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\nfunction MyApp({ Component , pageProps  }) {\n    // Can be set to 'devnet', 'testnet', or 'mainnet-beta'\n    const network = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletAdapterNetwork.Devnet;\n    // You can also provide a custom RPC endpoint\n    const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>(0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_5__.clusterApiUrl)(network)\n    , [\n        network\n    ]);\n    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --\n    // Only the wallets you configure here will be compiled into your application, and only the dependencies\n    // of wallets that your users connect to will be loaded\n    const wallets = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>[\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__.PhantomWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__.GlowWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__.SlopeWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__.SolflareWalletAdapter({\n                network\n            }),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__.TorusWalletAdapter(), \n        ]\n    , [\n        network\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.ConnectionProvider, {\n        endpoint: endpoint,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.WalletProvider, {\n            wallets: wallets,\n            autoConnect: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__.WalletModalProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Zasha\\\\Documents\\\\Works\\\\Gitz\\\\clicker\\\\pages\\\\_app.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Zasha\\\\Documents\\\\Works\\\\Gitz\\\\clicker\\\\pages\\\\_app.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Zasha\\\\Documents\\\\Works\\\\Gitz\\\\clicker\\\\pages\\\\_app.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Zasha\\\\Documents\\\\Works\\\\Gitz\\\\clicker\\\\pages\\\\_app.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQW1FO0FBSTdCO0FBT0U7QUFDOEI7QUFDdEI7QUFDaEI7QUFFaEMsb0RBQW9EO0FBQ3BEVyxtQkFBTyxDQUFDLDZHQUE0QyxDQUFDLENBQUM7QUFDdERBLG1CQUFPLENBQUMsbURBQXVCLENBQUMsQ0FBQztBQUlqQyxTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCx1REFBdUQ7SUFDdkQsTUFBTUMsT0FBTyxHQUFHZixvRkFBMkI7SUFFM0MsNkNBQTZDO0lBQzdDLE1BQU1pQixRQUFRLEdBQUdQLDhDQUFPLENBQUMsSUFBTUQsOERBQWEsQ0FBQ00sT0FBTyxDQUFDO0lBQUEsRUFBRTtRQUFDQSxPQUFPO0tBQUMsQ0FBQztJQUlqRSx5R0FBeUc7SUFDekcsd0dBQXdHO0lBQ3hHLHVEQUF1RDtJQUN2RCxNQUFNRyxPQUFPLEdBQUdSLDhDQUFPLENBQ3JCLElBQU07WUFDSixJQUFJTixnRkFBb0IsRUFBRTtZQUMxQixJQUFJRCw2RUFBaUIsRUFBRTtZQUN2QixJQUFJRSw4RUFBa0IsRUFBRTtZQUN4QixJQUFJQyxpRkFBcUIsQ0FBQztnQkFBRVMsT0FBTzthQUFFLENBQUM7WUFDdEMsSUFBSVIsOEVBQWtCLEVBQUU7U0FDekI7SUFBQSxFQUNEO1FBQUNRLE9BQU87S0FBQyxDQUNWO0lBRUQscUJBQ0UsOERBQUNkLDRFQUFrQjtRQUFDZ0IsUUFBUSxFQUFFQSxRQUFRO2tCQUNwQyw0RUFBQ2Ysd0VBQWM7WUFBQ2dCLE9BQU8sRUFBRUEsT0FBTztZQUFFQyxXQUFXO3NCQUMzQyw0RUFBQ1gsZ0ZBQW1COzBCQUNsQiw0RUFBQ0ssU0FBUztvQkFBRSxHQUFHQyxTQUFTOzs7Ozt3QkFBSTs7Ozs7b0JBQ1I7Ozs7O2dCQUNQOzs7OztZQUNFLENBQ3JCO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29sYW5hLWNsaWNrZXItZ2FtZS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2FsbGV0QWRhcHRlck5ldHdvcmsgfSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1iYXNlXCI7XHJcbmltcG9ydCB7XHJcbiAgQ29ubmVjdGlvblByb3ZpZGVyLFxyXG4gIFdhbGxldFByb3ZpZGVyLFxyXG59IGZyb20gXCJAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgR2xvd1dhbGxldEFkYXB0ZXIsXHJcbiAgUGhhbnRvbVdhbGxldEFkYXB0ZXIsXHJcbiAgU2xvcGVXYWxsZXRBZGFwdGVyLFxyXG4gIFNvbGZsYXJlV2FsbGV0QWRhcHRlcixcclxuICBUb3J1c1dhbGxldEFkYXB0ZXIsXHJcbn0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItd2FsbGV0c1wiO1xyXG5pbXBvcnQgeyBXYWxsZXRNb2RhbFByb3ZpZGVyIH0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWlcIjtcclxuaW1wb3J0IHsgY2x1c3RlckFwaVVybCB9IGZyb20gXCJAc29sYW5hL3dlYjMuanNcIjtcclxuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gVXNlIHJlcXVpcmUgaW5zdGVhZCBvZiBpbXBvcnQgc2luY2Ugb3JkZXIgbWF0dGVyc1xyXG5yZXF1aXJlKFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aS9zdHlsZXMuY3NzXCIpO1xyXG5yZXF1aXJlKFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCIpO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIC8vIENhbiBiZSBzZXQgdG8gJ2Rldm5ldCcsICd0ZXN0bmV0Jywgb3IgJ21haW5uZXQtYmV0YSdcclxuICBjb25zdCBuZXR3b3JrID0gV2FsbGV0QWRhcHRlck5ldHdvcmsuRGV2bmV0O1xyXG5cclxuICAvLyBZb3UgY2FuIGFsc28gcHJvdmlkZSBhIGN1c3RvbSBSUEMgZW5kcG9pbnRcclxuICBjb25zdCBlbmRwb2ludCA9IHVzZU1lbW8oKCkgPT4gY2x1c3RlckFwaVVybChuZXR3b3JrKSwgW25ldHdvcmtdKTtcclxuXHJcblxyXG5cclxuICAvLyBAc29sYW5hL3dhbGxldC1hZGFwdGVyLXdhbGxldHMgaW5jbHVkZXMgYWxsIHRoZSBhZGFwdGVycyBidXQgc3VwcG9ydHMgdHJlZSBzaGFraW5nIGFuZCBsYXp5IGxvYWRpbmcgLS1cclxuICAvLyBPbmx5IHRoZSB3YWxsZXRzIHlvdSBjb25maWd1cmUgaGVyZSB3aWxsIGJlIGNvbXBpbGVkIGludG8geW91ciBhcHBsaWNhdGlvbiwgYW5kIG9ubHkgdGhlIGRlcGVuZGVuY2llc1xyXG4gIC8vIG9mIHdhbGxldHMgdGhhdCB5b3VyIHVzZXJzIGNvbm5lY3QgdG8gd2lsbCBiZSBsb2FkZWRcclxuICBjb25zdCB3YWxsZXRzID0gdXNlTWVtbyhcclxuICAgICgpID0+IFtcclxuICAgICAgbmV3IFBoYW50b21XYWxsZXRBZGFwdGVyKCksXHJcbiAgICAgIG5ldyBHbG93V2FsbGV0QWRhcHRlcigpLFxyXG4gICAgICBuZXcgU2xvcGVXYWxsZXRBZGFwdGVyKCksXHJcbiAgICAgIG5ldyBTb2xmbGFyZVdhbGxldEFkYXB0ZXIoeyBuZXR3b3JrIH0pLFxyXG4gICAgICBuZXcgVG9ydXNXYWxsZXRBZGFwdGVyKCksXHJcbiAgICBdLFxyXG4gICAgW25ldHdvcmtdXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb25uZWN0aW9uUHJvdmlkZXIgZW5kcG9pbnQ9e2VuZHBvaW50fT5cclxuICAgICAgPFdhbGxldFByb3ZpZGVyIHdhbGxldHM9e3dhbGxldHN9IGF1dG9Db25uZWN0PlxyXG4gICAgICAgIDxXYWxsZXRNb2RhbFByb3ZpZGVyPlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvV2FsbGV0TW9kYWxQcm92aWRlcj5cclxuICAgICAgPC9XYWxsZXRQcm92aWRlcj5cclxuICAgIDwvQ29ubmVjdGlvblByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwibmFtZXMiOlsiV2FsbGV0QWRhcHRlck5ldHdvcmsiLCJDb25uZWN0aW9uUHJvdmlkZXIiLCJXYWxsZXRQcm92aWRlciIsIkdsb3dXYWxsZXRBZGFwdGVyIiwiUGhhbnRvbVdhbGxldEFkYXB0ZXIiLCJTbG9wZVdhbGxldEFkYXB0ZXIiLCJTb2xmbGFyZVdhbGxldEFkYXB0ZXIiLCJUb3J1c1dhbGxldEFkYXB0ZXIiLCJXYWxsZXRNb2RhbFByb3ZpZGVyIiwiY2x1c3RlckFwaVVybCIsInVzZU1lbW8iLCJyZXF1aXJlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJuZXR3b3JrIiwiRGV2bmV0IiwiZW5kcG9pbnQiLCJ3YWxsZXRzIiwiYXV0b0Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react-ui/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react-ui/styles.css ***!
  \*****************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@solana/web3.js":
/*!**********************************!*\
  !*** external "@solana/web3.js" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@solana/web3.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@solana/wallet-adapter-base":
/*!**********************************************!*\
  !*** external "@solana/wallet-adapter-base" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-base");;

/***/ }),

/***/ "@solana/wallet-adapter-react":
/*!***********************************************!*\
  !*** external "@solana/wallet-adapter-react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ "@solana/wallet-adapter-react-ui":
/*!**************************************************!*\
  !*** external "@solana/wallet-adapter-react-ui" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ }),

/***/ "@solana/wallet-adapter-wallets":
/*!*************************************************!*\
  !*** external "@solana/wallet-adapter-wallets" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-wallets");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();