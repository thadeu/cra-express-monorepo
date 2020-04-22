var express = require("express");
var router = express.Router();
var common = require("@study-workspaces/common");

/* GET users listing. */
router.get("/", common.auth, function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
