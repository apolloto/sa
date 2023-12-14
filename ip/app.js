const express = require("express");
const path = require("path");
const app = express();

// Serve HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Serve JavaScript file
app.get("/script.js", (req, res) => {
  res.sendFile(path.join(__dirname, "script.js"));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Route to get IP address
app.get("/get-ip", (req, res) => {
  const userIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  res.send(userIp);
});
