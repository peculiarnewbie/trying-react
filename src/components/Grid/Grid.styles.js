import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 20px;

    h1 {
        color: var(--medGrey);

        @media screen and (max-width: 768px) {
            font-size: car(--fontBig);
        }
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-row-gap: 0.1rem;
    grid-column-gap: 1.5rem;
    align-items: flex-start;
`;