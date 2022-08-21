const express = require("express");
const router = express.Router();

//Load the URL shortener Model
const ShortUrl = require("../../models/UrlShortener");

router.get("/", async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.send({ shortUrls: shortUrls });
});

router.post("/shortUrls", async (req, res) => {
  let short = await Math.random().toString(36).substring(2, 7);
  await ShortUrl.create({ full: req.body.fullUrl, short: short });

  res.redirect("/api/urls");
});

router.get("/:shortUrl", async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);

  shortUrl.clicks++;
  shortUrl.save();

  res.redirect(shortUrl.full);
});

module.exports = router;
