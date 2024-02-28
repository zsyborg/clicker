"use strict";
(() => {
var exports = {};
exports.id = 443;
exports.ids = [443];
exports.modules = {

/***/ 13:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 267:
/***/ ((module) => {

module.exports = require("nextjs-cors");

/***/ }),

/***/ 209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(960);
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(536);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(267);
/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nextjs_cors__WEBPACK_IMPORTED_MODULE_3__);
const MONGODB_URI = process.env.MONGODB_URI;




// const MONGODB_URI='mongodb+srv://techzasha:ridYVCRZnC5FUDr1@dharti.ctgvhra.mongodb.net/?retryWrites=true&w=majority'
async function listDatabases(client) {
    const db = client.db("Clicker");
    const coll = db.collection("Users");
    const items = coll.find();
    // console.log(items)
    return items;
}
async function handler(req, res) {
    await nextjs_cors__WEBPACK_IMPORTED_MODULE_3___default()(req, res, {
        // Options
        methods: [
            "GET",
            "HEAD",
            "PUT",
            "PATCH",
            "POST",
            "DELETE"
        ],
        origin: "*",
        optionsSuccessStatus: 200
    });
    const { method  } = req;
    await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    await _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
    switch(method){
        case "GET":
            var opts = {
                dbName: "Clicker"
            };
            try {
                const clt = new mongodb__WEBPACK_IMPORTED_MODULE_2__.MongoClient(MONGODB_URI);
                const huntCollection = clt.db("Clicker").collection("Users");
                const crd = await huntCollection.find({}).toArray();
                clt.close();
                res.status(200).json({
                    success: true,
                    data: crd
                });
            } catch (error) {
                res.status(400).json({
                    success: false
                });
            }
            break;
        case "POST":
            await nextjs_cors__WEBPACK_IMPORTED_MODULE_3___default()(req, res, {
                // Options
                methods: [
                    "GET",
                    "HEAD",
                    "PUT",
                    "PATCH",
                    "POST",
                    "DELETE"
                ],
                origin: "*",
                optionsSuccessStatus: 200
            });
            try {
                const clt = new mongodb__WEBPACK_IMPORTED_MODULE_2__.MongoClient(MONGODB_URI);
                const huntCollection = clt.db("Clicker").collection("Users");
                const curusr = req.body;
                console.log("Check " + curusr);
                const crd = await huntCollection.findOne({
                    wallet: req.body.wallet
                }, {
                    projection: {
                        _id: 0
                    }
                });
                clt.close();
                if (crd) {
                    res.status(201).json({
                        success: true,
                        data: crd
                    });
                } else {
                    res.status(201).json({
                        success: false,
                        data: false
                    });
                }
            } catch (error1) {
                res.status(400).json({
                    success: false
                });
            }
            break;
        default:
            res.status(400).json({
                success: false
            });
            break;
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [565], () => (__webpack_exec__(209)));
module.exports = __webpack_exports__;

})();