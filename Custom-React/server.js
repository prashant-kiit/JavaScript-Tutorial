import express from 'express';

const app = express();
const port = 3000;

// Serve static files from "public" folder
app.use(express.static('public'));

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});