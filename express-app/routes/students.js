import express from "express";
import fs from "fs";
import prisma from "../models/db.js";

var router = express.Router();

/* GET students listing. */
router.get("/", async function (req, res, next) {
  // const studentsRercord = await fs.readFileSync(
  //   "./data/students.json",
  //   "utf-8"
  // );
  const studentsRecord = await prisma.student.findMany();
  res.json({ data: studentsRecord });
});

router.get("/:id", async function (req, res, next) {
  const studentData = req.body;
  const id = req.params.id && parseInt(req.params.id);

  const { id_, ...data } = studentData;
  if (!id) {
    return res.status(404).send(`No student found`);
  }

  const existingStudent = await prisma.student.findUnique({ where: { id } });
  if (!existingStudent) {
    return res.status(404).send(`No student found with id ${id}`);
  }

  res.json(existingStudent);
});

router.post("/", async function (req, res, next) {
  const studentData = req.body;
  const newStudent = await prisma.student.create({
    data: studentData,
  });

  res.json(newStudent);
});

router.patch("/:id", async function (req, res, next) {
  const studentData = req.body;
  const id = req.params.id && parseInt(req.params.id);

  const { id_, ...data } = studentData;
  if (!id) {
    return res.status(404).send(`No student found`);
  }

  const existingStudent = await prisma.student.findUnique({ where: { id } });
  if (!existingStudent) {
    return res.status(404).send(`No student found with id ${id}`);
  }

  const updatedStudent = await prisma.student.update({
    where: { id },
    data,
  });
  res.json(updatedStudent);
});

router.delete("/:id", async function (req, res, next) {
  const id = req.params.id && parseInt(req.params.id);
  if (!id) {
    return res.status(404).send(`No student found with id ${id}`);
  }

  await prisma.student.delete({
    where: { id },
  });

  res.status(204).send(`Student deleted with id ${id}`);
});

export default router;
