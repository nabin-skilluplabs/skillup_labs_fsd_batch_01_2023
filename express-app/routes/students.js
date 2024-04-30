
import express from 'express';
var router = express.Router();

/* GET students listing. */
router.get('/', function(req, res, next) {
    const studentsRercord = [
        {
            name: 'Utsav Baral',
            email: 'baralutsav89@gmail.com',
            mobile: '0450609562',
            intro: 'Utsav is a very nice boy...'
        },

        {
            name: 'Ashish Roka',
            email: 'rokaAshish@gmail.com',
            mobile: '0450609545',
            intro: 'Ashish is a very nice boy...'
        },

        {
            name: 'Suraj Sharma',
            email: 'suraj89@gmail.com',
            mobile: '0450609561',
            intro: 'Suraj is a very nice boy...'
        }
    ]
  res.json({data: studentsRercord});
});

export default router; 