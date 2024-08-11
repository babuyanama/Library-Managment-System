const express = require('express');
const router = express.Router();
const libraryController = require('../controllers/libraryController');

router.post('/borrow', libraryController.borrowBook);
router.get('/borrowed', libraryController.getAllBorrowedBooks);
router.put('/return/:id', libraryController.returnBook);

module.exports = router;