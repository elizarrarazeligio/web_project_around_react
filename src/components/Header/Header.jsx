import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <>
      <header class="header">
        <img
          src={logo}
          alt="Logo Alrededor de los Estados Unidos"
          class="header__logo"
        />
        <div class="header__line"></div>
      </header>
    </>
  );
}

export default Header;
