import { Prisma } from "@prisma/client";
import express from "express";
import fs from "fs";

var router = express.Router();

/* GET students listing. */
router.get("/", async function (req, res, next) {
  const studentsRercord = await fs.readFileSync(
    "./data/students.json",
    "utf-8"
  );
  res.json({ data: JSON.parse(studentsRercord) });
});

router.post("/", async function (req, res, next) {
  const studentData = req.body;
});

export default router;
