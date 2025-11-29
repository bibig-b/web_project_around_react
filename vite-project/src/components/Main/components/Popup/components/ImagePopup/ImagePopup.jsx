export default function ImagePopup(props) {
    const {card} = props;
    return (
    <img className="img__pop-up" src= {card.link} alt={card.name} />
    );
   


}
