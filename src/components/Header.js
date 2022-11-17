import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../images/logo.svg';

export default function Header({email, handleExitClick}) {
  const location = useLocation();
  const [linkData, setLinkData] = useState({
    text: '',
    url: ''
  });

  useEffect(() => {
    switch(location.pathname) {
      case '/':
        setLinkData({
          text: 'Выход',
          url: 'sign-in'
        });
        break;

      case '/sign-in':
        setLinkData({
          text: 'Регистрация',
          url: '/sign-up'
        });
        break;

      case '/sign-up':
        setLinkData({
          text: 'Вход',
          url: 'sign-in'
        });
        break;
    }
  }, [location]);

  function handleClick() {
    if(location.pathname === '/') {
      handleExitClick();
    }
  }

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип место" />
      <div className="header__container">
        <p className="header__email">{email}</p>
        <Link to={linkData.url} className="link header__link" onClick={handleClick}>{linkData.text}</Link>
      </div>
    </header>
  )
}