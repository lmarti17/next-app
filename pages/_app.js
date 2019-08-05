import "../baseStyles.scss";
import React from "react";
import Head from "next/head";
import App, { Container } from "next/app";
import "./Index.scss";

export default class MyApp extends App {
  static async getInitialProps({ Component }) {
    try {
      // Fetch global app data here
      let pageProps;
      // if page component has getInitialProps, call it
      if (Component && Component.getInitialProps) {
        pageProps = await Component.getInitialProps();
      }

      return { pageProps };
    } catch (e) {
      return console.error(e);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    const title = "";
    const description = "";
    const url = "";
    const image = "";

    return (
      <Container>
        <Head>
          <meta charSet="utf-8" key="charSet" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" key="httpEquiv" />
          <meta name="robots" content="index,follow" key="robots" />
          <meta name="googlebot" content="index,follow" key="googlebot" />
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

          <title key="title">{title}</title>

          <meta
            property="description"
            content={description}
            key="description"
          />
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

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/safari-pinned-tab.svg"
            color="#f04323"
          />
          <link rel="shortcut icon" href="favicon.ico" />
          <meta name="msapplication-TileColor" content="#f04323" />
          <meta
            name="msapplication-config"
            content="/static/browserconfig.xml"
          />
          <meta name="theme-color" content="#f04323" />
        </Head>

        <Component {...pageProps} />
      </Container>
    );
  }
}
