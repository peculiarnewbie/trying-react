import { any } from 'prop-types';
import { useState , useEffect, useRef } from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';
// API
import API from '../APIIGDB';

const initialState = {
    page: 0,
    results: [],
    firstGame: [],
    firstGameId: 0,
    firstGameName: "",
    firstGameSummary: "",
    heroImage: "",
    total_pages: 0,
    total_results: 0
};

export const useHomeGameFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchGames = async (page, searchTerm = "") => {
        try{
            setError(false);
            setLoading(true);

            const games = await API.fetchGames(searchTerm);

            const game = await API.fetchFirstGame(games[0].id);

            setState(prev => ({
                ...games, 
                results:
                    page > 1 ? [...prev.results, ...games] : [...games],
                firstGame: [...game]
            }));

        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }

    // Initial and search
    useEffect(() => {
        setState(initialState);
        fetchGames(1, searchTerm);
    }, [searchTerm]);

    return { state, loading, error, searchTerm, setSearchTerm };
};