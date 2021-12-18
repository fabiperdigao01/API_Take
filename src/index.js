// create an express app
const fetch = require("isomorphic-fetch");
const express = require("express");
const app = express();

// define the first route
app.get("/", async (req, res) => {
  const url =
    "https://api.github.com/search/repositories?q=user:takenet+language:csharp&sort=updated&order=asc";

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // SUA LOGICA PODE FICAR AQUI
      res.send(data);
    });
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
