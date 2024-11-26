export default function EditProfile() {
  return (
    <form className="form popup__form" noValidate>
      <fieldset className="form__format">
        <input
          id="name-input"
          className="form__input form__input_type_name"
          type="text"
          name="name"
          placeholder="Nombre"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="form__input-error name-input-error"></span>
        <input
          id="about-input"
          className="form__input form__input_type_job"
          type="text"
          name="about"
          placeholder="Acerca de mí"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="form__input-error about-input-error"></span>
      </fieldset>
      <button className="form__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
