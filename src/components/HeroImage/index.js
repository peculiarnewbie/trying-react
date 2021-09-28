import React from 'react';
//styles
import { Wrapper, Content, Text  } from './HeroImage.styles';

const HeroImage = ({isSearch, image, title, text}) =>(
    <Wrapper image={image} isSearch={isSearch}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
);

export default HeroImage;