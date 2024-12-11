import React, { useEffect, useState } from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true} 
          transitionTime={1000}
          infiniteLoop={true}
          showStatus={false}
          swipeable={true}
          emulateTouch={true}
          interval={7000}
          stopOnHover={true} 
        >
          {popularMovies.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
              key={movie.id}
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                  alt={movie?.original_title}
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {movie?.original_title || "Untitled"}
                </div>
                <div className="posterImage__runtime">
                  {movie?.release_date || "Unknown"}{" "}
                  <span className="posterImage__rating">
                    {movie?.vote_average || "N/A"}
                    <i className="fas fa-star" style={{ color: "#FFD700" }} />
                  </span>
                </div>
                <div className="posterImage__description">
                  {movie?.overview || "No description available."}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <MovieList />
      </div>
    </>
  );
};

export default Home;
