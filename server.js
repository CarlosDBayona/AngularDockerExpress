const express = require('express');
const path = require('path');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';


// App
const app = express();
app.use(express.static(path.join('bootsrap-lab')))

app.get('/*', (req, res) => {
  res.sendFile(__dirname, 'bootsrap-lab/index.html')
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`); 