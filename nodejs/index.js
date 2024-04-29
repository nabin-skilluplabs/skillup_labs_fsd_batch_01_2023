import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
})
app.get('/users', (req, res) => {
    res.send('Getting user from database');
})
app.get('/followers', (req, res) => {
    res.send("Getting follower from database")
})

app.listen(port, () => {
    console.log(`Example app is listening on port ${port}`)
})