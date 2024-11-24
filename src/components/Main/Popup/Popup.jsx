export default function Popup(props) {
  const { title, children } = props;

  return (
    <section className="popup">
      <div className="popup__container">
        <img
          src="./images/close_icon.svg"
          alt="Botón cerrar formulario"
          className="popup__close"
        />
        <h2 className="popup__title">{title}</h2>
        {children}
      </div>
    </section>
  );
}
