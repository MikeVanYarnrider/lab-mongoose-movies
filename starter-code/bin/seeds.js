// const celebrities = [
//   {
//     name: "Buzz Lightyear",
//     occupation: "actor",
//     catchPhrase: "To Infinity and Beyond"
//   },
//   {
//     name: "Tom Hanks",
//     occupation: "actor",
//     catchPhrase:
//       "My mama always said, 'Life was like a box of chocolates. You never know what you're gonna get.'"
//   },
//   {
//     name: "Colin Firth",
//     occupation: "actor",
//     catchPhrase:
//       "Because I am an Englishman I spent most of my life in a state of embarrassment"
//   }
// ];

// const mongoose = require("mongoose");
// const Celebrities = require("../models/Celebrities");

// Celebrities.insertMany(celebrities)
//   .then(celebs => {
//     console.log(`Success! ${celebs.length} celebs added!`);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// mongoose.connect("mongodb://localhost/starter-code");

const movies = [
  {
    name: "Toy Story 1",
    genre: "animation",
    plot:
      "Cupcake ipsum dolor sit amet apple pie cupcake danish. Fruitcake carrot cake sweet. Danish cake ice cream liquorice. Dragée chocolate cake jelly sweet brownie bear claw. Danish fruitcake soufflé. Jelly-o pudding donut chocolate bar cheesecake oat cake tootsie roll tart brownie. Jelly-o marzipan chocolate cake lollipop pastry. Bonbon topping lemon drops cake powder toffee soufflé tootsie roll jelly beans."
  },
  {
    name: "Toy Story 2",
    genre: "animation",
    plot:
      "Pudding topping brownie muffin cupcake chocolate cake cake cookie bear claw. Chupa chups cake sesame snaps chocolate bar pie. Chocolate bar candy carrot cake gummies sugar plum chupa chups marzipan chupa chups bonbon."
  },
  {
    name: "Toy Story 3",
    genre: "animation",
    plot:
      "Muffin croissant fruitcake sugar plum powder jelly-o gummies cookie. Cake cookie halvah carrot cake pastry bonbon marshmallow icing. Cheesecake biscuit sweet. Cake croissant muffin chocolate cake chocolate bar powder."
  }
];

const mongoose = require("mongoose");
const Movies = require("../models/Movies");

Movies.insertMany(movies)
  .then(movies => {
    console.log(`Success! ${movies.length} movies added!`);
  })
  .catch(err => {
    console.log(err);
  });

mongoose.connect("mongodb://localhost/starter-code");
