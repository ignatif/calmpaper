import React, { useEffect } from 'react'
import { hydrate, render } from 'react-dom'
import {
  createClient,
  Provider as URQLProvider,
  dedupExchange,
  fetchExchange,
} from 'urql'
import { cacheExchange } from '@urql/exchange-graphcache'
import { BrowserRouter as RouterProvider } from 'react-router-dom'

import UserProvider from 'context/UserContext'
import ModalProvider from 'context/ModalContext'
import GetStreamProvider from 'context/GetStreamContext'
import StripeProvider from 'context/StripeContext'

import Layout from 'components/Layout/Layout'
import Routes from './routes'
import * as serviceWorker from './serviceWorker'

// import 'assets/sass/main.scss'

import 'assets/css/main.css'
import 'assets/css/ADDITIONS.css'

import 'assets/css/yandex.css'
import 'assets/css/index.css'
import 'assets/css/editor.css'

import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'

// import 'assets/css/stripe.css'

const client = createClient({
  url: process.env.REACT_APP_BACKEND_URL,
  // exchanges: [
  //   dedupExchange,
  //   cacheExchange({
  //     setCommentLike: (variables, cache, info) => {

  //       return {
  //         __typename: 'Like',
  //         id: variables.id,
  //         // favorite: true,
  //       }
  //     },
  //   }),
  //   fetchExchange,
  // ],
  fetchOptions: () => {
    const token = window.localStorage.getItem('jwt')
    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    }
  },
})

const Providers = ({ children }) => (
  <URQLProvider value={client}>
    <RouterProvider>
      <UserProvider>
        <StripeProvider>
          <GetStreamProvider>
            <ModalProvider>{children}</ModalProvider>
          </GetStreamProvider>
        </StripeProvider>
      </UserProvider>
    </RouterProvider>
  </URQLProvider>
)

const App = () => {
  useEffect(() => {
    function init() {
      var analytics = (window.analytics = window.analytics || [])
      if (!analytics.initialize)
        if (analytics.invoked)
          window.console &&
            console.error &&
            console.error('Segment snippet included twice.')
        else {
          analytics.invoked = !0
          analytics.methods = [
            'trackSubmit',
            'trackClick',
            'trackLink',
            'trackForm',
            'pageview',
            'identify',
            'reset',
            'group',
            'track',
            'ready',
            'alias',
            'debug',
            'page',
            'once',
            'off',
            'on',
            'addSourceMiddleware',
            'addIntegrationMiddleware',
            'setAnonymousId',
            'addDestinationMiddleware',
          ]
          analytics.factory = function (e) {
            return function () {
              var t = Array.prototype.slice.call(arguments)
              t.unshift(e)
              analytics.push(t)
              return analytics
            }
          }
          for (var e = 0; e < analytics.methods.length; e++) {
            var t = analytics.methods[e]
            analytics[t] = analytics.factory(t)
          }
          analytics.load = function (e, t) {
            var n = document.createElement('script')
            n.type = 'text/javascript'
            n.async = !0
            n.src =
              'https://cdn.segment.com/analytics.js/v1/' +
              e +
              '/analytics.min.js'
            var a = document.getElementsByTagName('script')[0]
            a.parentNode.insertBefore(n, a)
            analytics._loadOptions = t
          }
          analytics.SNIPPET_VERSION = '4.1.0'
          analytics.load('AhAYO7EZnkW5R4zRVfuN4ceOY32pSDs4')
          analytics.page()
        }
    }
    init()
  }, [])
  return (
    <Layout>
      <Routes />
    </Layout>
  )
}

const rootElement = document.getElementById('root')
// if (rootElement.hasChildNodes()) {
//   hydrate(
//     <React.StrictMode>
//       <Providers>
//         <App />
//       </Providers>
//     </React.StrictMode>,
//     rootElement,
//   )
// } else {
render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  rootElement,
)
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()