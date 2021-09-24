import React from 'react';
//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../configIGDB';
//Components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';

//Hook
import { useHomeGameFetch } from '../hooks/useHomeGameFetch';
//Image
import NoImage from '../images/no_image.jpg';

function HomeGame(){
    const { state, loading, error, setSearchTerm } = useHomeGameFetch();

    console.log(state);

    return(
        <>
            {state.results[0] ? (
                <HeroImage 
                    image = {`${IMAGE_BASE_URL}${state.results[0].screenshots[0].image_id}.jpg`}
                    title={state.results[0].name}
                    text={state.results[0].summary}
                />
            ) : null
            }
            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid header='Highest Rated 2021 Games'>
                {state.results.map(game => (
                    <Thumb
                        key={game.id}
                        clickable
                        image={
                            game.cover.image_id
                                ? IMAGE_BASE_URL  + game.cover.image_id + ".jpg"
                                : NoImage
                        }
                        gameId={game.id}
                        title={game.name}
                    />
                ))}

            </Grid>
            <Spinner />
        </>
    );
}

export default HomeGame;