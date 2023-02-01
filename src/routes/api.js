const router = require("express").Router();

router.get("/test", (req, res) => {
  res.send("Hello World! hi from api.js");
});

module.exports = router;
