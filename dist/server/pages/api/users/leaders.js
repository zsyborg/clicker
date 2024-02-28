"use strict";
(() => {
var exports = {};
exports.id = 899;
exports.ids = [899];
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

/***/ 513:
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
// const MONGODB_URI='mongodb+srv://indigoinsaan:RFbSu1c7gSBJCCm4@clicker.jnlxn1y.mongodb.net/?retryWrites=true&w=majority'
async function listDatabases(client) {
    const db = client.db("Clicker");
    const coll = db.collection("Users");
    const items = coll.find();
    // console.log(items)
    return items;
}
async function handler(req, res) {
    const { method  } = req;
    await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    await _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
    switch(method){
        ////////////////////////
        /////GET All Users Details 
        ////////////////////////
        case "GET":
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
            var opts = {
                dbName: "Clicker"
            };
            try {
                const clt = new mongodb__WEBPACK_IMPORTED_MODULE_2__.MongoClient(MONGODB_URI);
                const huntCollection = clt.db("Clicker").collection("Users");
                const crd = await huntCollection.find().sort({
                    clicks: -1
                }).toArray();
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
        ////////////////////////
        // POST - Create New User
        //////////////////////// 
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
            const clt = new mongodb__WEBPACK_IMPORTED_MODULE_2__.MongoClient(MONGODB_URI);
            const huntCollection = clt.db("Clicker").collection("Users");
            const curruser = JSON.stringify(req.body);
            const usr = JSON.parse(curruser);
            const wlt = usr.wallet;
            // const getAllUsers = await huntCollection.findOne({ wallet: wlt }, { projection: { _id: 0 } })
            // Check if the user already exists
            const existingUser = await huntCollection.findOne({
                wallet: wlt
            });
            if (existingUser) {
                res.status(201).json({
                    success: true,
                    data: "exists"
                });
                clt.close();
            } else {
                const crd = await huntCollection.insertOne(req.body);
                res.status(201).json({
                    success: true,
                    data: crd
                });
            }
            break;
        ////////////////////////
        // PATCH - Update User Click score
        //////////////////////// 
        case "PATCH":
            await nextjs_cors__WEBPACK_IMPORTED_MODULE_3___default()(req, res, {
                // Options
                methods: [
                    "PATCH"
                ],
                origin: "*",
                optionsSuccessStatus: 200
            });
            const clty = new mongodb__WEBPACK_IMPORTED_MODULE_2__.MongoClient(MONGODB_URI);
            const usrCollection = clty.db("Clicker").collection("Users");
            const currusr = JSON.stringify(req.body);
            const usry = JSON.parse(currusr);
            const wlty = usry.wallet;
            const ucl = JSON.stringify(req.body);
            const cl = JSON.parse(ucl);
            const userclicks = cl.clicks;
            console.log(wlty);
            const patchUserClick = await usrCollection.updateOne({
                wallet: wlty
            }, {
                $set: {
                    clicks: userclicks
                }
            });
            res.status(200).json({
                success: true,
                data: patchUserClick
            });
            clty.close();
        // Default if all others fail
        default:
            res.status(400).json({
                success: false,
                data: "Default Output"
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
var __webpack_exports__ = __webpack_require__.X(0, [565], () => (__webpack_exec__(513)));
module.exports = __webpack_exports__;

})();