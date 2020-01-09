const express = require('express');
const compression = require('compression');
const bodyparser = require('body-parser');
const https = require('https');

const app = express();
app.use(compression());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get('/', function(req, res) {
    res.json({mensagem: "ok"});
});


app.get('/getFilmsByPlanetName', (req, res) => {
    const planetsearch_url = `https://swapi.co/api/planets`;
    https
      .get(planetsearch_url, res => {
        let data = "";
        res.on("data", d => {
          data += d;
        });
        res.on("end", () => {
          res.send('deu certo');
        });
      })
      .on("error", e => {
        res.send('deu errado');
      });
});

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});