import Document, { Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage()
    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  constructor(props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Which licenses I have?</title>
          <meta charset="UTF-8" />
          <meta
            name="description"
            content="Learn about the licenses around your package
          "
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <link
            href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c:300,400,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
