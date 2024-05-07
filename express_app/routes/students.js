import express from 'express';
import fs from 'fs';
import prisma from '../models/db.js';

var router = express.Router();

/* GET students listing. */
router.get('/', async function(req, res, next) {
  // const studentsRecord = await fs.readFileSync('./data/students.json', 'utf8');
  const studentsRecord = await prisma.student.findMany({
    orderBy: {
      id: 'desc',
    },
  });
  res.json({data: studentsRecord});
});


router.get('/:id', async function(req, res, next) {
  const id = req.params.id && parseInt(req.params.id);
  if(!id) {
    return res.status(404).send(`No student found`);
  }

  const existingStudent = await prisma.student.findUnique({where: {id }});
  if(!existingStudent) {
    return res.status(404).send(`No student found width id ${id}`);
  }
  res.json({data: existingStudent});
});


router.post('/', async function(req, res, next) {
  const studentData = req.body;
  const newStudent =   await prisma.student.create({
    data: studentData
  });

  res.json(newStudent);
});

router.patch('/:id', async function(req, res, next) {
  const studentData = req.body;
  const id = req.params.id && parseInt(req.params.id)
  const {id:_, ...data} = studentData; 
  if(!id) {
    return res.status(404).send(`No student found`);
  }

  const existingStudent = await prisma.student.findUnique({where: {id }});
  if(!existingStudent) {
    return res.status(404).send(`No student found width id ${id}`);
  }

  const updatedStudent = await prisma.student.update({
    where: { id },
    data
  });

  res.json(updatedStudent);

});

router.delete('/:id', async function(req, res, next) {
  const id = req.params.id && parseInt(req.params.id);
  if(!id) {
    return res.status(404).send(`No student found`);
  }

  const existingStudent = await prisma.student.findUnique({where: {id }});
  if(!existingStudent) {
    return res.status(404).send(`No student found width id ${id}`);
  }

  await prisma.student.delete({
    where: { id }
  });

  res.status(204);
});

export default router;
