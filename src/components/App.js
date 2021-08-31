import React from "react";
import { HashRouter, Route } from 'react-router-dom';
import "./common/common.css";
import home from "./home";
import Nav from "./common/nav";
import mypage from "./mypage"
import MovieList from './movie/MovieList';
import movieDetail from './movie/movieDetail';



function App() {
  return (
    <HashRouter>
      <Nav />
      <Route exact path="/" component={home} />
      <Route path="/movieList"  component={MovieList} />
      <Route path="/movieDetail"  component={movieDetail} />
      <Route path="/mypage" component={mypage}/>
    </HashRouter>
  );
}

export default App;
 