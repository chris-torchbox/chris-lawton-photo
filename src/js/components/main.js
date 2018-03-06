import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from './scroll-to-top';
import Home from './pages/home';
import Post from './pages/post';
import Gear from './pages/gear';
import NotFound from './../components/not-found';

const Main = () => (
  <div>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gear" component={Gear} />
        <Route exact path="/:post/" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </ScrollToTop>
  </div>
);

export default Main;
