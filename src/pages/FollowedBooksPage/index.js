import React, { useEffect, useContext } from 'react'
import { Helmet } from 'react-helmet'
import { UserContext } from 'context'
import { useHistory } from 'react-router-dom'

import Flex from 'components/atoms/flex'
import Loader from 'components/atoms/loader'
import Header from 'components/Layout/Header'
import Landing from 'pages/Landing'

import WelcomeContent from 'pages/Welcome/Content'
import FollowedBooksFeed from 'components/organisms/feeds/books_feed/followed_books'

export default () => {
  const { user, fetching } = useContext(UserContext)
  const { push } = useHistory()

  useEffect(() => {
    if (window.analytics) {
      window.analytics.page('followed-books')
    }
  }, [])

  if (fetching) {
    return (
      <div className="asdh2jj">
        <Loader />
      </div>
    )
  }

  if (!user) {
    return <Landing />
  }

  return (
    <div className="page-home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Calmpaper</title>
      </Helmet>
      <Header />
      <div className="page-empty" style={{ marginTop: -84 }}>
        <WelcomeContent />
      </div>
      <Flex column style={{ marginTop: -128 }}>
        <FollowedBooksFeed />
      </Flex>
    </div>
  )
}
