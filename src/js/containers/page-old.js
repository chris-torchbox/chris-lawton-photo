import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

function pageHoc(WrappedComponent) {
  class Page extends Component {
    constructor() {
      super();
      this.state = ({
        pageLoaded: false,
      });
    }

    componentDidMount() {
      const pageSlug = this.getPageSlug();
      this.props.fetchPage(pageSlug);
    }

    componentWillReceiveProps(nextProps) {
      const currentSlug = this.props.page.slug;
      const nextSlug = nextProps.page.slug;

      // if page slugs don't match, current props are for previous page
      if (currentSlug && (currentSlug !== nextSlug)) {
        this.props.fetchPage(nextSlug);
      }

      this.setState({ pageLoaded: true });
    }

    getPageSlug() {
      // get page path from React Router
      let path = this.props.location.pathname;

      // remove trailing slash from path
      path = path.replace(/\/$/, '');

      const urlSegments = path.split('/');

      // return value of last segment
      const slug = urlSegments.slice(-1)[0];

      // return page slug or 'home' (as the home page '/' returns false)
      return slug || 'home';
    }

    render() {
      if (!this.state.pageLoaded) {
        return <div />;
      }

      return (
        <div>
          <Helmet>
            <title>{this.props.page.title}</title>
          </Helmet>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }

  const mapStateToProps = state => ({
    page: state.page.page,
  });

  const mapDispatchToProps = dispatch => ({
    fetchPage: slug => dispatch(pageFetch(slug)),
  });

  return connect(mapStateToProps, mapDispatchToProps)(Page);
}

export default pageHoc;
