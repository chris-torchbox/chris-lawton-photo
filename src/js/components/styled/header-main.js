import styled from 'styled-components';

export const HeaderMain = styled.header`
    align-items: center;
    justify-content: space-between;
    display: flex;
    padding: 15px 1.5vw;

    &.is-hidden {
        display: none;
    }
`;

export default HeaderMain;
