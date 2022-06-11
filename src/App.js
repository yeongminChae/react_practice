import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>loading... </h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movies.id}>
              <img src={movie.medium_cover_image} />
              <h2> {movie.title}</h2>
              <p>{movies.summary}</p>
              {movie.hasOwnProperty("genres") ? (
                <ul>
                  {" "}
                  {movie.genres.map((g) => (
                    <li key={g}>{g} </li>
                  ))}{" "}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
