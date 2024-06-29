const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use port 3000 by default

// Middleware to parse JSON bodies
app.use(express.json());

const nodemailer = require('nodemailer');

// Create a Nodemailer transporter using your Gmail credentials
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'humaraapnaoffice@gmail.com',
    pass: 'Ishaan@02'
  }
});

// Define a route to handle form submissions
app.post('/submit-form', (req, res) => {
  // Extract form data from the request body
  const { name, email, message } = req.body;

  // Compose email message
  const mailOptions = {
    from: 'yourgmail@gmail.com',
    to: 'humaraappnaoffice@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.send('Form submitted successfully!');
    }
  });
});

// Route to handle GET requests to '/submit-form' endpoint
app.get('/submit-form', (req, res) => {
  res.send('This endpoint only accepts POST requests.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
