import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
      fetch("https://book-store-backend-cqp2.onrender.com/all-books").then(res => res.json()).then(data => setBooks(data.slice(0,8)))
    }, [])
    return (
      <div>
        <BookCards books = {books} headLine = "Other Books"/>
      </div>
    )
}

export default OtherBooks