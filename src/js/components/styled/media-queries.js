// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components';

export const mq = {
  mob: (...args) => css`
      @media (min-width: 400px) {
        ${css(...args)}
      }
    `,
  handheld: (...args) => css`
    @media (min-width: 650px) {
      ${css(...args)}
    }
  `,
};

export default mq;
