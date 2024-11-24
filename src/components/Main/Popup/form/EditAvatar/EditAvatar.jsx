export default function EditAvatar() {
  return (
    <form className="form popup__form" novalidate>
      <fieldset className="form__format">
        <input
          id="user-input"
          className="form__input form__input_type_user"
          type="url"
          name="user"
          placeholder="URL de foto de perfil"
          required
        />
        <span className="form__input-error user-input-error"></span>
      </fieldset>
      <button className="form__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
