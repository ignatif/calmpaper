import Head from 'next/head'
import UserProvider from 'context/UserContext'
import { Provider as URQLProvider } from 'urql'

import client from 'api/client'
import * as atoms from 'components/atoms'

import Icons from 'assets/icons'
import 'assets/css/main.css'

const Providers = ({ children }) => (
  <URQLProvider value={client}>
    <UserProvider>{children}</UserProvider>
  </URQLProvider>
)

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Calmpaper</title>
        <meta name="description" content="A place to write" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="application-name" content="Calmpaper" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Calmpaper" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="msapplication-config"
          content="/static/icons/browserconfig.xml"
        />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta charSet="utf-8" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />

        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/img/ico.png" />
      </Head>
      <Providers>
        <Icons />
        <atoms.loader />
        <Component {...pageProps} />
      </Providers>
      <style jsx>
        {`
          @font-face {
            font-family: 'Avetra';
            src: url(/fonts/AvertaLight.otf);
            src: url(/fonts/AvertaRegular.otf);
            src: url(/fonts/AvertaSemibold.otf);
            src: url(/fonts/AvertaBold.otf);
            src: url(/fonts/AvertaExtraBold.otf);
          }
        `}
      </style>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </>
  )
}

export default App