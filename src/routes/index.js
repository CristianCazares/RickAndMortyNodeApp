const express = require("express");
const axios = require("axios");
const router = express.Router();
const { isLoggedIn } = require("../lib/auth");

const URL = "https://rickandmortyapi.com/api";
router.get("/", isLoggedIn, async (req, res) => {
  const END_POINT = `${URL}/character`;

  axios.get(END_POINT)
    .then(function (response) {
      //console.log(response.data.results)
      res.render("index.hbs", {
        data: response.data.results,
      });
    })
    .catch(function (error) {
      console.log(error);
      res.render("index.hbs", {
        error,
        data: [],
      });
    });
});

router.get("/location", isLoggedIn, async (req, res) => {
  const END_POINT = `${URL}/location`;

  axios.get(END_POINT).then((response) => {
    console.log(response.data.results[0]);
    res.render("location.hbs", {
      data: response.data.results,
    });
  }).catch((err) => {
    console.log(err);
    res.render("location.hbs", {
      err,
      data: [],
    });
  });
});

router.get("/episode", isLoggedIn, async (req, res) => {
  const END_POINT = `${URL}/episode`;

  axios.get(END_POINT).then((response) => {
    console.log(response.data.results[0]);
    res.render("episode.hbs", {
      data: response.data.results,
    });
  }).catch((err) => {
    console.log(err);
    res.render("episode.hbs", {
      err,
      data: [],
    });
  });
});

module.exports = router;
