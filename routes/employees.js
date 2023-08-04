// express router
const express = require("express");
const router = express.Router();
const { employeesController } = require("../controllers/employee");

router.get("/employees", employeesController);

module.exports = router;
