import React, { useContext } from 'react'
import { UserContext } from 'context'
import { useHistory } from 'react-router-dom'
import { getUserSlug, getUserDisplayName } from 'helpers'
import BookCover from 'components/atoms/book-cover'
import Ratings from './Ratings'

export default ({ chapter }) => {
  const { user } = useContext(UserContext)
  const { push } = useHistory()
  const book = chapter.book

  return (
    <div className="read-book-main">
      <div className="container">
        <div className="col col01">
          <h1 className="title size01">{chapter.book.name}</h1>
          <div
            className="author clickable"
            onClick={() => push(`/${getUserSlug(book.author)}`)}
          >
            {getUserDisplayName(book.author)}
          </div>
          {user && user.id === book.author.id && <Ratings chapter={chapter} />}
        </div>
        <div className="col col02">
          <BookCover
            book={book}
            isChapterPage
            size="book-cover-size01"
            style={{
              maxWidth: '180px',
              boxShadow: '0px 30px 30px rgba(44, 26, 22, 0.2)',
              height: '250px',
              width: '180px',
              borderRadius: '6px',
            }}
          />
        </div>
      </div>
    </div>
  )
}
