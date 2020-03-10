// var express = require("express");
// var router = express.Router();
// var connection = require("../db/db");

// //Routes for requisition
// router.get("/payroll", function(req, res) {
//   var sql = "SELECT * FROM payroll";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send(result);
//   });
// });

// router.post("/payroll", function(req, res) {
//   console.log(req.body);
//   var data = {
//     date: req.body.date,
//     name: req.body.name,
//     gender: req.body.gender,
//     position: req.body.position,
//     status: req.body.status,
//     paymode: req.body.paymode,
//     salaryamnt: req.body.salaryamnt,
//     paye: req.body.paye,
//     nssf1: req.body.nssf1,
//     nssf2: req.body.nssf2,
//     tax: req.body.tax,
//     lst: req.body.lst,
//     advance: req.body.advance,
//     netpay: req.body.netpay,
//     total: req.body.total
//   };
//   var sql = "INSERT INTO payroll SET ?";
//   db.query(sql, data, (err, result) => {
//     if (err) throw err;
//     // console.log(result);
//     console.log("payroll captured!");
//     res.send({
//       status: "Success!",
//       id: null,
//       date: req.body.date,
//       name: req.body.name,
//       gender: req.body.gender,
//       position: req.body.position,
//       status: req.body.status,
//       paymode: req.body.paymode,
//       salaryamnt: req.body.salaryamnt,
//       paye: req.body.paye,
//       nssf1: req.body.nssf1,
//       nssf2: req.body.nssf2,
//       tax: req.body.tax,
//       lst: req.body.lst,
//       advance: req.body.advance,
//       netpay: req.body.netpay,
//       total: req.body.total
//     });
//   });
// });

// module.exports = router;
