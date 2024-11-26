import profileImage from "../../assets/images/profile1.jpg";
import editIcon from "../../assets/images/edit_icon.svg";
import plusButton from "../../assets/images/boton_mas.svg";
import { useState } from "react";
import Popup from "./Popup/Popup";
import NewCard from "./Popup/form/NewCard/NewCard";
import EditProfile from "./Popup/form/EditProfile/EditProfile";
import EditAvatar from "./Popup/form/EditAvatar/EditAvatar";
import Card from "../Card/Card";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

function Main() {
  const [popup, setPopup] = useState(null);

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

  // Función para abrir Popup
  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  // Función para cerrar Popup
  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__image"
          onClick={() => handleOpenPopup(editAvatarPopup)}
        >
          <img
            src={profileImage}
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
            <h1 className="profile__name">Jacques Costeau</h1>
            <div
              className="profile__edit"
              onClick={() => handleOpenPopup(EditProfilePopup)}
            >
              <img
                src={editIcon}
                alt="Boton editar"
                className="profile__edit-image"
              />
            </div>
          </div>
          <h2 className="profile__hobby">Explorador</h2>
        </div>

        <div
          className="profile__add"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          <img
            src={plusButton}
            alt="Botón más"
            className="profile__add-image"
          />
        </div>
      </section>

      <section className="photos">
        {cards.map((card) => {
          return <Card key={card._id} card={card} onOpen={handleOpenPopup} />;
        })}
      </section>

      {/* Evaluando hook para abrir Popups */}
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
