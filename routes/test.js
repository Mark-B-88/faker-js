// express router
const express = require("express");
const router = express.Router();
const { testMessageController } = require("../controllers/test");

router.get("/test", testMessageController);

module.exports = router;
