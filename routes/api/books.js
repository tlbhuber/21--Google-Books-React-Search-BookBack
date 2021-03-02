const router = require("express").Router();
const booksController = require("../../controller/booksController");

// Matches with "/api/books" (/api/books/desiredroute)
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id" (/api/books/:iddesiredroute)
router
  .route("/:id")
  .get(booksController.findById)
//   .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;