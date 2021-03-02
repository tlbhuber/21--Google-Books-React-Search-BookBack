const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes (when API routes are hit come here and access the book routes (/api/books))
router.use("/books", bookRoutes);

module.exports = router;