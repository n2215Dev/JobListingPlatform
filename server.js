const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

console.log("localhost", host);

app.get('/health', (req, res) => {
    res.json({
        service: "Job Listing Backend API Server",
        status: "true",
        time: new Date(),
    });
});

app.listen(port, () => {
    console.log(`Backend server running successfully at http://${host}:${port}`);
})