const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

router.get("/page", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "page.html"));
});

router.post("/main", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/index.css">
        <title>This is a good image</title>
      </head>
      <body>
        look at my biceps:
        <img src="/memuscle.jpg" alt="biceps" style="width: 300px; height: 300px" />
        <div>
          <p>Nome: ${name}</p>
          <p>Email: ${email}</p>
        </div>
      </body>
    </html>
  `);
});

module.exports = router;
