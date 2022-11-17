export default function PopupWithForm({name, title, isOpen, onClose, buttonText, children, onSubmit}) {
  return (
    <div className={`popup page__${name}-popup ${isOpen && "popup_active"}`}  >
      <div className="popup__container">
        <button type="button" className="popup__button-close button" aria-label="Закрыть" onClick={onClose}></button>
        <form name={`${name}-form`} className="popup__form" onSubmit={onSubmit}>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button type="submit" className="popup__button button">{buttonText}</button>
        </form>
      </div>
    </div>
  )
}