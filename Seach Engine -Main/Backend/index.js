const express = require('express');
const app = express();

var { exec } = require('child_process');

// Enable CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/', function(req, res) {
  // Extract any necessary data from the request, such as input parameters
  console.log("Happy");
  exec('python ./Flipkart_Scraper/Scraper.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    res.json({ result: stdout });
  });
});


app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
