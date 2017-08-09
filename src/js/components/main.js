import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from './scroll-to-top';
import Post from './../containers/post';
import Home from './../containers/home';
import NotFound from './../components/not-found';

function Main() {
  return (
    <div>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:post/" component={Post} />
          <Route component={NotFound} />
        </Switch>
      </ScrollToTop>
    </div>
  );
}

export default Main;
