import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import "../index.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useState, useEffect } from "react";
import { api } from "../utils/api";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo().then((data) => setCurrentUser(data));
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api
        .editUserInfo(data.name, data.about)
        .then((newData) => setCurrentUser(newData));
    })();
  };

  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
          <Header />
          <Main />
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </>
  );
}

export default App;
