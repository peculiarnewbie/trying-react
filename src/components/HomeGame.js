import React from 'react';
//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../configIGDB';
//Components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';

//Hook
import { useHomeGameFetch } from '../hooks/useHomeGameFetch';
//Image
import NoImage from '../images/no_image.jpg';

function HomeGame(){
    const { state, loading, error, searchTerm, setSearchTerm } = useHomeGameFetch();

    console.log(state);

    return(
        <>
            {state.firstGame[0] ? (
                <HeroImage 
                    isSearch = {searchTerm ? true : false}
                    image={ state.firstGame[0].artworks
                            ? IMAGE_BASE_URL + state.firstGame[0].artworks[0].image_id + ".jpg"
                            : state.firstGame[0].screenshots
                                ? IMAGE_BASE_URL + state.firstGame[0].screenshots[0].image_id + ".jpg"
                                : NoImage
                    }
                    title={state.firstGame[0].name}
                    text={state.firstGame[0].summary}
                />
            ) : null
            }
            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid header={searchTerm ? 'Search Result' : 'Highest Rated 2021 Games'}>
                {state.results.map(game => (
                    <Thumb
                        key={game.id}
                        clickable
                        image={
                            game.cover
                                ? IMAGE_BASE_URL  + game.cover.image_id + ".jpg"
                                : NoImage
                        }
                        gameId={game.id}
                        title={game.name}
                    />
                ))}

            </Grid>
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button text='Load More' />
            )}
        </>
    );
}

export default HomeGame;