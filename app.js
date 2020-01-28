const express = require('express');
const { createServer } = require('http');
const app = express();
const DB = require("./models");
const Podcast = DB.podcast;

app.get("/:path", async (req, res) => {
  const { path } = req.params;
  const podcast = await Podcast.findOne({ where: { path }});
  if (podcast) {
    res.redirect(`https://rekr.app/podcast/${podcast.slug}`);
  } else {
    res.sendStatus(404);
  };
});

const httpServer = createServer(app);


httpServer.listen(process.env.PORT || 3001, () => {
  console.log("server ready");
});
