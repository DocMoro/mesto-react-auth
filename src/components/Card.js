import { useContext } from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Card({onCardClick, onCardLike, onCardDelete, card}) {
  const {link, name, likes, owner} = card;
  const currentUser = useContext(CurrentUserContext);

  const isOwn = owner._id === currentUser._id;

  const isLiked = likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = isLiked ? 'card__button button card__button_like' : 'card__button button';


  function handleClick() {
    onCardClick(card);
  }

  function handleClickLike() {
    onCardLike(card);
  }

  function handleCardDelete() {
    onCardDelete(card);
  }

  return (
    <li className="card">
      <img className="card__image" src={link} alt={name} onClick={handleClick}/>
      {isOwn && <button type="button" className="card__delete button" onClick={handleCardDelete} aria-label="Удалить"></button>}
      <div className="card__group">
        <h2 className="card__title">{name}</h2>
        <div className="card__like">
          <button type="button" className={cardLikeButtonClassName} onClick={handleClickLike} aria-label="Мне нравится"></button>
          <p className="card__counter-like">{likes.length}</p>
        </div>
      </div>
    </li>
  )
}