// server/app.js

const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// File upload endpoint
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  // Simulate AI processing by copying file to processed folder
  const processedFilePath = `processed/${req.file.filename}`;
  fs.copyFile(req.file.path, processedFilePath, (err) => {
    if (err) {
      return res.status(500).send("Error processing file.");
    }
    res.json({ filePath: req.file.filename });
  });
});

app.use('/processed', express.static('processed'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
