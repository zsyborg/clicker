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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"@solana/wallet-adapter-base\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"@solana/wallet-adapter-react\");\n/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-wallets */ \"@solana/wallet-adapter-wallets\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"@solana/wallet-adapter-react-ui\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/web3.js */ \"@solana/web3.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var ani_cursor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ani-cursor */ \"ani-cursor\");\n/* harmony import */ var ani_cursor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ani_cursor__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__]);\n([_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n// Use require instead of import since order matters\n__webpack_require__(/*! @solana/wallet-adapter-react-ui/styles.css */ \"./node_modules/@solana/wallet-adapter-react-ui/styles.css\");\n__webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\nfunction MyApp({ Component , pageProps  }) {\n    // Can be set to 'devnet', 'testnet', or 'mainnet-beta'\n    const network = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletAdapterNetwork.Mainnet;\n    // You can also provide a custom RPC endpoint\n    const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>(0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_5__.clusterApiUrl)(network)\n    , [\n        network\n    ]);\n    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --\n    // Only the wallets you configure here will be compiled into your application, and only the dependencies\n    // of wallets that your users connect to will be loaded\n    const wallets = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>[\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__.PhantomWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__.ExodusWalletAdapter({\n                network\n            }),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__.GlowWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__.SlopeWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__.SolflareWalletAdapter({\n                network\n            }),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__.TorusWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__.Coin98WalletAdapter({\n                network\n            }), \n        ]\n    , [\n        network\n    ]);\n    async function applyCursor(selector, aniUrl) {\n        const response = await fetch(aniUrl);\n        const data = new Uint8Array(await response.arrayBuffer());\n        const style = document.createElement(\"style\");\n        style.innerText = (0,ani_cursor__WEBPACK_IMPORTED_MODULE_7__.convertAniBinaryToCSS)(selector, data);\n        document.head.appendChild(style);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        applyCursor(\"#cur\", \"/peo1029.ani\");\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.ConnectionProvider, {\n        endpoint: endpoint,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.WalletProvider, {\n            wallets: wallets,\n            autoConnect: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__.WalletModalProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Zasha\\\\Documents\\\\Works\\\\Gitz\\\\clicker\\\\pages\\\\_app.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Zasha\\\\Documents\\\\Works\\\\Gitz\\\\clicker\\\\pages\\\\_app.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Zasha\\\\Documents\\\\Works\\\\Gitz\\\\clicker\\\\pages\\\\_app.tsx\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Zasha\\\\Documents\\\\Works\\\\Gitz\\\\clicker\\\\pages\\\\_app.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBbUU7QUFJN0I7QUFZRTtBQUM4QjtBQUN0QjtBQUNoQjtBQUNpQjtBQUNMO0FBRTVDLG9EQUFvRDtBQUNwRGUsbUJBQU8sQ0FBQyw2R0FBNEMsQ0FBQyxDQUFDO0FBQ3REQSxtQkFBTyxDQUFDLG1EQUF1QixDQUFDLENBQUM7QUFJakMsU0FBU0MsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDakQsdURBQXVEO0lBQ3ZELE1BQU1DLE9BQU8sR0FBR25CLHFGQUE0QjtJQUU1Qyw2Q0FBNkM7SUFDN0MsTUFBTXFCLFFBQVEsR0FBR1QsOENBQU8sQ0FBQyxJQUFNRCw4REFBYSxDQUFDUSxPQUFPLENBQUM7SUFBQSxFQUFFO1FBQUNBLE9BQU87S0FBQyxDQUFDO0lBSWpFLHlHQUF5RztJQUN6Ryx3R0FBd0c7SUFDeEcsdURBQXVEO0lBQ3ZELE1BQU1HLE9BQU8sR0FBR1YsOENBQU8sQ0FDckIsSUFBTTtZQUNKLElBQUlSLGdGQUFvQixFQUFFO1lBQzFCLElBQUlLLCtFQUFtQixDQUFDO2dCQUFDVSxPQUFPO2FBQUMsQ0FBQztZQUNsQyxJQUFJaEIsNkVBQWlCLEVBQUU7WUFDdkIsSUFBSUUsOEVBQWtCLEVBQUU7WUFDeEIsSUFBSUMsaUZBQXFCLENBQUM7Z0JBQUVhLE9BQU87YUFBRSxDQUFDO1lBQ3RDLElBQUlaLDhFQUFrQixFQUFFO1lBQ3hCLElBQUlDLCtFQUFtQixDQUFDO2dCQUFDVyxPQUFPO2FBQUMsQ0FBQztTQUNuQztJQUFBLEVBQ0Q7UUFBQ0EsT0FBTztLQUFDLENBQ1Y7SUFFRCxlQUFlSSxXQUFXLENBQUNDLFFBQVksRUFBRUMsTUFBVSxFQUFFO1FBQ25ELE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNGLE1BQU0sQ0FBQztRQUNwQyxNQUFNRyxJQUFJLEdBQUcsSUFBSUMsVUFBVSxDQUFDLE1BQU1ILFFBQVEsQ0FBQ0ksV0FBVyxFQUFFLENBQUM7UUFFekQsTUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDN0NGLEtBQUssQ0FBQ0csU0FBUyxHQUFHckIsaUVBQXFCLENBQUNXLFFBQVEsRUFBRUksSUFBSSxDQUFDLENBQUM7UUFFeERJLFFBQVEsQ0FBQ0csSUFBSSxDQUFDQyxXQUFXLENBQUNMLEtBQUssQ0FBQyxDQUFDO0tBQ2xDO0lBQ0RqQixnREFBUyxDQUFDLElBQU07UUFFZFMsV0FBVyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUM7S0FDakMsQ0FBQztJQUdMLHFCQUNFLDhEQUFDdEIsNEVBQWtCO1FBQUNvQixRQUFRLEVBQUVBLFFBQVE7a0JBQ3BDLDRFQUFDbkIsd0VBQWM7WUFBQ29CLE9BQU8sRUFBRUEsT0FBTztZQUFFZSxXQUFXO3NCQUMzQyw0RUFBQzNCLGdGQUFtQjswQkFDbEIsNEVBQUNPLFNBQVM7b0JBQUUsR0FBR0MsU0FBUzs7Ozs7d0JBQUk7Ozs7O29CQUNSOzs7OztnQkFDUDs7Ozs7WUFDRSxDQUNyQjtDQUNIO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NvbGFuYS1jbGlja2VyLWdhbWUvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdhbGxldEFkYXB0ZXJOZXR3b3JrIH0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItYmFzZVwiO1xyXG5pbXBvcnQge1xyXG4gIENvbm5lY3Rpb25Qcm92aWRlcixcclxuICBXYWxsZXRQcm92aWRlcixcclxufSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEdsb3dXYWxsZXRBZGFwdGVyLFxyXG4gIFBoYW50b21XYWxsZXRBZGFwdGVyLFxyXG4gIFNsb3BlV2FsbGV0QWRhcHRlcixcclxuICBTb2xmbGFyZVdhbGxldEFkYXB0ZXIsXHJcbiAgVG9ydXNXYWxsZXRBZGFwdGVyLFxyXG4gIEJhc2VTb2xsZXRXYWxsZXRBZGFwdGVyLFxyXG4gIENsb3ZlcldhbGxldEFkYXB0ZXIsXHJcbiAgQ29pbjk4V2FsbGV0QWRhcHRlcixcclxuICBFeG9kdXNXYWxsZXRBZGFwdGVyLFxyXG5cclxufSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci13YWxsZXRzXCI7XHJcbmltcG9ydCB7IFdhbGxldE1vZGFsUHJvdmlkZXIgfSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aVwiO1xyXG5pbXBvcnQgeyBjbHVzdGVyQXBpVXJsIH0gZnJvbSBcIkBzb2xhbmEvd2ViMy5qc1wiO1xyXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Y29udmVydEFuaUJpbmFyeVRvQ1NTfSBmcm9tICdhbmktY3Vyc29yJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gVXNlIHJlcXVpcmUgaW5zdGVhZCBvZiBpbXBvcnQgc2luY2Ugb3JkZXIgbWF0dGVyc1xyXG5yZXF1aXJlKFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aS9zdHlsZXMuY3NzXCIpO1xyXG5yZXF1aXJlKFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCIpO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIC8vIENhbiBiZSBzZXQgdG8gJ2Rldm5ldCcsICd0ZXN0bmV0Jywgb3IgJ21haW5uZXQtYmV0YSdcclxuICBjb25zdCBuZXR3b3JrID0gV2FsbGV0QWRhcHRlck5ldHdvcmsuTWFpbm5ldDtcclxuXHJcbiAgLy8gWW91IGNhbiBhbHNvIHByb3ZpZGUgYSBjdXN0b20gUlBDIGVuZHBvaW50XHJcbiAgY29uc3QgZW5kcG9pbnQgPSB1c2VNZW1vKCgpID0+IGNsdXN0ZXJBcGlVcmwobmV0d29yayksIFtuZXR3b3JrXSk7XHJcblxyXG5cclxuXHJcbiAgLy8gQHNvbGFuYS93YWxsZXQtYWRhcHRlci13YWxsZXRzIGluY2x1ZGVzIGFsbCB0aGUgYWRhcHRlcnMgYnV0IHN1cHBvcnRzIHRyZWUgc2hha2luZyBhbmQgbGF6eSBsb2FkaW5nIC0tXHJcbiAgLy8gT25seSB0aGUgd2FsbGV0cyB5b3UgY29uZmlndXJlIGhlcmUgd2lsbCBiZSBjb21waWxlZCBpbnRvIHlvdXIgYXBwbGljYXRpb24sIGFuZCBvbmx5IHRoZSBkZXBlbmRlbmNpZXNcclxuICAvLyBvZiB3YWxsZXRzIHRoYXQgeW91ciB1c2VycyBjb25uZWN0IHRvIHdpbGwgYmUgbG9hZGVkXHJcbiAgY29uc3Qgd2FsbGV0cyA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PiBbXHJcbiAgICAgIG5ldyBQaGFudG9tV2FsbGV0QWRhcHRlcigpLFxyXG4gICAgICBuZXcgRXhvZHVzV2FsbGV0QWRhcHRlcih7bmV0d29ya30pLFxyXG4gICAgICBuZXcgR2xvd1dhbGxldEFkYXB0ZXIoKSxcclxuICAgICAgbmV3IFNsb3BlV2FsbGV0QWRhcHRlcigpLFxyXG4gICAgICBuZXcgU29sZmxhcmVXYWxsZXRBZGFwdGVyKHsgbmV0d29yayB9KSxcclxuICAgICAgbmV3IFRvcnVzV2FsbGV0QWRhcHRlcigpLFxyXG4gICAgICBuZXcgQ29pbjk4V2FsbGV0QWRhcHRlcih7bmV0d29ya30pLFxyXG4gICAgXSxcclxuICAgIFtuZXR3b3JrXVxyXG4gICk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGFwcGx5Q3Vyc29yKHNlbGVjdG9yOmFueSwgYW5pVXJsOmFueSkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhbmlVcmwpO1xyXG4gICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KGF3YWl0IHJlc3BvbnNlLmFycmF5QnVmZmVyKCkpO1xyXG4gIFxyXG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgc3R5bGUuaW5uZXJUZXh0ID0gY29udmVydEFuaUJpbmFyeVRvQ1NTKHNlbGVjdG9yLCBkYXRhKTtcclxuICBcclxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgXHJcbiAgICBhcHBseUN1cnNvcihcIiNjdXJcIiwgXCIvcGVvMTAyOS5hbmlcIilcclxuICAgICB9KVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb25uZWN0aW9uUHJvdmlkZXIgZW5kcG9pbnQ9e2VuZHBvaW50fT5cclxuICAgICAgPFdhbGxldFByb3ZpZGVyIHdhbGxldHM9e3dhbGxldHN9IGF1dG9Db25uZWN0PlxyXG4gICAgICAgIDxXYWxsZXRNb2RhbFByb3ZpZGVyPlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvV2FsbGV0TW9kYWxQcm92aWRlcj5cclxuICAgICAgPC9XYWxsZXRQcm92aWRlcj5cclxuICAgIDwvQ29ubmVjdGlvblByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwibmFtZXMiOlsiV2FsbGV0QWRhcHRlck5ldHdvcmsiLCJDb25uZWN0aW9uUHJvdmlkZXIiLCJXYWxsZXRQcm92aWRlciIsIkdsb3dXYWxsZXRBZGFwdGVyIiwiUGhhbnRvbVdhbGxldEFkYXB0ZXIiLCJTbG9wZVdhbGxldEFkYXB0ZXIiLCJTb2xmbGFyZVdhbGxldEFkYXB0ZXIiLCJUb3J1c1dhbGxldEFkYXB0ZXIiLCJDb2luOThXYWxsZXRBZGFwdGVyIiwiRXhvZHVzV2FsbGV0QWRhcHRlciIsIldhbGxldE1vZGFsUHJvdmlkZXIiLCJjbHVzdGVyQXBpVXJsIiwidXNlTWVtbyIsImNvbnZlcnRBbmlCaW5hcnlUb0NTUyIsInVzZUVmZmVjdCIsInJlcXVpcmUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm5ldHdvcmsiLCJNYWlubmV0IiwiZW5kcG9pbnQiLCJ3YWxsZXRzIiwiYXBwbHlDdXJzb3IiLCJzZWxlY3RvciIsImFuaVVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwiVWludDhBcnJheSIsImFycmF5QnVmZmVyIiwic3R5bGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJhdXRvQ29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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

/***/ "ani-cursor":
/*!*****************************!*\
  !*** external "ani-cursor" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("ani-cursor");

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