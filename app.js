const express = require('express')
const app = express()
const port = 3000
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render('index',{id:20})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
