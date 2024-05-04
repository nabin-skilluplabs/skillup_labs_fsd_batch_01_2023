import express from 'express'
var router= express.Router();

/* GET Students listing. */
router.get('/', function(req, res, next) {
    const studentsRecord = [
        {
            name: 'Suraj Sharma',
            email: 'surajsharma@gmail.com', 
            mobile: '0450713283',
            intro: 'Suraj is a nice guy'
        },
        {
            name: 'Utsav Sharma',
            email: 'utsav@gmail.com', 
            mobile: '0450713283',
            intro: 'utasv is a nice guy'
        },
        {
            name: 'Aashish Sharma',
            email: 'utsav@gmail.com', 
            mobile: '0450713283',
            intro: 'Suraj is a nice guy'
        },
        {
            name: 'John  Cena',
            email: 'utsav@gmail.com', 
            mobile: '0450713283',
            intro: 'Suraj is a nice guy'
        },
        {
            name: 'Andrew Jackson',
            email: 'utsav@gmail.com', 
            mobile: '0450713283',
            intro: 'Suraj is a nice guy'
        }
    ]
  res.json({data: studentsRecord});
});


export default router