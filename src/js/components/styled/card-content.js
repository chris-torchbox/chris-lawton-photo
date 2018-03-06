import styled from 'styled-components';
import { mq } from './media-queries';

export const CardContent = styled.div`
    align-items: center;
    bottom: 20px;
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 100%;
    ${mq.handheld`bottom: 35px;`}
`;

export default CardContent;
