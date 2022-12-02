import React from 'react';
import HomePage from '../pages/HomePage/HomePage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import css from './App.module.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import cn from 'classnames';
import MovieDetails from 'pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <div>
      <nav className={css.header}>
        <NavLink to='/' className={({ isActive }) =>
          cn(css.tabPage, { [css.active]: isActive, })}>
          Home
        </NavLink>
        <NavLink to='/movies' className={({ isActive }) =>
          cn(css.tabPage, { [css.active]: isActive, })}>
          Movies
        </NavLink>
      </nav>

      <>
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/*" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        </Routes>
      </>
    </div >
  );
};
