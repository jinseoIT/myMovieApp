import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../Config";
import GridCard from "../common/GridCard"
import axios from "axios";
import "./movie.css";

const MovieList = () => {
  
  const [movieList, setMoiveList] = useState();
  useEffect(() => {
    const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko&page=1`;
    fetchMovies(endPoint);

  }, [])

  //  fetch 방식
  // const fetchMovies = (endPoint) => {
  //   fetch(endPoint)
  //     .then(res => res.json())
  //     .then(res => {
  //       setMoiveList(res.results);
  //       console.log(movieList);
  //     })
  // }

  // axios 방식
  const fetchMovies = (endPoint) => {
      axios.get(endPoint)
        .then(res => {
        console.log(res);
        setMoiveList(res.data.results);
      })
      .catch(error => {
        console.log(error);
      });
    }
  
  return (
    <>
      <h2 className="font-white" style={{textAlign: 'center'}}>MovieList</h2>
      {/* Movie Grid Cards */}
      <div className="movieList__area">
        {movieList && movieList.map((movie, idx) => (
        <React.Fragment key={idx}>
          <GridCard
            image={`${IMAGE_BASE_URL}w500${movie.poster_path}`}
            movieId={movie.id}
            movieName={movie.title}
            />
        </React.Fragment>
        ))}
        </div>
    </>
  );

};

export default MovieList;