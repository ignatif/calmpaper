import React from 'react'
import { useHistory } from 'react-router-dom'
import BookCover from 'components/atoms/book-cover'
import Rating from 'components/Rating'

const Book = ({ book }) => {
  const { push } = useHistory()

  return (
    <div className="col" onClick={() => push(`/books/${book.id}`)}>
      <a href>
        <BookCover book={book} isCatalog />
        <h3 className="catalog-title">{book.name}</h3>
        <p className="catalog-author">{book.author.fullname}</p>
        <Rating ratings={book.reviews} readOnly quiet />
      </a>
    </div>
  )
}

export default ({ books }) => {
  return (
    <div className="catalog">
      <div className="container">
        <div className="row">
          {books.map((book) => (
            <Book book={book} key={book.id} />
          ))}
        </div>
      </div>
    </div>
  )
}