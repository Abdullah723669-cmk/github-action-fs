
// app.js

const express = require('express');
const app = express();
const port = 3000;

// Serve a simple HTML page
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Mamun's Demo App</title>
      </head>
      <body style="font-family: sans-serif; text-align: center;">
        <h1>Hello from Express.js! --mamun</h1>
        <p>This is a demo Node.js app with HTML response.</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
