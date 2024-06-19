const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes for different project pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
  
app.get('/stuffivesnapped', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'photography.html'));
});

app.get('/stuffivesnapped/:albumName', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'stuffivesnapped.html'));
});  


app.get('/stuffivemade', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'project2.html'));
});

app.get('/stuffiveblogged', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'project3.html'));
});

app.get('/stuffivecoded', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'project3.html'));
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
