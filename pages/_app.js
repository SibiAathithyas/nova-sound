// pages/_app.js
import '../styles/globals.css';  // Import global styles
import React from 'react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
