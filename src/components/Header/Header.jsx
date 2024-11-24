import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <>
      <header className="header">
        <img
          src={logo}
          alt="Logo Alrededor de los Estados Unidos"
          className="header__logo"
        />
        <div className="header__line"></div>
      </header>
    </>
  );
}

export default Header;
