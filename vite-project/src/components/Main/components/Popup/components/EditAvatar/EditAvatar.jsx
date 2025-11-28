export default function EditAvatar() {
    return (
        <form class="pop-up__form">
        <input
          type="url"
          class="pop-up__input"
          name="avatar"
          id="avatar-input"
          placeholder="Link da imagem"
          required
          minLength="1"
          maxLength="200"
        />
        <span class="pop-up__error" id="avatar-input-error"></span>
        <button type="submit" class="pop-up__submit">Salvar</button>
      </form>
    );
  }