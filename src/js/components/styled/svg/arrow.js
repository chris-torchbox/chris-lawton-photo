import React from 'react';

const arrowStyle = {
  zIndex: 20,
  width: 30,
  position: 'absolute',
  top: 20,
  left: 20,
};

export default () => (
  <svg style={arrowStyle} fill="white" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 6H8V3c0-.484-.375-1-1-1-.461 0-.695.287-1 .54L.625 7C.242
    7.313 0 7.555 0 8s.242.688.625 1L6 13.46c.305.253.539.54 1 .54.625 0
    1-.516 1-1v-3h7c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z"
    />
  </svg>
);
