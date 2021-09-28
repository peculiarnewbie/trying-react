import { useState, useEffect } from 'react';
import API from '../APIIGDB';

export const useGameFetch = gameId => {
    const [state, setStatee] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchGame = async () => {
            try {
                setLoading(true);
                setError(false);

                const game = await API.fetchFirstGame(gameId);

                setStatee({
                    ...game
                })

                setLoading(false);

            } catch (error) {
                setError(true);
            }
        };

        fetchGame();
    }, [gameId]);

    return { state, loading, error };
};
