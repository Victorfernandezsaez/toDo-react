import "./trending.css";
import { useRef } from "react";

export default function Row({ name, cards }) {
  let htmlRowRef = useRef(null);
  const moviePosters = cards.map((movieCard) => (
    <div className="slider-item">
        <a href={movieCard.link}>
        <img height="100%" alt="qwodijwd" src={`${movieCard.picture}`}/>
        </a> 
    </div>
  ));

  const handlePrevBtnClick = () => {
    htmlRowRef.current.scrollLeft -= window.innerWidth - 100
  };

  const handleNextBtnClick = () => {
    htmlRowRef.current.scrollLeft += window.innerWidth - 100
  };

  return (
    <>
      <h2 className="white-text margin-botom">{name}</h2>

      <div
        ref={htmlRowRef}
        className="netflix-row"
      >
        <div
          onClick={handlePrevBtnClick}
          className="arrow arrow-left white-text"
        >
          ˂
        </div>
        <div
          onClick={handleNextBtnClick}
          className="arrow arrow-right white-text"
        >
          ˃
        </div>
        {moviePosters}
      </div>
    </>
  );
}