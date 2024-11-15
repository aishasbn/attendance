const express = require("express");
const router = express.Router();
const controller = require("../controllers/karyawan_controller");

router.post("/", controller.create);
router.put("/:id", controller.update);
router.get("/", controller.getAll);
router.delete("/:id", controller.remove);

module.exports = router;