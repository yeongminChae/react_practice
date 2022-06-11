import PropTypes from "prop-types";

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2> {title}</h2>
      <p>{summary}</p>
      {hasOwnProperty("genres") ? (
        <ul>
          {genres.map((g) => (
            <li key={g}>{g} </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

Movie.prototype = {
  coverImg: PropTypes.string.isRequired,
  titme: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
