import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import Register from './Register';
import InfoTooltip from './InfoTooltip';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function App() {
  const [isEditProfilePopupOpen, setEditProfileClick] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({name: '', link: ''});

  const [currentUser, setCurrentUser] = useState({name: '', about: '', avatar: '#'});

  const [cards, setCards] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([dataUser, dataCards])  => {
        setCurrentUser(dataUser);
        setCards(dataCards.slice(0, 21));
      })
      .catch(err => console.log(err));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const method = isLiked ? 'DELETE' : 'PUT';
    
    api.likeCard(card._id, method)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(err => console.log(err));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch(err => console.log(err));
  }

  function handleEditProfileClick() {
    setEditProfileClick(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfileClick(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }

  function handleUpdateUser(data) {
    api.setUserInfo(data.name, data.about)
      .then(data => {
        setCurrentUser({
          name: data.name, 
          about: data.about, 
          avatar: currentUser.avatar
        });
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  function handleUpdateAvatar(data) {
    api.setUserAvatar(data.avatar)
      .then(data => setCurrentUser({name: currentUser.name, about: currentUser.about, avatar: data.avatar}))
      .then(() => closeAllPopups())
      .catch(err => console.log(err));
  }

  function handleAddPlaceSubmit(data) {
    api.addCard(data.name, data.link)
      .then(newCard => setCards([newCard, ...cards]))
      .then(() => closeAllPopups())
      .catch(err => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <ProtectedRoute
            exact
            path="/"
            loggedIn={loggedIn}
            onEditProfile={handleEditProfileClick} 
            onAddPlace={handleAddPlaceClick} 
            onEditAvatar={handleEditAvatarClick} 
            onCardClick={handleCardClick} 
            cards={cards} 
            onCardLike={handleCardLike} 
            onCardDelete={handleCardDelete}
            component={Main}
          />
          <Route path="/sign-up">
            <Header>
              <Link to="/sign-in" className="header__link">Вход</Link>
            </Header>
            <Register/>
          </Route>
          <Route path="/sign-in">
            <Header>
              <Link to="/sign-up" className="header__link">Регистрация</Link>
            </Header>
            <Login/>
          </Route>
          <Route>
            {loggedIn ? (
              <Redirect to="/" />
            ) : (
              <Redirect to="/sign-in" />
            )}
          </Route>
        </Switch>
        <EditProfilePopup 
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups} 
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup 
          isOpen={isAddPlacePopupOpen} 
          onClose={closeAllPopups} 
          onAddPlace={handleAddPlaceSubmit}
        />
        <EditAvatarPopup 
          isOpen={isEditAvatarPopupOpen} 
          onClose={closeAllPopups} 
          onUpdateAvatar={handleUpdateAvatar}
        />
        <ImagePopup 
          card={selectedCard} 
          onClose={closeAllPopups}
        />
        <PopupWithForm 
          name="delete" 
          title="Вы уверены?" 
          buttonText="Удалить"
        />
        {/*<InfoTooltip/>*/}
      </div>
    </CurrentUserContext.Provider>
  );
}
