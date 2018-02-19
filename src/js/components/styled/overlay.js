import styled from 'styled-components';

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(0,rgba(0, 0, 0, 0.51) 0%,rgba(116,116,118,0) 45%);
    transition: background-image 0.2s ease;

    &:hover {

    }
`;

export default Overlay;
