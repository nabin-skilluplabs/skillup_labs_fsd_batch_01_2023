import express from 'express';
var router = express.Router();

/* GET students listing. */
router.get('/', function(req, res, next) {
  const studentsRecord = [
    {
        name: 'Utsav Baral',
        email: 'utsav@gmail.com',
        mobile: '0420300453',
        intro: 'Utsav is a very nice guy..'
    },
    {
        name: 'Aashish Roka',
        email: 'aashish@gmail.com',
        mobile: '0420300123',
        intro: 'Aashish is a very nice guy..'
    },
    {
        name: 'Suraj Sharma',
        email: 'suraj@gmail.com',
        mobile: '0420300456',
        intro: 'Suraj is a very nice guy..'
    }
  ];
  res.json({data: studentsRecord});
});

export default router;
