import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const avatarRef = useRef();

  useEffect(() => {
    avatarRef.current.value = '';
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
  
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} buttonText="Добавить">
      <input ref={avatarRef} name="avatarLink" type="url" className="popup__input" placeholder="Ссылка на картинку" required />
      <span className="popup__input-error avatarLink-error"></span>
    </ PopupWithForm>
  )
}