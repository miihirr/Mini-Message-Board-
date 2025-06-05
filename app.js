const express = require("express");
const app = express();
const port = 3000;
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.get("/", (req, res) => {
  res.render("index", { messages });
});

app.get("/new", (req, res) => {
  res.render("form");
});
app.post("/new", (req, res) => {
  let data=req.body
  messages.push({ text: data.text,
    user: data.user,
    added: new Date(),})
    res.redirect("/")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


