import { BrowserRouter, Route } from 'react-router-dom';
import "./components/common/common.css";
import home from "./components/home";
import mypage from "./components/mypage"
import movieList from './components/movie/movieList';
import movieDetail from './components/movie/movieDetail';



function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={home} />
      <Route path="/movieList"  component={movieList} />
      <Route path="/movieDetail"  component={movieDetail} />
      <Route path="/mypage" component={mypage}/>
    </BrowserRouter>
  );
}

export default App;
 