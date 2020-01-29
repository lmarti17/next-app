// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    const title = ''
    const description = ''
    const url = ''
    const image = ''
    const author = ''
    const keywords = []

    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" key="httpEquiv" />
          <meta name="robots" content="index,follow" key="robots" />
          <meta name="googlebot" content="index,follow" key="googlebot" />
          <meta name="description" content={description} key="description" />
          <meta name="author" content={author} />
          <meta name="keywords" content={keywords.join(',')} />
          <meta
            name="geo.placename"
            content="Vienna, Austria"
            key="geo.placename"
          />
          <meta property="og:locale" content="en_US" key="og:locale" />
          <meta name="rating" content="General" key="rating" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
            key="viewport"
          />
          <script src="/static/scripts/modernizr.js" />

          <meta property="og:type" content="website" key="og:type" />
          <meta property="og:site_name" content={title} key="og:site_name" />
          <meta property="og:title" content={title} key="og:title" />
          <meta
            property="og:description"
            content={description}
            key="og:description"
          />
          <meta property="og:url" content={url} key="og:url" />
          <meta property="og:image" content={image} key="og:image" />
          <meta property="og:image:width" content="1300" key="og:image:width" />
          <meta
            property="og:image:height"
            content="732"
            key="og:image:height"
          />
          <meta
            name="twitter:card"
            content="summary_large_image"
            key="twitter:card"
          />
          <meta name="twitter:title" content={title} key="twitter:title" />
          <meta
            name="twitter:description"
            content={description}
            key="twitter:description"
          />
          <meta name="twitter:image" content={image} key="twitter:image" />

          <meta name="msapplication-config" content="/browserconfig.xml" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2c2c2c" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
          <title key="title">{title}</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument