import express from 'express';
import fs from 'fs';

var router = express.Router();

/* GET students listing. */
router.get('/', async function(req, res, next) {
  const studentsRecord = await fs.readFileSync('./data/students.json', 'utf8');
  res.json({data: JSON.parse(studentsRecord)});
});

export default router;
