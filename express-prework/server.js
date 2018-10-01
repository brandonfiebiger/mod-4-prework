const express = require('express');
const app = express();
const sunset = 'http://en.es-static.us/upl/2013/09/sunrise-red-sea-Graham-Telford-e1489764712368.jpg'

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.use(express.static('public'));

app.use(urlLogger, timeLogger);

app.get('/json', (request, response) => {
  response.status(200).json({"name": "JunkleStein"});
});

app.get('/sunsets', (request, response) => {
  response.status(200).send(`<img src=${sunset} />`)
})

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});

app.use((request, response) => {
  response.status(404).send("Better luck next time buddy");
})

