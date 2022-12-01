import React from 'react';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import css from './App.module.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Movies from './Movies/Movies';
import Home from './Home/Home';
import cn from 'classnames';

export const App = () => {
  return (
    <div>
      <nav className={css.header}>
        <NavLink to='/home' className={({ isActive }) =>
          cn(css.tabPage, { [css.active]: isActive, })}>
          <Home />
        </NavLink>
        <NavLink to='/movies' className={({ isActive }) =>
          cn(css.tabPage, { [css.active]: isActive, })}>
          <Movies />
        </NavLink>
      </nav>

      <>
        <Routes >
          <Route path="/home" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
        </Routes>
      </>
    </div >
  );
};
