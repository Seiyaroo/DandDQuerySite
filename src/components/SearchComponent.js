import React, { useState } from 'react';

const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] =  useState('');

    // Function to handle the search
    const handleSearch = async () => {
        if (!searchTerm) {
            alert("Please enter your desired search term.");
            return;
        }

        setLoading(true);
        setError('');

        try {
            // API connect endpoint
            const response = await fetch(`https://www.dnd5eapi.co=${searchTerm}`)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json();
            setResults(data.results);
        } catch (error) {
            setError('Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <input
                type="Text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter search term"
            />
            <button onClick={handleSearch} disabled={loading}>
                {loading ? 'Searching...' : 'Search'}
            </button>
            {error && <p>{error}</p>}
            {results.length > 0 && (
                <ul>
                    {results.map((result, index) => (
                        <li key={index}>{result.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchComponent;