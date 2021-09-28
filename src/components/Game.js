import React from 'react';
import { useParams } from 'react-router-dom';
// Config
import { IMAGE_BASE_URL } from '../configIGDB';
// Components
import Grid from './Grid';
import Spinner from './Spinner';
// Hook
import { useGameFetch } from '../hooks/useGameFetch';
// image
import NoImage from '../images/no_image.jpg';

const Game = () => {
    const { gameId } = useParams();

    const { state: game, loading, error} = useGameFetch(gameId);

    console.log(game);

    return (
        <>
            <div>
                Game
            </div>
        </>
    )

};

export default Game;