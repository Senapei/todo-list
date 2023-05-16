import express from "express";
import * as path from "path";
import * as url from "url";

const app = express();
const port = 3000;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("list");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
