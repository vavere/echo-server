const os = require('os');
const express = require('express');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
const GREETING = process.env.GREETING || 'Hello World!';

// App
const app = express();
app.set('view engine', 'ejs');
app.use((req, res) => {
  res.render('index.ejs', {
    greeting: GREETING,
    ip: req.ip,
    url: req.url,
    host: os.hostname()
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

