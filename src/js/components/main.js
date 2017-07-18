import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from './scroll-to-top';
import Home from './pages/home';
import Post from './pages/post';

function Main() {
  return (
    <div>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:post/" component={Post} />
        </Switch>
      </ScrollToTop>
    </div>
  );
}

export default Main;
