var express = require("express");
var router = express.Router();
var connection = require("../db/db");

// /* GET home page. */
// router.get("/", function(req, res) {
//   res.render("index", { title: "Farm manager App" });
// });

// /* GET home page. */
// router.get("/", function(req, res, next) {
//   db.query("SELECT * FROM users ORDER BY id desc", function(err, rows) {
//     if (err) {
//       req.flash("error", err);
//       res.render("users", { page_title: "users - Node.js", data: "" });
//     } else {
//       res.render("users", {
//         page_title: "users - Node.js",
//         data: rows
//       });
//     }
//   });
// });
// module.exports = router;
