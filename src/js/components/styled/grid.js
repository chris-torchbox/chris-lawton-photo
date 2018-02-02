import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
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
