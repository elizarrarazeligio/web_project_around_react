import profileImage from "../../assets/images/profile1.jpg";
import editIcon from "../../assets/images/edit_icon.svg";
import plusButton from "../../assets/images/boton_mas.svg";

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image">
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
            <div className="profile__edit">
              <img
                src={editIcon}
                alt="Boton editar"
                className="profile__edit-image"
              />
            </div>
          </div>
          <h2 className="profile__hobby">Explorador</h2>
        </div>

        <div className="profile__add">
          <img
            src={plusButton}
            alt="Botón más"
            className="profile__add-image"
          />
        </div>
      </section>

      <section className="photos"></section>
    </main>
  );
}

export default Main;
