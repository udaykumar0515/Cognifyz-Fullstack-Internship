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
  res.sendFile(path.join(__dirname, 'Task4.html'));
});

app.post('/submit', (req, res) => {
  const {
      fname, lname, email, phone, address, country, otherCountry,
      education, educationStatus, day, month, year, skills, weeks, domains, password
  } = req.body;

  // Validate only fname, lname, and email
  if (!fname || !lname || !email) {
      return res.status(400).send('Please fill all required fields (First Name, Last Name, and Email).');
  }

  // Validate email format
  if (!isValidEmail(email)) {
      return res.status(400).send('Invalid email format.');
  }

  // Prepare data for saving in the text file
  let dataToSave = `
  First Name: ${fname}
  Last Name: ${lname}
  Email: ${email}
  Phone: ${phone || 'N/A'}
  Address: ${address || 'N/A'}
  Country: ${country}
  ${otherCountry ? `Other Country: ${otherCountry}` : ''}
  Education: ${education || 'N/A'}
  Education Status: ${educationStatus || 'N/A'}
  Date of Birth: ${day}/${month}/${year}
  Skills: ${skills || 'N/A'}
  No of Weeks: ${weeks || 'N/A'}
  Internship Domain: ${domains || 'N/A'}
  Password:${password}
  `;

  // Store data
  storeData(dataToSave, (err) => {
      if (err) {
          console.error('Error writing to file:', err);
          return res.status(500).send('An error occurred while storing the data.');
      }

      // Render result HTML with submitted details, excluding password
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
                      margin: 20px;
                  }
                  h1 {
                      color: #333;
                  }
              </style>
          </head>
          <body>
              <h1>Submission Successful</h1>
              <p>Thank you for your submission. Here are the details you provided:</p>
              <p><strong>First Name:</strong> ${fname}</p>
              <p><strong>Last Name:</strong> ${lname}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
              <p><strong>Address:</strong> ${address || 'N/A'}</p>
              <p><strong>Country:</strong> ${country}</p>
              ${otherCountry ? `<p><strong>Other Country:</strong> ${otherCountry}</p>` : ''}
              <p><strong>Education:</strong> ${education || 'N/A'}</p>
              <p><strong>Education Status:</strong> ${educationStatus || 'N/A'}</p>
              <p><strong>Date of Birth:</strong> ${day}/${month}/${year}</p>
              <p><strong>Skills:</strong> ${skills || 'N/A'}</p>
              <p><strong>No of Weeks:</strong> ${weeks || 'N/A'}</p>
              <p><strong>Internship Domain:</strong> ${domains || 'N/A'}</p>
          </body>
          </html>
      `);
  });
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function storeData(data, callback) {
  fs.appendFile('submissions.txt', data + '\n', callback);
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
