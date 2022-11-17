import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default function AuthForm({loggedIn, callback, register}) {
  const [data, setData] = useState({
    password: '',
    email: ''
  });

  function handleChange(e) {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    callback(data);
    setData({
      password: '',
      email: ''
    });
  }

  if (loggedIn) {
    return <Redirect to="/"/>;
  }

  return (
    <div className="auth">
      <form name="register-form" className="auth__form" onSubmit={handleSubmit}>
        <div className="auth__up">
          <h2 className="auth__title">{register ? 'Регистрация' : 'Вход'}</h2>
          <input name="email" type="email" className="auth__input" placeholder="Email" value={data.email} onChange={handleChange} required />
          <span className="auth__input-error registerEmail-error"></span>
          <input name="password" type="password" className="auth__input" placeholder="Пароль" value={data.password} onChange={handleChange} required />
          <span className="auth__input-error registerPassword-error"></span>
        </div>
        <div className="auth__dn">
          <button type="submit" className={`auth__button ${!register && "auth__button_login"}`}>{register ? 'Зарегестрироваться' : 'Войти'}</button>
          {register && <Link to="/sign-in" className="link auth__link">Ужу зарегестрированы? Войти</Link>}
        </div>
      </form>
    </div>
  )
}