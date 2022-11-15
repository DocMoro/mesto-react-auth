import { useState } from 'react';

export default function Login() {
  const [data, setData] = useState({
    password: '',
    email: ''
  });

  function handleChange(evt) {
    console.log(data);
    setData({
      ...data,
      [evt.target.name]: evt.target.value
    });
  }

  return (
    <div className="auth">
      <form name="login-form" className="auth__form">
        <div className="auth__up">
          <h2 className="auth__title">Вход</h2>
          <input name="email" type="email" className="auth__input" placeholder="Email" value={data.email} onChange={handleChange} required />
          <span className="auth__input-error loginEmail-error"></span>
          <input name="password" type="password" className="auth__input" placeholder="Пароль" value={data.password} onChange={handleChange} required />
          <span className="auth__input-error loginPassword-error"></span>
        </div>
        <div className="auth__dn">
          <button type="submit" className="auth__button auth__button_login">Войти</button>
        </div>
      </form>
    </div>
  )
}