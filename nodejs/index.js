import express from express;

const app = express();
const port = 3000;
app.get('/', (req, res) =>{
    res.send('Hello World!')
});


app.listen(port, () =>{
    console.log(`Example app is listening on port ${port}`)
})
app.get('/followers', (req, res) =>{
    res.send('Getting followers from database');
})