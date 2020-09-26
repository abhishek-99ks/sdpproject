// server app
const express = require('express');
const http = require('http');
const path = require('path');

// instantiate
const app = new express();

const port = 3000


app.get('/hello', (req, res) => {
    res.send("Hello World");
})

app.listen(port, (err) => {
    if(err){
        console.log("Server could not connect");
    } else {
        console.log("Server running at port: "+port);
    }
});
