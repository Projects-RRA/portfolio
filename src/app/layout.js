// pages/_document.js
'use client';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Metadata */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Portfolio of Rinith Amin" />
          <meta name="keywords" content="rinith, rinithamin, rinith amin, RINITH, RINITH AMIN" />
          <meta name="author" content="Rinith Amin" />
          {/* Open Graph */}
          <meta property="og:title" content="Rinith Amin - Portfolio" />
          <meta property="og:description" content="Check out the portfolio of Rinith Amin." />
          <meta property="og:image" content="https://rinithamin.in/img/website-previewImage.png" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rinithamin.in" />
          <meta property="og:site_name" content="Rinith Amin Portfolio" />
          <meta name="robots" content="index, follow" />
        </Head>
        <body className={inter.className}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
