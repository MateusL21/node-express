const express = require("express");
const app = express();
const path = require("path");
const routes = require("./middleware/router");

const port = 5000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Todas as rotas começam com /me
app.use("/me", routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
