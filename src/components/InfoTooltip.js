import accept from '../images/accept.svg';

export default function InfoTooltip() {
  return (
    <div className="popup popup_active">
      <div className="popup__auth-container">
        <button type="button" className="popup__button-close button" aria-label="Закрыть"></button>
        <img className="popup__auth-image" src={accept}/>
        <h2 className="popup__auth-title">Вы успешно зарегистрировались!</h2>
      </div>
    </div>
  )
}