const os = require('os');
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use((req, res) => {
  const msg = (`<p>Hello World!</p><p>url: ${req.url}<br>host: ${os.hostname()}</p>`);
  res.send(msg);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

