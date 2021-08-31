import React from 'react';
import Youtube from "./common/youtube";
import MovieList from "./movie/MovieList";

const home = () => {
  return (
    <div>
      <Youtube />
      <MovieList />
    </div>
  );
};

export default home;