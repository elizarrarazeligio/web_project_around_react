import logo from "./assets/images/logo.svg";
import profileImage from "./assets/images/profile1.jpg";
import editIcon from "./assets/images/edit_icon.svg";
import plusButton from "./assets/images/boton_mas.svg";
import "./App.css";

function App() {
  return (
    <>
      <div class="page">
        <header class="header">
          <img
            src={logo}
            alt="Logo Alrededor de los Estados Unidos"
            class="header__logo"
          />
          <div class="header__line"></div>
        </header>

        <main class="content">
          <section class="profile">
            <div class="profile__image">
              <img
                src={profileImage}
                alt="Foto de perfil del usuario"
                class="profile__image-user"
              />
              <img
                src={editIcon}
                alt="Editar perfil"
                class="profile__image-edit"
              />
            </div>

            <div class="profile__info">
              <div class="profile__heading">
                <h1 class="profile__name">Jacques Costeau</h1>
                <div class="profile__edit">
                  <img
                    src={editIcon}
                    alt="Boton editar"
                    class="profile__edit-image"
                  />
                </div>
              </div>
              <h2 class="profile__hobby">Explorador</h2>
            </div>

            <div class="profile__add">
              <img
                src={plusButton}
                alt="Botón más"
                class="profile__add-image"
              />
            </div>
          </section>

          <section class="photos"></section>
        </main>

        <footer class="footer">
          <p class="footer__copyright">
            &#169; 2024 Around the U.S. by Eligio Elizarraraz
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
