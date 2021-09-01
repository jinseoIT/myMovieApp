import React,{useEffect, useState} from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../Config'
import axios from 'axios';
import MovieInfoGrid from './movieInfoGrid';
import "./movie.css";

const MovieDetail = (props) => {

  const movieId = props.match.params.movieId;
  const [movie, setMovie] = useState([]);
  
  useEffect(() => {
    
    const endPoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=ko`;
    
    axios.get(endPoint)
      .then(res => {
        setMovie(res.data);
      })
      .catch(error => {
         console.log(error);
      });
        
  }, [movieId])

  return (
    <>
      {/* Main Image */}
      <div className="movieDetail__imgArea">
        <img src={`${IMAGE_BASE_URL}w1280${movie.backdrop_path}`} alt=""/>
      </div>
      {/* Movie Info */}
      <h2 className="font-white" style={{ textAlign: 'center' }}>Movie Info</h2>
      <MovieInfoGrid
        movie = {movie}
      />
    </>
  );
};

export default MovieDetail;