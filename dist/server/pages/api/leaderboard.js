"use strict";
(() => {
var exports = {};
exports.id = 352;
exports.ids = [352];
exports.modules = {

/***/ 13:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(960);
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(536);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);

// const MONGODB_URI = process.env.MONGODB_URI!


// const MONGODB_URI='mongodb+srv://techzasha:ridYVCRZnC5FUDr1@dharti.ctgvhra.mongodb.net/?retryWrites=true&w=majority'
const MONGODB_URI = "mongodb+srv://indigoinsaan:RFbSu1c7gSBJCCm4@clicker.jnlxn1y.mongodb.net/?retryWrites=true&w=majority";
async function listDatabases(client) {
    const db = client.db("Grimace");
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
        case "GET":
            var opts = {
                dbName: "Grimace"
            };
            try {
                const clt = new mongodb__WEBPACK_IMPORTED_MODULE_2__.MongoClient(MONGODB_URI);
                const leaderboard = clt.db("Grimace").collection("Users");
                const topUsers = await leaderboard.find().sort({
                    score: -1
                }).limit(3).toArray();
                console.log("Top 10 users:", topUsers);
                clt.close();
                res.status(200).json({
                    success: true,
                    data: topUsers
                });
            } catch (error) {
                res.status(400).json({
                    success: false
                });
            }
            break;
        case "POST":
            break;
        case "PATCH":
            try {
                const clt = new mongodb__WEBPACK_IMPORTED_MODULE_2__.MongoClient(MONGODB_URI);
                const huntCollection = clt.db("Grimace").collection("Users");
                const crd = await huntCollection.updateOne({
                    username: req.body.username
                }, {
                    $set: {
                        score: req.body.score
                    }
                });
                // const card = await Card.create(
                //   req.body
                // ) 
                clt.close();
                res.status(201).json({
                    success: true,
                    data: crd
                });
            } catch (error1) {
                console.log(error1);
                res.status(400).json({
                    success: false,
                    error: error1
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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [565], () => (__webpack_exec__(529)));
module.exports = __webpack_exports__;

})();