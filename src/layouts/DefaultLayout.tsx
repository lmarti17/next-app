import React from 'react'
import tw from 'twin.macro'
import NextHead from 'next/head'
import { ThemeProvider } from 'styled-components'
import { DefaultSeo, DefaultSeoProps } from 'next-seo'
import { createGlobalStyle } from 'styled-components'
import theme from 'src/styles/theme'
import fonts from '../styles/fonts.css'

interface Props {}

const globalSeoConfig: DefaultSeoProps = {
  title: 'Example',
  titleTemplate: '%s | Example',
  description: 'This is the website for  Wave',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.PUBLIC_URL,
    site_name: 'Example',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
}

const GlobalStyle = createGlobalStyle`
  ${fonts}

  html,
  body {
    ${tw`min-h-screen`}
  }

  html {
    ${tw`cursor-default`}
    overflow-wrap: anywhere;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    ${tw`text-black antialiased`}
  }

  .js-focus-visible :focus:not(.focus-visible) {
    outline: 0 !important;
    box-shadow: none !important;
  }

  #__next {
    ${tw`min-h-screen flex flex-col`}
  }
`

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <DefaultSeo {...globalSeoConfig} />

      <NextHead>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" key="httpEquiv" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="rating" content="General" key="rating" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" key="viewport" />
        {/* <meta name="robots" content="index,follow" key="robots" />
          <meta name="googlebot" content="index,follow" key="googlebot" /> */}

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2c2c2c" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        {/* <meta property="og:title" content="" /> */}
        {/* <meta property="og:description" content="" /> */}
        <meta property="og:image" content="/images/og-image.jpg" />

        {/* @TODO - remove before going live */}
        <meta name="robots" content="noindex,nofollow" key="robots" />
      </NextHead>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        {children}
      </ThemeProvider>
    </>
  )
}

export default DefaultLayout
