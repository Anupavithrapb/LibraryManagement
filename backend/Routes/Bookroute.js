const express = require('express');
const { 
  getAllBooks, 
  getBookById, 
  addBook, 
  updateBook, 
  deleteBook 
} = require('../Controller/Bookcontroller');

const authenticateToken = require('../middleware'); 
const checkAdminRole = require('../middlewareadmin'); 

const router = express.Router();


router.get('/', getAllBooks);


router.get('/:id', authenticateToken, getBookById);


router.post('/', authenticateToken, checkAdminRole, addBook);
router.put('/:id', authenticateToken, checkAdminRole, updateBook);
router.delete('/:id', authenticateToken, checkAdminRole, deleteBook);

module.exports = router;

