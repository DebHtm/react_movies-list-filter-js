import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovies(quert = '') {
  let movis = [...moviesFromServer];
  const q = quert.trim().toLowerCase();

  if (quert) {
    movis = moviesFromServer.filter(
      movie =>
        movie.title.toLowerCase().includes(q) ||
        movie.description.toLowerCase().includes(q),
    );
  }

  return movis;
}

export const App = () => {
  const [sortFilter, setSortFilter] = useState(filterMovies());

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={event => {
                  setSortFilter(filterMovies(event.target.value));
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={sortFilter} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
