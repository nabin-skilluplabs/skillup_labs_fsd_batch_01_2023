import express from 'express'
var router= express.Router();
import prisma from '../models/db.js'

/* GET Students listing. */

   
    /* Get router listing */
    router.get('/', async function (req, res, next){
        const studentsRecord = await prisma.student.findMany();
        res.json({data: studentsRecord});
    });

    router.get('/:id', async function (req, res, next){
        const id = req.params.id && parseInt(req.params.id);
        if(!id){
            return res.status(404).send(`No student found`);
        }
        const existingStudnet = await prisma.student.findUnique({where: {id }});
        if(!existingStudnet) {
            return res.status(404).send(`NO student found with id ${id} `)
        };
        res.json({data: existingStudnet});
    })
  




router.post('/', async function(req, res, next){
    const studentData = req.body;
    const newStudent = await prisma.student.create({
        data: studentData
    })

    res.json({newStudent})
});
router.patch('/', async function (req, res, next){
    const studentData = req.body;
    const id = req.params.id && parseInt(req.params.id);
    const { id:_, ...data} = studentData;
    if(!id) {
      return res.status(404).send(`NOt student found`);

    }
    const existingStudnet = await prisma.student.findUnique({where: {id}});
    if(!existingStudnet){
        return res.status(404).send(`no student found with id  ${id}`);
    }
    const updatedStudent = await prisma.student.update({
        where: {id},
        data
    })
    res.json(updatedStudent);


})

router.delete('/:id', async function (req, res, next){
    const id = req.params.id && parseInt(req.params.id);
    if(!id){
        return res.status(404).send(`NOt student found`);
    }

    const existingStudnet = await prisma.student.findUnique({where: {id}});
    if(!existingStudnet){
        return res.status(404).send(`no student found with id  ${id}`);
    }
    await prisma.student.delete({
        where: { id }
    });
    res.status(204).send(`Student deleted with id ${id}`);

    res.json({})
})
export default router