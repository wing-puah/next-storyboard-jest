import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({ // eslint-disable-line implicit-arrow-linebreak
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: <>{initialProps.styles} {sheet.getStyleElement()}</> // eslint-disable-line react/jsx-one-expression-per-line, comma-dangle, max-len
      };
    } finally {
      sheet.seal();
    }
  }
}
