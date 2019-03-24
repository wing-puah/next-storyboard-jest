import React, { Fragment } from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider'; // eslint-disable-line
import getPageContext from '../src/getPageContext';
import theme from '../components/styles/theme';
import Layout from '../components/Layout';

class MyApp extends App {
  constructor() {
    super();
    this.pageContext = getPageContext();
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  // componentDidMount() {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector('#jss-server-side');
  //   if (jssStyles && jssStyles.parentNode) {
  //     jssStyles.parentNode.removeChild(jssStyles);
  //   }
  // }

  componentDidCatch(error, errorInfo) {
    console.log('CUSTOM ERROR HANDLING', error); // eslint-disable-line no-console
    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Next storybook</title>
        </Head>
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          <Fragment>
            <CssBaseline />
            <ThemeProvider theme={theme}>
              <Layout>
                <Component pageContext={this.pageContext} {...pageProps} />
              </Layout>
            </ThemeProvider>
          </Fragment>
        </JssProvider>
      </Container>
    );
  }
}

export default MyApp;
