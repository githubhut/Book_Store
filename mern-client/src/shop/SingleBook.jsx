import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
  const book = useLoaderData();

  // console.log('Loaded Book:', book); // Debug output

  return (
    <div className="mt-28 px-4 lg:px-24 flex flex-col items-center gap-6">
      <h2 className="text-3xl font-bold">{book?.book_title || 'No Title'}</h2>
      
      {book?.image_url && (
        <img 
          src={book.image_url} 
          alt={book.book_title} 
          className="w-64 h-auto rounded shadow-lg"
        />
      )}

      <div className="text-lg space-y-2">
        <p><strong>Author:</strong> {book?.author_name || 'N/A'}</p>
        <p><strong>Category:</strong> {book?.category || 'N/A'}</p>
        <p><strong>Description:</strong> {book?.book_description || 'N/A'}</p>
      </div>
    </div>
  );
};

export default SingleBook;



