const express = require('express');
const router = express.Router();

const karyawanRouter = require("./karyawan");
router.use("/karyawan", karyawanRouter);

const departemenRouter = require("./departemen");
router.use("/departemen", departemenRouter);

const jabatanRouter = require("./jabatan");
router.use("/jabatan", jabatanRouter);

const gajiRouter = require("./gaji");
router.use("/gaji", gajiRouter);

const absensiRouter = require("./absensi");
router.use("/absensi", absensiRouter);

module.exports = router;