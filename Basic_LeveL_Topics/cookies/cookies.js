// Install all required packages:
// npm i express cookie-parser helmet hpp express-mongo-sanitize multer

// Read this chat first to understand the signed and unsigned Cookie 
// https://chatgpt.com/share/693a5370-5028-8011-83e5-7bc65ef966b2

const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');
const multer = require('multer');

const app = express();

// ==========================
// 📌 Multer Setup (File Uploads Middleware)
// ==========================
const upload = multer({
  dest: 'uploads/', // folder where files will be saved
});

// ==========================
// 📌 Global Middlewares (Express 5 Safe)
// ==========================

// Parse incoming JSON payloads
app.use(express.json());

// Parse cookies
app.use(cookieParser("myNameIsRahulBishtAndThisIsMySecreatKey"));

// Add secure HTTP headers (CSP, XSS protection, etc.)
app.use(helmet());

// Sanitize data to prevent NoSQL Injection attacks (Express 5 Safe)
// app.use(
//   mongoSanitize({
//     replaceWith: '_',
//     onSanitize: ({ req, key }) => {
//       console.log(`Sanitized: ${key}`);
//     },
//     dryRun: true // <--- THIS prevents Express 5 crash
//   })
// );


// Prevent HTTP parameter pollution
app.use(hpp());

// ==========================
// 📌 Routes
// ==========================

// Basic Home Route
app.get('/unsignedCookie', (req, res) => {
  console.log('Home route hit');
  
//   Format of getting unsigned cookie is req.signedCookies.Cookie_Name
// if tempered on front End gives undefined value
  console.log(req.signedCookies.signedCookieFrontEnd)

  res.cookie("unSignedCookieFrontEnd","myNAmeIsRahul",{
    httpOnly: true,
    maxAge:1000 * 60 * 60
  })
  res.send('This is Unsigned Cookie');
});

app.get('/signedCookie', (req, res) => {
  console.log('Home route hit');
  res.cookie("signedCookieFrontEnd","myNAmeIsRahul",{
    httpOnly: true,
    signed:true,
    maxAge:1000 * 60 * 60
  })
  res.send('This is Signed Cookie!');
});

// File Upload Route Example
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully');
});

// ==========================
// 📌 Start Server
// ==========================
app.listen(3000, () => {
  console.log('🚀 Secure Express Server running on http://localhost:3000');
});

// Install all required packages again for reference:
// npm i express cookie-parser helmet hpp express-mongo-sanitize multer