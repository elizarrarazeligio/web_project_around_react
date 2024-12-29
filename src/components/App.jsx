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

  useEffect(() => {
    api.getUserInfo().then((data) => setCurrentUser(data));
  }, []);

  // Función para actualizar información de usuario
  const handleUpdateUser = (data) => {
    (async () => {
      await api.editUserInfo(data.name, data.about).then((newData) => {
        setCurrentUser(newData);
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

  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
          <Header />
          <Main
            popup={popup}
            onClosePopup={handleClosePopup}
            onOpenPopup={handleOpenPopup}
          />
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </>
  );
}

export default App;
