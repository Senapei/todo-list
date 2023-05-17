import express from "express";
import * as path from "path";
import * as url from "url";

const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine", "ejs");

let listArray = [];

app.get("/", (req, res) => {
  let date = new Date();
  let options = { weekday: "long", day: "numeric" };

  let dayTitle = date.toLocaleDateString("GB", options);
  res.render("list", { date: dayTitle, items: listArray });
});

app.post("/", (req, res) => {
  let newItem = req.body.item;
  listArray.push(newItem);

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
