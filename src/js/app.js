import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Main from './components/main';

// Promise polyfill for IE11-.
// This is required fof the fetch API polyfill (whatwg-fetch) to work.
if (!window.Promise) {
  window.Promise = Promise;
}

const title = 'Chris Lawton Photography';
const description = '';
const hero = '';

ReactDOM.render(
    <div>
      <Helmet>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="robots" content="noodp" />
        <meta property="fb:app_id" content="" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://chrislawton.co.uk/" />
        <meta property="og:site_name" content="Chris Lawton Photography" />
        <meta property="og:image" content={hero} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={hero} />
      </Helmet>
      <BrowserRouter>
        <div>
          <Header />
          <Main />
        </div>
      </BrowserRouter>
    </div>
  , document.querySelector('.container'));
