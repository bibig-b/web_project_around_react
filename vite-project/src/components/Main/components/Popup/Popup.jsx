export default function Popup(props) {
    //children é o conteúdo de popup
    const {title, children, onClose} = props;
    return (
      <div className="pop-up">
      <div className="pop-up__container">
        <button
          aria-label="Fechar"
          className="pop-up__close"
          type="button"
          onClick={onClose}
        />
        <h2 className="pop-up__title">{title}</h2>
        {children}
      </div>
    </div>
    )
  }