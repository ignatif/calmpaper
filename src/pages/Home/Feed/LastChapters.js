import React, { useState, useEffect } from 'react'
import { useQuery } from 'urql'
import { getLastChaptersQuery } from 'api'

import Loader from 'components/Loader'
import Chapter from 'components/molecules/chapter'

export default ({ sort }) => {
  const [page, setPage] = useState(0)
  const [allChapters, setChapters] = useState([])
  const [refetch, setRefetch] = useState(false)
  const [
    { data: { chaptersFeed: chapters = [] } = {}, fetching, error },
  ] = useQuery({
    query: getLastChaptersQuery,
    variables: {
      skip: 3 * page,
    },
    // pause: refetch,
  })

  useEffect(() => {
    setChapters((c) => [...c, ...chapters])
    setRefetch(true)
  }, [chapters])

  if (fetching && !refetch) return <Loader />
  if (error) return <p>Oh no... {error.message}</p>

  return (
    <div className="latest">
      <div className="container">
        <div className="row">
          <h2 className="title size02">
            A better place to read and write things that matter
          </h2>
        </div>
        <div className="row" style={{ maxWidth: '750px', margin: 'auto' }}>
          {allChapters.map((chapter) => (
            <Chapter chapter={chapter} key={chapter.key} />
          ))}
          <div
            className="item"
            style={{
              fontWeight: 400,
              justifyContent: 'center',
              background: '#fdfdfd',
              color: '#040027',
              fontSize: '15px',
            }}
            onClick={() => setPage((p) => p + 1)}
          >
            {fetching ? 'Loading...' : 'Load more'}
          </div>
          {/*
           */}
        </div>
      </div>
    </div>
  )
}