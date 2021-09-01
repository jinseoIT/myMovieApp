import React from 'react';
// import "./movie.css";

const MovieInfoGrid = (props) => {

  console.log(props)
  const movieInfo = props.movie;
  
  // const rendering = () => {
  //   const result = [];
  //   const blockSize = 16;
  //   for (let i = 0; i < blockSize; i++){
  //     result.push(<div></div>);
  //   }
  //   return result;
  // }

  return (
    <div className="movieInfo__wrapper">
      <div>제목</div>
      <div>{movieInfo.title}</div>
      <div>개봉일</div>
      <div>{movieInfo.release_date}</div>
      <div>수익</div>
      <div>${movieInfo.revenue}</div>
      <div>상영시간</div>
      <div>{movieInfo.runtime} 분</div>
      <div>평균 평점</div>
      <div>{movieInfo.vote_average}</div>
      <div>평점 참여자 수</div>
      <div>{movieInfo.vote_count} 명</div>
      <div>상영 유무</div>
      <div>{movieInfo.status}</div>
      <div>인기</div>
      <div>{movieInfo.popularity}</div>
    </div>
  );
};

export default MovieInfoGrid;