const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Cyber Anime Portfolio',
        projects: [] // We'll add projects data later
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
