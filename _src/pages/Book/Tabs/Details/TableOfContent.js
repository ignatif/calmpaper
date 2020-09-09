import React from 'react'
import { Link } from 'react-router-dom'

export default ({ chapters, bookId }) => (
  <div className="row row04">
    <h4 className="title size04">
      Table of contents <span className="count">{chapters.length}</span>
    </h4>
    <div className="table">
      <ul>
        {chapters.map((chapter, index) => (
          <li>
            <Link to={`/books/${bookId}/${index + 1}`}>
              <span className="table-title">{`${chapter.title}`}</span>
              <span className="table-time">49 mins ago</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)