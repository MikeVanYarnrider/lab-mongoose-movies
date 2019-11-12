const express = require("express");
const router = express.Router();
const Celebrities = require("../models/Celebrities");

router.get("/", (req, res, next) => {
  Celebrities.find({})
    .then(celebs => {
      res.render("celebrities/index", { celebrities: celebs });
      //next();
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new.hbs");
  // next();
  //   res.send("hi");
});

router.get("/:id", (req, res, next) => {
  Celebrities.findById(req.params.id)
    .then(celebs => {
      res.render("celebrities/show.hbs", { celebrities: celebs });
      // next();
      //   res.send("hi");
    })
    .catch(err => {
      console.log(err);
    });
  console.log(req.params.id);
});

router.post("/", (req, res) => {
  Celebrities.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(celebs => {
      res.redirect("/celebrities");
      // next();
      //   res.send("hi");
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id/edit", (req, res) => {
  res.render("celebrities/edit.hbs");
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  // ???
  Celebrities.findById(req.params.id)
    .then(celebs => {
      celebs.updateOne({
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
      });
      res.redirect("/celebrities");
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
  Celebrities.findByIdAndRemove(req.params.id)
    .then(celebs => {
      res.redirect("/celebrities");
      next();
      //   res.send("hi");
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
