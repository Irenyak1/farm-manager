// var express = require("express");
// var router = express.Router();
// var connection = require("../db/db");

// //Routes for advances
// router.get("/advances", function(req, res) {
//   var sql = "SELECT * FROM advance";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send(result);
//   });
// });

// router.post("/advances", function(req, res) {
//   console.log(req.body);
//   var data = {
//     date: req.body.date,
//     name: req.body.name,
//     gender: req.body.gender,
//     position: req.body.position,
//     status: req.body.status,
//     advanceamnt: req.body.advanceamnt,
//     description: req.body.description
//   };
//   var sql = "INSERT INTO advance SET ?";
//   db.query(sql, data, (err, result) => {
//     if (err) throw err;
//     // console.log(result);
//     console.log("Advance captured!");
//     res.send({
//       status: "Success!",
//       id: null,
//       date: req.body.date,
//       name: req.body.name,
//       gender: req.body.gender,
//       position: req.body.position,
//       status: req.body.status,
//       advanceamnt: req.body.advanceamnt,
//       description: req.body.description
//     });
//   });
// });

// module.exports = router;
