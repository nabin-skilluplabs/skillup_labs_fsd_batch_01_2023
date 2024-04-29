import express from 'express';


const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.post('/users', (req, res) => {
    res.send('Getting users from database');
});

app.get('/followers', (req, res) => {
    res.send('Getting followers from database');
});


app.listen(port, () => {
    console.log(`Example app is listening on port ${port}`)
});
