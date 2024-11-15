const express = require("express");
const router = express.Router();
const controller = require("../controllers/absensi_controller");

router.get("/", controller.getAll);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);
router.post("/attendance-in/", controller.attendanceIn);
router.post("/attendance-out/", controller.attendanceOut);

module.exports = router;