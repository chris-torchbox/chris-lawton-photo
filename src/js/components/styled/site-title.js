import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { mq } from './media-queries';

export const SiteTitle = styled(NavLink)`
    font-family: 'azedobold', sans-serif;
    font-size: 22px;
    line-height: 1;
    ${mq.handheld`
        letter-spacing: 10px;
        font-size: 40px;
    `}
`;
