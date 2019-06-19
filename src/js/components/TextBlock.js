import React from 'react';
import styled from 'styled-components';
import { mq } from './styled/media-queries';

const TextContainer = styled.p`
    max-width: 650px;
    margin: 0 auto 10px;
    padding: 0 20px;
    ${mq.handheld`margin: 4rem auto;`}
`;

const TextBlock = ({ text }) => <TextContainer>{text}</TextContainer>;

export default TextBlock;
