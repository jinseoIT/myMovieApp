import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./components/home";
import mypage from "./components/mypage"
import movieList from './components/movieList';
import movieDetail from './movieDetail';



function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/movieList"  component={movieList} />
      <Route path="/movieDetail"  component={movieDetail} />
      <Route path="/mypage" component={mypage}/>
    </BrowserRouter>
  );
}

export default App;
 