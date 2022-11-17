import { useState, useEffect, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    onUpdateUser({
      name,
      about: description
    });
  }

  return (
    <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} buttonText="Подтвердить">
      <input name="profileName" type="text" className="popup__input popup__input_field_name" value={name} onChange={handleChangeName} placeholder="Имя" minLength="2" maxLength="40" required />
      <span className="popup__input-error profileName-error"></span>
      <input name="profileInfo" type="text" className="popup__input popup__input_field_about-me" value={description} onChange={handleChangeDescription} placeholder="О себе" minLength="2" maxLength="200" required />
      <span className="popup__input-error profileInfo-error"></span>
    </ PopupWithForm>
  )
}