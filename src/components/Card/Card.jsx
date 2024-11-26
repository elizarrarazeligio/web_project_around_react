import trashIcon from "../../assets/images/trash.png";
import likeIcon from "../../assets/images/boton_like.svg";
import ImagePopup from "../Main/Popup/ImagePopup/ImagePopup";

export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const { onOpen } = props;

  const imageComponent = {
    children: <ImagePopup link={link} place={name} />,
  };

  return (
    <div className="photos__card">
      <img
        className="photos__image"
        src={link}
        alt=""
        onClick={() => onOpen(imageComponent)}
      />
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
