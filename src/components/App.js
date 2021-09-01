import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./common/common.css";
import home from "./home";
import Nav from "./common/nav";
import mypage from "./mypage"
import MovieList from './movie/movieList';
import movieDetail from './movie/movieDetail';
import Login from "./account/Login";



function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/movieList"  component={MovieList} />
        <Route path="/movieDetail/:movieId"  component={movieDetail} />
        <Route path="/mypage" component={mypage} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
 