export default function NewCard() {
  return (
    <form className="form popup__form" novalidate>
      <fieldset className="form__format">
        <input
          id="place-input"
          className="form__input form__input_type_place"
          type="text"
          name="name"
          placeholder="Lugar"
          minlength="2"
          maxlength="30"
          required
        />
        <span className="form__input-error place-input-error"></span>
        <input
          id="image-input"
          className="form__input form__input_type_link"
          type="url"
          name="link"
          placeholder="URL de imagen"
          required
        />
        <span className="form__input-error image-input-error"></span>
      </fieldset>
      <button className="form__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
