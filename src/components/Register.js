import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="auth">
      <form name="register-form" className="auth__form">
        <div className="auth__up">
          <h2 className="auth__title">Регистрация</h2>
          <input name="registerEmail" type="email" className="auth__input" placeholder="Email" required />
          <span className="auth__input-error registerEmail-error"></span>
          <input name="registerPassword" type="password" className="auth__input" placeholder="Пароль" required />
          <span className="auth__input-error registerPassword-error"></span>
        </div>
        <div className="auth__dn">
          <button type="submit" className="auth__button">Зарегестрироваться</button>
          <Link to="/sign-in" className="auth__link button">Ужу зарегестрированы? Войти</Link>
        </div>
      </form>
    </div>
  )
}