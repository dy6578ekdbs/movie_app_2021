import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

//state안필요하면 컴포넌트가 class가 될 필요는 없다.

function Movie({id, year, title, summary, poster, genres}){ //alt, title : 이미지 위에 마우스 올리면 뜸
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} /> 
           <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <h3 className="movie_summary">{summary.slice(0,140)}...</h3>
            <ul className="genres">
                {genres.map((genre, index) => ( //map함수는 item number도 준다.
                    <li key={index} className="genres_genre">{genre}</li>
                ))}
            </ul>
           </div>
        </div>
    )
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).name.isRequired
}

export default Movie;