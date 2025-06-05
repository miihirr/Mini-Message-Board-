const express = require("express");
const app = express();
const port = 3000;
const path = require("node:path");
const db = require("./db/query")
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));



app.get("/", async(req, res) => {
  const messages=await db.getMessages()
  res.render("index", { messages });
});

app.get("/new", (req, res) => {
  res.render("form");
});

app.post("/new",async (req, res) => {
  let {user,text}=req.body
  await db.addMessage(user,text)
    res.redirect("/")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


