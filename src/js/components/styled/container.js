import styled from 'styled-components';
import { mq } from './media-queries';

export const TextContainer = styled.div`
    max-width: 650px;
    margin: 0 auto 10px;
    padding: 0 20px;
    ${mq.handheld`margin: 4rem auto;`}
`;

export const PhotoContainer = styled.div`
    max-width: 1060px;
    margin: 0 auto 10px;
    ${mq.handheld`margin: 4rem auto;`}
`;

export const BreakoutPhoto = styled.div`
    position: relative;
    right: 50%;
    left: 50%;
    width: 100vw;
    margin-right: -50vw;
    margin-left: -50vw;
`;
