var express = require("express");
var router = express.Router();
var db = require("../db/db");

/* GET home page. */
router.get("/", function(req, res, next) {
  connection.query("SELECT * FROM employees ORDER BY id desc", function(
    err,
    rows
  ) {
    if (err) {
      req.flash("error", err);
      res.render("employees", { page_title: "Employees - Node.js", data: "" });
    } else {
      res.render("employees", {
        page_title: "Employees - Node.js",
        data: rows
      });
    }
  });
});

// SHOW ADD EMPLOYEE FORM
router.get("/add", function(req, res, next) {
  // render to views/user/add.ejs
  res.render("employees/add", {
    title: "Add New Employee",
    name: "",
    email: ""
  });
});

// ADD NEW EMPLOYEE POST ACTION
router.post("/add", function(req, res, next) {
  req.assert("name", "Name is required").notEmpty(); //Validate name
  req.assert("email", "A valid email is required").isEmail(); //Validate email

  ///////more fields here

  var errors = req.validationErrors();

  if (!errors) {
    //No errors were found.  Passed Validation!

    var user = {
      name: req
        .sanitize("name")
        .escape()
        .trim(),
      email: req
        .sanitize("email")
        .escape()
        .trim()
    };

    connection.query("INSERT INTO employees SET ?", user, function(
      err,
      result
    ) {
      //if(err) throw err
      if (err) {
        req.flash("error", err);

        // render to views/user/add.ejs
        res.render("employees/add", {
          title: "Add New Employee",
          name: user.name,
          email: user.email
        });
      } else {
        req.flash("success", "Data added successfully!");
        res.redirect("/employees");
      }
    });
  } else {
    //Display errors to user
    var error_msg = "";
    errors.forEach(function(error) {
      error_msg += error.msg + "<br>";
    });
    req.flash("error", error_msg);

    /**
     * Using req.body.name
     * because req.param('name') is deprecated
     */

    res.render("employees/add", {
      title: "Add New Employee",
      name: req.body.name,
      email: req.body.email
    });
  }
});

// SHOW EDIT EMPLOYEE FORM
router.get("/edit/(:id)", function(req, res, next) {
  connection.query(
    "SELECT * FROM employees WHERE id = " + req.params.id,
    function(err, rows, fields) {
      if (err) throw err;

      // if employee not found
      if (rows.length <= 0) {
        req.flash("error", "employee not found with id = " + req.params.id);
        res.redirect("/employees");
      } else {
        // if employee found
        // render to views/user/edit.ejs template file
        res.render("employees/edit", {
          title: "Edit Employee",
          //data: rows[0],
          id: rows[0].id,
          name: rows[0].name,
          email: rows[0].email
        });
      }
    }
  );
});

// EDIT EMPLOYEE POST ACTION
router.post("/update/:id", function(req, res, next) {
  req.assert("name", "Name is required").notEmpty(); //Validate name
  req.assert("email", "A valid email is required").isEmail(); //Validate email

  /////more fields required

  var errors = req.validationErrors();

  if (!errors) {
    var user = {
      name: req
        .sanitize("name")
        .escape()
        .trim(),
      email: req
        .sanitize("email")
        .escape()
        .trim()
    };

    connection.query(
      "UPDATE employees SET ? WHERE id = " + req.params.id,
      user,
      function(err, result) {
        //if(err) throw err
        if (err) {
          req.flash("error", err);

          // render to views/user/add.ejs
          res.render("employees/edit", {
            title: "Edit Employee",
            id: req.params.id,
            name: req.body.name,
            email: req.body.email
          });
        } else {
          req.flash("success", "Data updated successfully!");
          res.redirect("/employee");
        }
      }
    );
  } else {
    //Display errors to user
    var error_msg = "";
    errors.forEach(function(error) {
      error_msg += error.msg + "<br>";
    });
    req.flash("error", error_msg);

    /**
     * Using req.body.name
     * because req.param('name') is deprecated
     */

    res.render("employees/edit", {
      title: "Edit Employee",
      id: req.params.id,
      name: req.body.name,
      email: req.body.email
    });
  }
});

// DELETE USER
router.get("/delete/(:id)", function(req, res, next) {
  var user = { id: req.params.id };

  connection.query(
    "DELETE FROM employees WHERE id = " + req.params.id,
    user,
    function(err, result) {
      //if(err) throw err
      if (err) {
        req.flash("error", err);
        // redirect to users list page
        res.redirect("/employees");
      } else {
        req.flash(
          "success",
          "Employee deleted successfully! id = " + req.params.id
        );
        // redirect to users list page
        res.redirect("/employees");
      }
    }
  );
});

module.exports = router;
