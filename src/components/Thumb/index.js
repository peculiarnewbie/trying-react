import React from 'react';
import { Link } from 'react-router-dom'
// Styles
import { Wrapper, Content, Image, Text, Gap } from './Thumb.styles';

const Thumb = ({ image, title, gameId, clickable }) => (
    <Wrapper>
        {clickable ? (
            <Link to={`/${gameId}`}>
                <Content>
                    <Image src={image} alt='movie-thumb' />
                </Content>
                <Text>{title}</Text>
            </Link>
        ) : (
            <Content>
            <Image src={image} alt='movie-thumb' />
            </Content>
        )
        }
    </Wrapper>
)

export default Thumb;