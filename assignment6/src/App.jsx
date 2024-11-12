import React from 'react';
import MovieList from './MovieList';
import './App.css';

function App() {
  return (
    <div className="App">
     
      <header className="navbar navbar-expand-lg bg-danger text-white p-3">
        <div className="container-fluid d-flex align-items-center">
          <h1 className="navbar-brand fw-bold fs-3 mb-0">FILM-KU</h1>
          <form className="d-flex ms-auto search-form">
            <input
              type="search"
              placeholder="Cari film..."
              className="form-control me-2 rounded-pill px-3"
              aria-label="Search"
            />
            <button className="btn btn-dark rounded-pill px-4 fw-bold" type="submit">Carikan</button>
          </form>
        </div>
      </header>

      
      <main className="container my-5">
        <h2 className="text-start mb-4 fw-bold">Tampilkan film favorit Anda</h2>
        <MovieList />
      </main>
    </div>
  );
}

export default App;
