import styled from 'styled-components';
import { mq } from './media-queries';

export const Grid = styled.div`
    display: grid;
    ${mq.mob`grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));`}
    ${mq.handheld`grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));`}
    ${mq.desktop`grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));`}
`;

export const GridTwo = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(calc(50% - 10px), 1fr));
`;

export const GridThree = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(calc(33% - 10px), 1fr));
`;
