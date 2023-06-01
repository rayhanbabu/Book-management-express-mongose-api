const express = require("express");

const router = express.Router();


// controllers
const { bookInsert,bookAll,bookId ,bookEdit ,bookDelete } = require("../controllers/auth.js");


router.post("/books", bookInsert);
router.get("/books", bookAll);
router.get("/books/:id", bookId);
router.put("/books/:id", bookEdit);
router.delete("/books/:id", bookDelete);


module.exports = router;
