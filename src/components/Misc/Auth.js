import React from 'react'
import useMagicLink from 'use-magic-link'

export default function Home() {
  // create the hook
  const auth = useMagicLink('pk_test_5A07EBF17066B853')

  function loginNow() {
    const email = prompt('Enter your email')
    auth.login(email)
  }

  function getContent() {
    // Show a loading screen until we detect the login-state
    if (auth.loading || auth.loggingIn || auth.loggingOut) {
      return '...'
    }

    // Show this, if logged in
    if (auth.loggedIn) {
      return (
        <div>
          You are logged-in.
          <br />
          <button onClick={() => auth.logout()}>Logout</button>
        </div>
      )
    }

    // Show this, if not logged-in
    return (
      <div>
        <button onClick={loginNow}>Login Now</button>
      </div>
    )
  }

  return (
    <div className="container">
      <main>
        <h1>Next.js Bank</h1>
        <div className="content">{getContent()}</div>
      </main>
    </div>
  )
}