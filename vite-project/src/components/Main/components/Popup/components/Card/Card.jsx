
export default function Card(props) {
    const {onImageClick} = props;
    const {name, link, isLiked} = props.card;

   function handleLikeClick() {
    {isLiked ? 'card__like-button_isliked' : ''}
   }
    function handleDeleteClick() {
        deleteCard();
    }
    return (
      <div className="card">
        <img className="card__image" src={link} alt={name} onClick={() => onImageClick(props.card)} />
        <button
          aria-label="Delete card"
          className="card__delete-button"
          type="button"
            onClick={handleDeleteClick}
        />
        <div className="card__description">
          <h2 className="card__title">{name}</h2>
          <button
            aria-label="Like card"
            type="button"
            className="card__like-button"
            onClick={handleLikeClick}
          />
        </div>
      </div>
    );
}