import React from 'react'

import Author from './Author'
import MoreByAuthor from './MoreByAuthor'

export default ({ author, bookId }) => (
  <div className="col-sidebar">
    <div className="items">
      <Author author={author} bookId={bookId} />
      <MoreByAuthor
        books={author.books.filter((b) => b.id !== parseInt(bookId))}
      />
    </div>
  </div>
)
