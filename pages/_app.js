import '../baseStyles.scss'
import App from 'next/app'
import './Index.scss'

export default class MyApp extends App {
  static async getServerSideProps({ Component, ctx }) {
    try {
      // Fetch global app data here
      let pageProps
      // if page component has getInitialProps, call it
      if (Component && Component.getServerSideProps) {
        pageProps = await Component.getServerSideProps(ctx)
      }

      return { pageProps }
    } catch (error) {
      return { error }
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return <Component {...pageProps} />
  }
}
