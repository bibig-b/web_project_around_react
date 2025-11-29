export default function NewCard() {
    return (
      <form
        className="pop-up__form"
        name="card-form"
        id="new-card-form"
      >
        <input
          className="pop-up__input"
          id="card-name"
          maxLength="30"
          minLength="1"
          name="card-name"
          placeholder="Título"
          required
          type="text"
        />
        <span className="pop-up__error" id="card-name-error"></span>
        <input
          className="pop-up__input"
          id="card-link"
          name="link"
          placeholder="Link da imagem"
          required
          type="url"
        />
        <span className="pop-up__error" id="card-link-error"></span>
        <button type="submit" className="pop-up__submit">Criar</button>
      </form>
    );
  }