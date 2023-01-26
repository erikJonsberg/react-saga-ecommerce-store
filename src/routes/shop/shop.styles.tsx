import styled  from 'styled-components';

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 50px;
    row-gap: 50px;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`