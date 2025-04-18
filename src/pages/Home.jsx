/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { getPopularMovies } from "../services/api.js";
function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const loadPopularMovies = async() => {
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }
            catch(err){
                console.log(err);
                setError("Failed to load movies....");
            }
            finally{
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, [])

    // const movies = [
    //     { id: 1, title: "John Wick", release_date: "2020" },
    //     { id: 2, title: "Terminator", release_date: "2012" },
    //     { id: 3, title: "Friends", release_date: "2010" },
    //     { id: 4, title: "Inception", release_date: "2050" },
    //     { id: 5, title: "3 Idiots", release_date: "2010" },
    // ]

    function handleSearch(e) {
        e.preventDefault();
        alert(searchQuery);
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="search for movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
                <button type="submit" className="search-btn">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}

export default Home