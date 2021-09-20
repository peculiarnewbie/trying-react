import React from 'react';
// Styles
import { Wrapper, Content, Image, Text } from './Thumb.styles';

const Thumb = ({ image, title, movieId, clickable }) => (
    <Wrapper>
        <Content>
            <Image src={image} alt='movie-thumb' />
        </Content>
        <Text>{title}</Text>
    </Wrapper>
)

export default Thumb;