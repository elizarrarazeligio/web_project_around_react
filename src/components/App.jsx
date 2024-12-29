import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import "../index.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useState, useEffect } from "react";
import { api } from "../utils/api";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

  // Efecto para renderizar información de usuario al montar App
  useEffect(() => {
    api.getUserInfo().then((data) => setCurrentUser(data));
  }, []);

  // Efecto para renderizar tarjetas al montar App
  useEffect(() => {
    api.getInitialCards().then((data) => setCards(data));
  }, [cards]);

  // Función para editar información de usuario
  const handleUpdateUser = (data) => {
    (async () => {
      await api.editUserInfo(data.name, data.about).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  };

  // Función para cambiar foto de perfil de usuario
  const handleUpdateAvatar = (avatar) => {
    (async () => {
      await api.changeProfilePicture(avatar).then((newAvatar) => {
        setCurrentUser(newAvatar);
        handleClosePopup();
      });
    })();
  };

  // Función para abrir Popup
  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  // Función para cerrar Popup
  function handleClosePopup() {
    setPopup(null);
  }

  // Función para manejo de Likes
  async function handleCardLike(card, isLiked) {
    // Envía una solicitud a la API y obtén los datos actualizados de la tarjeta
    await api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }

  // Función para borrar Cards
  async function handleCardDelete(card) {
    await api
      .deleteCard(card._id)
      .then((deletedCard) => {
        setCards((state) =>
          state.filter((currentCard) => currentCard._id !== deletedCard._id)
        );
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider
          value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
        >
          <Header />
          <Main
            popup={popup}
            cards={cards}
            onClosePopup={handleClosePopup}
            onOpenPopup={handleOpenPopup}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </>
  );
}

export default App;
