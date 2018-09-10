import React from 'react';
import { HeaderMain } from './styled/header-main';
import { SiteTitle } from './styled/site-title';
import { SocialLink } from './styled/social-link';

const Header = () => (
  <HeaderMain>
    <SiteTitle to="/">Chris Lawton</SiteTitle>
    <div>
      <SocialLink target="_blank" href="https://instagram.com/chris.lawton" aria-label="Link to Instagram">
        Instagram
      </SocialLink>
      <SocialLink target="_blank" href="https://unsplash.com/@chrislawton" aria-label="Link to Unsplash">
        Unsplash
      </SocialLink>
    </div>
  </HeaderMain>
);

export default Header;
