import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from 'flowbite-react';

const Shop = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch details for a single book
      fetch(`https://book-store-eta-rust.vercel.app/book/${id}`)
        .then((res) => res.json())
        .then((data) => setBook(data));
    } else {
      // Fetch all books
      fetch('https://book-store-eta-rust.vercel.app/all-books')
        .then((res) => res.json())
        .then((data) => setBooks(data));
    }
  }, [id]);

  if (id) {
    // Render single book details
    if (!book) return <div className="text-center mt-20 text-xl">Loading...</div>;

    return (
      <div className="mt-28 px-4 lg:px-24">
        <div className="max-w-3xl mx-auto bg-white shadow-md p-8 rounded-lg">
          <img src={book.image_url} alt={book.book_title} className="w-full h-96 object-cover mb-6" />
          <h1 className="text-4xl font-bold mb-2">{book.book_title}</h1>
          <p className="text-gray-700 mb-4">Category: {book.category}</p>
          <p className="text-lg text-gray-600">This book is available for reading or purchase.</p>
        </div>
      </div>
    );
  }

  // Render list of all books
  return (
    <div className="mt-28 px-4 lg:px-24">
      <div className="flex justify-center items-center space-x-4 mb-10">
        <h2 className="text-5xl font-bold text-purple-900">All Books</h2>
        <h2 className="text-5xl font-bold">are here</h2>
      </div>
      <div className="grid gap-8 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book) => (
          <Card key={book._id} className="shadow-lg">
            <img src={book.image_url} alt={book.book_title} className="h-96 w-full object-cover" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              {book.book_title}
            </h5>
            <p className="text-gray-700 dark:text-gray-400 text-center">
              Discover more about this book by clicking below.
            </p>
            <button
              onClick={() => navigate(`/book/${book._id}`)}
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded"
            >
              Buy Now
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;

