import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 10px 20px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    max-width: 720px;
    transition: all 0.3s;
    border-radius: 20px;
    object-fit: cover;
    animation: animateThumb 0.5s;
    width:100%;
    margin:auto;

    :hover {
        width: 110%;
        opacity:  0.8;
    }

    @keyframes animateThumb{
        from{
            opacity:  0;
        }
        to{
            opacity: 1;
        }
    }
`;

export const Text = styled.div`
    position:relative;
    top:10px;
    color: var(--black);
    margin:auto;
`;