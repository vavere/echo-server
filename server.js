const os = require('os');
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const GREETING = 'Hello World!'

// App
const app = express();
app.use((req, res) => {
  const msg = (`<p>${GREETING}</p><p>ip: ${req.ip}<br/>url: ${req.url}<br/>host: ${os.hostname()}</p>\n`);
  res.send(msg);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

