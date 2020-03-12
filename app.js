const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World server');
});

app.get('/418', (req, res) => {
  res.set('X-custom-header', '418');
  res.status(418);
  res.send('This is a 418');
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
