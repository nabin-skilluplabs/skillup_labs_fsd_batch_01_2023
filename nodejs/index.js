// const express = require('express');
import express from 'express';
const app = express();
const port = 3009;

app.get('/', (req, res) =>{
    res.send('Hello world!');
} );

app.get('/followers', (req, res) => {
    res.send ('Getting followers from database');
});

app.listen(port, () => {
    console.log(`Example app is listenign on ${port}`);
});
