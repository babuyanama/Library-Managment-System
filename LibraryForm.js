const { Library, Student, Book } = require('../models');

exports.borrowBook = async (req, res) => {
  try {
    const { studentId, bookId, startDate, endDate } = req.body;
    const library = await Library.create({
      studentId,
      bookId,
      startDate,
      endDate
    });
    res.status(201).json(library);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllBorrowedBooks = async (req, res) => {
  try {
    const borrowedBooks = await Library.findAll({
      include: [Student, Book]
    });
    res.status(200).json(borrowedBooks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.returnBook = async (req, res) => {
  try {
    const { id } = req.params;
    const returned = await Library.update(
      { returnDate: new Date() },
      { where: { id } }
    );
    if (returned[0]) {
      res.status(200).json({ message: 'Book returned successfully' });
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};