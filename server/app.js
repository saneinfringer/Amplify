const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');

const app = express();
const musicRouter = require('./router/router');

// Allow your React dev origin
app.use(cors({ origin: 'http://localhost:3000' })); // or app.use(cors()) during dev

// Multer handles multipart, so express.json() is optional for this route
// app.use(express.json());

app.use('/', musicRouter);

const PORT = process.env.PORT || 8000; // make sure it’s 8000 if your client calls :8000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
