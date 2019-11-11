import "../baseStyles.scss";
import React from "react";
import App from "next/app";
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

    return <Component {...pageProps} />;
  }
}
