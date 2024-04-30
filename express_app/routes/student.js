import express from 'express';
var router = express.Router();

const studentsDetails = [
    {
        name: 'Aashish Roka',
        email: 'aashish.roka64@gmail.com',
        mobile: '0450592357'
    },
    {
        name: 'Aashish Roka',
        email: 'aashish.roka64@gmail.com',
        mobile: '0450592357'
    },
    {
        name: 'Aashish Roka',
        email: 'aashish.roka64@gmail.com',
        mobile: '0450592357'
    }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(studentsDetails);
});

export default router;