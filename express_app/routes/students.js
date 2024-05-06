import express from 'express';
import fs from 'fs';
import prisma from '../models/db.js';

var router = express.Router();

/* GET students listing. */
router.get('/', async function(req, res, next) {
  const studentsRecord = await fs.readFileSync('./data/students.json', 'utf8');
  res.json({data: JSON.parse(studentsRecord)});
});

router.post('/', async function(req, res, next) {
  const studentData = req.body;
  await prisma.student.create({
    data: studentData
  });

  res.json(studentData);
});

export default router;
