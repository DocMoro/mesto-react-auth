import logo from '../images/logo.svg';

export default function Header({children}) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип место" />
      <div className="header__container">
        {children}
      </div>
    </header>
  )
}