const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "99 Bottles of water on the wall." +
      "<br/>" +
      '<a href="/98"> take one down pass it around </a>'
  );
});

app.get("/:number_of_bottles", (req, res) => {
  const numBottles = req.params.number_of_bottles;
  if (numBottles > 0) {
    res.send(
      numBottles +
        "  Bottles of water on the wall." +
        "<br/>" +
        '<a href="/' +
        (numBottles - 1) +
        '" > take one down pass it around </a>'
    );
  } else {
    res.send(
      "No water bottles on the wall." + "<br/>" + '<a href="/"> Start over</a>'
    );
  }
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
