const express = require('express');
const app = express();
const port = 3000;

app.get('/api.movies', (request, response) => {
    response.send('Récupération de tous les films');
  });

app.get('/api.employee', (req, res) => {
    res.sendStatus(304);
  });

app.get('/api/employee?name=/:nom', (req, res) => {
    const id= req.params.nom
    res.status(404).send(`Impossible de récupérer l'employé`,nom);
  });

app.get('/api/movies/:id', (req, res) => {
    const id= req.params.id
    res.json({id:id});
  });

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});