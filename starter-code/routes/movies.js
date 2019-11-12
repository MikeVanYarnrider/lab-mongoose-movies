const express = require("express");
const router = express.Router();
const Movies = require("../models/Movies");

router.get("/", (req, res, next) => {
  Movies.find({})
    .then(movies => {
      res.render("movies/index", { movies: movies });
      //next();
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/new", (req, res) => {
  res.render("movies/new.hbs");
  //   next();
});

router.post("/", (req, res) => {
  Movies.create({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  })
    .then(movies => {
      res.redirect("/movies");
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  Movies.findById(req.params.id)
    .then(movies => {
      res.render("movies/show", { movies });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id/edit", (req, res) => {
  res.render("movies/edit.hbs");
});

router.get("/movies/:id/edit", (req, res, next) => {
  // ???
  Movies.findById(req.params.id)
    .then(movies => {
      movies.updateOne({
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot
      });
      res.redirect("/movies");
      next();
      //   res.send("hi");
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id/delete", (req, res, next) => {
  // ????
  //res.send("here");
  Movies.findByIdAndRemove(req.params.id)
    .then(celebs => {
      res.redirect("/movies");
      next();
      //   res.send("hi");
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
