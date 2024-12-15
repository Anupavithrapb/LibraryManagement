const Book = require('../Models/Bookmodel');

const getAllBooks = async (req, res) => {
  try {
    const { search } = req.query;

    
    if (search && typeof search === 'string') {
      const query = {
        $or: [
          { title: { $regex: search, $options: 'i' } }, // Search in title
          { author: { $regex: search, $options: 'i' } }  // Search in author
        ]
      };

      
      console.log('Search Query:', query);

     
      const books = await Book.find(query);

     
      res.status(200).json({ books, totalBooks: books.length });
    } else {
      
      const books = await Book.find({});
      res.status(200).json({ books, totalBooks: books.length });
    }

  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ message: 'Error fetching books', error });
  }
};

  

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching book', error });
  }
};

const addBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();

    res.status(201).json({ message: 'Book added successfully', book });
  } catch (error) {
    res.status(500).json({ message: 'Error adding book', error });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).json({ message: 'Book not found' });

    res.status(200).json({ message: 'Book updated successfully', book });
  } catch (error) {
    res.status(500).json({ message: 'Error updating book', error });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    res.status(200).json({ message: 'Book deleted successfully', book });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error });
  }
};

module.exports = { getAllBooks, getBookById, addBook, updateBook, deleteBook };
