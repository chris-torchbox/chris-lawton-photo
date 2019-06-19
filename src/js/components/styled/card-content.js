import styled from 'styled-components';
import { mq } from './media-queries';

export const CardContent = styled.div`
    bottom: 20px;
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 100%;
    padding: 0 2rem;
    transition: bottom 0.15s ease-in-out;
    ${mq.handheld`bottom: 35px;`}
`;

export default CardContent;
