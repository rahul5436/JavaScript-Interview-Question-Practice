// ----------------------------------------------
// 📦 Install all required packages:
// npm i express cookie-parser helmet hpp express-mongo-sanitize multer
// ----------------------------------------------

// Read this chat first to understand Signed vs Unsigned Cookies
// https://chatgpt.com/share/693a5370-5028-8011-83e5-7bc65ef966b2

const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');
const multer = require('multer');

const app = express();

// =====================================================
// 📌 Multer Setup — Middleware for File Upload Handling
// =====================================================

// multer() creates a file-handling middleware.
// "dest" means all uploaded files will be stored in /uploads folder.
const upload = multer({
  dest: 'uploads/', // Temporary directory for uploaded files
});

// =====================================================
// 📌 Global Middlewares (Safe for Express 5)
// =====================================================

// Middleware to parse JSON bodies sent from frontend
app.use(express.json());

// Parse cookies from "Cookie:" header.
// Passing a secret enables SIGNED cookie reading & verification.
app.use(cookieParser("myNameIsRahulBishtAndThisIsMySecreatKey"));

// Adds multiple security headers:
// - Prevents XSS
// - Prevents MIME sniffing
// - Adds CSP
// - Secures app from common HTTP vulnerabilities
app.use(helmet());

// -----------------------------------------------------
// ❗ EXPRESS 5 ISSUE: express-mongo-sanitize mutates req.query
// so using it directly causes: 
// "TypeError: Cannot set property query ... has only getter"
// -----------------------------------------------------
// To safely use mongoSanitize in Express 5, enable dryRun:true.
// This logs sanitization without modifying the request object.
// -----------------------------------------------------

// app.use(
//   mongoSanitize({
//     replaceWith: '_',
//     onSanitize: ({ req, key }) => {
//       console.log(`Sanitized: ${key}`);
//     },
//     dryRun: true // IMPORTANT: prevents crashing in Express 5
//   })
// );

// Prevents HTTP Parameter Pollution attacks like:
// /route?role=admin&role=user
// Ensures only the last value is accepted.
app.use(hpp());

// =====================================================
// 📌 Routes
// =====================================================

// ----------------------------------------------
// UNSIGNED COOKIE ROUTE
// ----------------------------------------------
app.get('/unsignedCookie', (req, res) => {
  console.log('Unsigned Cookie Route Hit');

  // ❗ Unsigned cookies are accessed via: req.cookies
  // Signed cookies DO NOT appear here.

  // For reference: Signed cookies appear in req.signedCookies
  console.log(req.signedCookies.signedCookieFrontEnd); 
  // If the client modifies a SIGNED cookie, signature breaks → undefined

  // Create an UNSIGNED cookie
  res.cookie("unSignedCookieFrontEnd", "myNAmeIsRahul", {
    httpOnly: true,     // Cannot be accessed via JS (Prevents XSS attacks)
    maxAge: 1000 * 60 * 60, // 1-hour expiry
  });

  res.send('This is Unsigned Cookie');
});

// ----------------------------------------------
// SIGNED COOKIE ROUTE
// ----------------------------------------------
app.get('/signedCookie', (req, res) => {
  console.log('Signed Cookie Route Hit');

  // Create a SIGNED cookie
  res.cookie("signedCookieFrontEnd", "myNAmeIsRahul", {
    httpOnly: true,
    signed: true,        // Enables signing → prevents tampering
    maxAge: 1000 * 60 * 60,
  });

  res.send('This is Signed Cookie!');
});

// ----------------------------------------------
// FILE UPLOAD ROUTE
// ----------------------------------------------
// upload.single('file') means:
// - Expect one file
// - Field name must be "file"
// - multer parses multipart/form-data and puts file in req.file
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully');
});

// =====================================================
// 📌 Start Server
// =====================================================
app.listen(3000, () => {
  console.log('🚀 Secure Express Server running on http://localhost:3000');
});

// ----------------------------------------------
// 📦 Install all required packages again for reference:
// npm i express cookie-parser helmet hpp express-mongo-sanitize multer
// ----------------------------------------------
