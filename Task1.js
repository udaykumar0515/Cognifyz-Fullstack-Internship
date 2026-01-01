const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve the EJS template
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Task1.html'));
});

// Handle form submissions
app.post('/submit', (req, res) => {
    // Access form data
    const formData = req.body;

    // Log form data to the console (you can process it as needed)
    console.log(formData);

    // Send a response back to the client
    res.send('Form submitted successfully!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
