import logo from '../images/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип место" />
      <Link to="/sign-up" className="header__link">Регистрация</Link>
    </header>
  )
}