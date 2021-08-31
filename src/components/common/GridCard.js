import React from 'react'
import "./gridcard.css";

function GridCard(props) {
  return (
    <div className="gridCard">
        <a href="#!">
          <img src={props.image} alt={props.movieNmae}/>
        </a>
    </div>
  )
}

export default GridCard