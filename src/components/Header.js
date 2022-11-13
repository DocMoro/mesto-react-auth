import logo from '../images/logo.svg';
import React from 'react';

export default function Header({children}) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип место" />
      {children}
    </header>
  )
}