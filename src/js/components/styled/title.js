import styled from 'styled-components';
import { mq } from './media-queries';

export const Title = styled.h3`
    font-weight: 700;
    margin-bottom: 5px;
    ${mq.handheld`letter-spacing: 5px;`}
`;

export default Title;
