const db = require("../models");

// Defining methods for the booksController
module.exports = {
  //gets all books and sorts them by decending order and returns them as json.  Catches error and returns status 422 if there's an error.
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //gets a single book by id and returns it as a json object.  Returns status 422 if there's an error.
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //create takes in the properties defined in the book model (in req.body) and saves it to the database as a json object.
  create: function(req, res) {
    console.log(req.body);
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //removes a saved book from the database getting it by its ID.
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};