import styled from 'styled-components';

export const HeaderMain = styled.header`
    align-items: center;
    justify-content: space-between;
    display: flex;
    padding: 5px 15px;

    &.is-hidden {
        display: none;
    }
`;

export default HeaderMain;
