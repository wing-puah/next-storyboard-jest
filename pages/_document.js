import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import PropTypes from 'prop-types';
import flush from 'styled-jsx/server'; // eslint-disable-line

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    let pageContext;

    try {
      const page = (ctx.renderPage = Component => {
        const WrappedComponent = props => {
          pageContext = props.pageContext;
          return <Component {...props} />;
        };

        WrappedComponent.propTypes = {
          pageContext: PropTypes.object.isRequired,
        };

        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

        return WrappedComponent, originalRenderPage;
      });

      const initialProps = await Document.getInitialProps(ctx);

      let css;
      // It might be undefined, e.g. after an error.
      if (pageContext) {
        css = pageContext.sheetsRegistry.toString();
      }

      return {
        ...initialProps,
        ...page,
        pageContext,
        styles: (
          <React.Fragment>
            <style
              id="jss-server-side"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: css }}
            />
            {initialProps.styles}
            {sheet.getStyleElement()}
            {flush() || null}
          </React.Fragment>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
