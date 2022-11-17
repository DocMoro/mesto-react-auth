import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  const nameRef = useRef();
  const linkRef = useRef();

  useEffect(() => {
    nameRef.current.value = '';
    linkRef.current.value = '';
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value
    });
  }
  
  return (
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} buttonText="Добавить">
      <input ref={nameRef} name="cardName" type="text" className="popup__input popup__input_field_card-name" placeholder="Название" minLength="2" maxLength="30" required />
      <span className="popup__input-error cardName-error"></span>
      <input ref={linkRef} name="cardLink" type="url" className="popup__input popup__input_field_card-link" placeholder="Ссылка на картинку" required />
      <span className="popup__input-error cardLink-error"></span>
    </ PopupWithForm>
  )
}