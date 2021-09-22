import { any } from 'prop-types';
import { useState , useEffect, useRef } from 'react';
// API
import API from '../APIIGDB';

const initialState = {
    page: 0,
    results: [],
    firstGameName: "",
    firstGameSummary: "",
    heroImage: "",
    total_pages: 0,
    total_results: 0
};

export const useHomeGameFetch = () => {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchGames = async (page, searchTerm = "") => {
        try{
            setError(false);
            setLoading(true);

            const games = await API.fetchGames(searchTerm);

            setState(prev => ({
                ...games, 
                results:
                    page > 1 ? [...prev.results, ...games] : [...games]
            }));
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }

    const fetchFirstGame = async (gameId) => {
        try{
            setError(false);
            
            const game = await API.fetchFirstGame(gameId);

            setState(prev => ({
                ...game,
                firstGameName: game.name,
                firstGameSummary: game.summary,
                heroImage:
                    game.artworks[0].image_id ? game.artworks[0].image_id : game.screenshots[0].image_id
            }));
        } catch (error){
            setError(true);
        }
    }

    // Initial render
    useEffect(() => {
        fetchGames(1);
    }, []);

    return { state, loading, error };
};