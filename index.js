const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/aboutme',(req, res) => {
  res.sendFile(__dirname + '/aboutme.html')
})

app.get('/pictures', (req, res) => {
  res.sendFile(__dirname + '/pictures.html')
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html')
})

app.listen(PORT, () => console.log(`Your Application is LIVE on localhost:${PORT}`))
