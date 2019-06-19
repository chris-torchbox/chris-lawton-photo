import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { mq } from './media-queries';

export const SiteTitle = styled(NavLink)`
    font-size: 22px;
    ${mq.handheld`font-size: 25px;`}
    line-height: 1;
`;

export default SiteTitle;
