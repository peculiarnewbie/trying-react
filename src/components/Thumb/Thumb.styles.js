import styled from 'styled-components';

export const Wrapper = styled.div`
    //background: var(--darkGrey);    
    padding: 10px 0px;
    overflow: hidden;
    max-height: 100%;
`;

export const Content = styled.div`
    //background: var(--medGrey); 
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
`;

export const Image = styled.img`
    max-width: 720px;
    transition: all 0.3s;
    border-radius: 5px;
    object-fit: cover;
    animation: animateThumb 0.5s;
    width:100%;
    margin:auto;

    :hover {
        width: 105%;
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
    top:0px;
    color: var(--black);
    margin: 0 10px;
`;

export const Gap = styled.div`
    height:10px;
`;