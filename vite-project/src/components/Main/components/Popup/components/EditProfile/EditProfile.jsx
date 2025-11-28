export default function EditProfile() {
    return (
        <form class="pop-up__form">
        <input
          type="text"
          class="pop-up__input"
          name="name"
          id="profile-name-input"
          placeholder="Jacques Cousteau"
          required
          minLength="2"
          maxLength="40"
        />
        <span class="pop-up__error" id="profile-name-input-error"></span>
        <input
          type="text"
          class="pop-up__input"
          name="role"
          id="profile-role-input"
          placeholder="Explorador"
          required
          minLength="2"
          maxLength="200"
        />
        <span class="pop-up__error" id="profile-role-input-error"></span>
        <button type="submit" class="pop-up__submit">Salvar</button>
      </form>
    );
    }