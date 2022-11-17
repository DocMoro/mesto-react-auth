export default function ImagePopup({onClose, card}) {
  const {link, name} = card;

  return (
    <div className={`popup popup_card page__card-popup ${link !== '' && "popup_active"}`}>
      <div className="popup__card-container">
        <button type="button" className="popup__button-close button" aria-label="Закрыть" onClick={onClose}></button>
        <img className="popup__image" src={link} alt={name} />
        <h2 className="popup__subtitle">{name}</h2>
      </div>
    </div>
  )
}