import editIcon from "../../assets/images/edit_icon.svg";
import plusButton from "../../assets/images/boton_mas.svg";
import Popup from "./Popup/Popup";
import NewCard from "./Popup/form/NewCard/NewCard";
import EditProfile from "./Popup/form/EditProfile/EditProfile";
import EditAvatar from "./Popup/form/EditAvatar/EditAvatar";
import Card from "../Card/Card";
import { api } from "../../utils/api";
import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Main(props) {
  const [cards, setCards] = useState([]);
  const { popup, onClosePopup, onOpenPopup } = props;

  const { currentUser } = useContext(CurrentUserContext);

  // Asignación de props a variables para generación de Popups
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const EditProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

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

  // Efecto para renderizar tarjetas al montar Main
  useEffect(() => {
    api.getInitialCards().then((data) => setCards(data));
  }, [cards]);

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__image"
          onClick={() => onOpenPopup(editAvatarPopup)}
        >
          <img
            src={currentUser.avatar}
            alt="Foto de perfil del usuario"
            className="profile__image-user"
          />
          <img
            src={editIcon}
            alt="Editar perfil"
            className="profile__image-edit"
          />
        </div>

        <div className="profile__info">
          <div className="profile__heading">
            <h1 className="profile__name">{currentUser.name}</h1>
            <div
              className="profile__edit"
              onClick={() => onOpenPopup(EditProfilePopup)}
            >
              <img
                src={editIcon}
                alt="Boton editar"
                className="profile__edit-image"
              />
            </div>
          </div>
          <h2 className="profile__hobby">{currentUser.about}</h2>
        </div>

        <div className="profile__add" onClick={() => onOpenPopup(newCardPopup)}>
          <img
            src={plusButton}
            alt="Botón más"
            className="profile__add-image"
          />
        </div>
      </section>

      <section className="photos">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              onOpen={onOpenPopup}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          );
        })}
      </section>

      {/* Evaluando hook para abrir Popups */}
      {popup && (
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
