const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.listen(port, () => {
    console.log(`Backend server running successfully at http://${host}:${port}`);
})