export default function Login() {
  return (
    <div className="auth">
      <form name="login-form" className="auth__form">
        <div className="auth__up">
          <h2 className="auth__title">Вход</h2>
          <input name="loginEmail" type="email" className="auth__input" placeholder="Email" required />
          <span className="auth__input-error loginEmail-error"></span>
          <input name="loginPassword" type="password" className="auth__input" placeholder="Пароль" required />
          <span className="auth__input-error loginPassword-error"></span>
        </div>
        <div className="auth__dn">
          <button type="submit" className="auth__button auth__button_login">Войти</button>
        </div>
      </form>
    </div>
  )
}