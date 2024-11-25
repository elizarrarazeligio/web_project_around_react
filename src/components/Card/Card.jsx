import trashIcon from "../../assets/images/trash.png";
import likeIcon from "../../assets/images/boton_like.svg";

export default function Card(props) {
  console.log(props);
  const { name, link, isLiked } = props.card;

  return (
    <div className="photos__card">
      <img className="photos__image" src={link} alt="" />
      <img className="photos__trash" src={trashIcon} alt="" />
      <div className="photos__heading">
        <h2 className="photos__place">{name}</h2>
        <div className="photos__likes">
          <img className="photos__like" src={likeIcon} alt="Botón de Like" />
          <span className="photos__like-number"></span>
        </div>
      </div>
    </div>
  );
}
