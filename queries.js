/*------------------------------ Starter Code ------------------------------*/
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const Author = require('./models/author.js');
const Book = require('./models/book.js');

const connect = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');
  await runQueries();

  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');
  process.exit();
};

connect();
/*----------------------------- Query Functions -----------------------------*/
const createAuthor = async () => {
    const authorData = {
      name: "Shahsta M.S",
      birthdate: '1996-01',
      nationality: 'Bahraini',
    };
    const author = await Author.create(authorData);
    console.log("New author:", author);
  };

  const createBook = async () => {
    const author = await Author.findOne({ name: "Shahsta M.S" }); 
    const bookData = {
      title: "Harry Potter",
      publicationDate: '2012-06',
      genre: 'Fantasy',
      author: author, 
    };
    const book = await Book.create(bookData);
    console.log("New book:", book);
  };
  
  const findBooksByAuthor = async () => {
    const authorName = "Shahsta M.S"; // Specify the author's name
    const books = await Book.find({ 'author.name': authorName });
    console.log("Books by Shahsta M.S:", books);
  };
  
  const updateBook = async () => {
    const bookId = '671632e0e5d7431de3d97e0a'; 
    const updates = { genre: 'Fantasy Adventure' };
    const updatedBook = await Book.findByIdAndUpdate(bookId, updates, { new: true });
    console.log('Updated Book:', updatedBook);
  };
  
  const deleteBook = async () => {
    const bookId = '671632e0e5d7431de3d97e0a'; 
    const result = await Book.findByIdAndDelete(bookId);
    console.log('Book deleted:', result);
  };

  const updateAuthor = async () => {
    const authorId = '6716326e8af7747753e68c67'; 
    const updates = { nationality: 'Bahraini- Egyptian' };
    const updatedAuthor = await Author.findByIdAndUpdate(authorId, updates, { new: true });
    console.log('Updated Author:', updatedAuthor);
  };
  
  
  //author id: 6716326e8af7747753e68c67
  //book id: 671632e0e5d7431de3d97e0a
/*------------------------------- Run Queries -------------------------------*/

const runQueries = async () => {
  console.log('Queries running.');
   //await createAuthor();
  //await createBook();
   //await findBooksByAuthor();
   //await updateBook();
   //await deleteBook();
  //await updateAuthor();
};

