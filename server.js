const express = require('express');
const compression = require('compression');
const bodyparser = require('body-parser');

app.use(compression());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get('/', function(req, res) {
    res.json({mensagem: "ok"});
});

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});