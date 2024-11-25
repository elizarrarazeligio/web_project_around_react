import profileImage from "../../assets/images/profile1.jpg";
import editIcon from "../../assets/images/edit_icon.svg";
import plusButton from "../../assets/images/boton_mas.svg";
import { useState } from "react";
import Popup from "./Popup/Popup";
import NewCard from "./Popup/form/NewCard/NewCard";
import EditProfile from "./Popup/form/EditProfile/EditProfile";
import EditAvatar from "./Popup/form/EditAvatar/EditAvatar";

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

      <section className="photos"></section>

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
