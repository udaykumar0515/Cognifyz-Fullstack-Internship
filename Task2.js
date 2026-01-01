const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (CSS, JavaScript, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Serve the form HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Task2.html'));
});

// Handle form submission
app.post('/submit', (req, res) => {
  const {
    fname, lname, email, phone, address, country, otherCountry,
    education, educationStatus, day, month, year, skills, weeks, domain, resume
  } = req.body;

  // Validate only fname, lname, and email
  if (!fname || !lname || !email) {
    return res.status(400).send('Please fill all required fields (First Name, Last Name, and Email).');
  }

  // Validate email format
  if (!isValidEmail(email)) {
    return res.status(400).send('Invalid email format.');
  }

  // Prepare data to store
  const dataToStore = {
    fname, lname, email,
    phone, address, country, otherCountry,
    education, educationStatus, day, month, year,
    skills, weeks, domain, resume
  };

  // Store data
  storeData(dataToStore, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return res.status(500).send('An error occurred while storing the data.');
    }

    // Render result HTML with submitted details
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Submission Result</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 20px;
                  background-color: #f4f4f4;
              }
              .container {
                  max-width: 800px;
                  margin: 0 auto;
                  background-color: white;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
              }
              h1 {
                  text-align: center;
              }
              .details {
                  margin-bottom: 20px;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <h1>Submission Result</h1>
              <div class="details">
                  <p><strong>First Name:</strong> ${fname}</p>
                  <p><strong>Last Name:</strong> ${lname}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Phone:</strong> ${phone}</p>
                  <p><strong>Address:</strong> ${address}</p>
                  <p><strong>Country:</strong> ${country}</p>
                  <p><strong>Other Country:</strong> ${otherCountry}</p>
                  <p><strong>Education:</strong> ${education}</p>
                  <p><strong>Education Status:</strong> ${educationStatus}</p>
                  <p><strong>Date of Birth:</strong> ${day}/${month}/${year}</p>
                  <p><strong>Skills:</strong> ${skills}</p>
                  <p><strong>Available Weeks:</strong> ${weeks}</p>
                  <p><strong>Internship Domain:</strong> ${domain}</p>
                  <p><strong>Resume:</strong> ${resume}</p>
              </div>
              <button onclick="window.history.back()">Go Back</button>
          </div>
      </body>
      </html>
    `);
  });
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function storeData(data, callback) {
  fs.appendFile('submissions.txt', JSON.stringify(data) + '\n', callback);
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
