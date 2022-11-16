import { useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards, onCardLike, onCardDelete}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content page__section">
      <section className="profile content__profile">
        <div className="profile__left-column">
          <div className="profile__edit-avatar">
            <img className="profile__avatar" src={currentUser.avatar} alt="Аватар пользователя" onClick={onEditAvatar} />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button type="button" className="profile__edit-button button" aria-label="Редактировать" onClick={onEditProfile}></button>
            <p className="profile__about-me">{currentUser.about}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button button" aria-label="Добавить" onClick={onAddPlace}></button>
      </section>
      <section className="cards-section content__cards-section">
        <ul className="cards">
          {cards.map((card) => (
            <Card card={card} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} key={card._id}/>
          ))}
        </ul>
      </section>
    </main>
  )
}