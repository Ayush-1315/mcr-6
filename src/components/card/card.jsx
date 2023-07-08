import {useNavigate} from "react-router-dom";
import cardCSS from "./card.module.css";
export const Card = ({ data }) => {
  const {name,imgSrc,price,qty,restraunt,id}=data;
 const navigate=useNavigate();
 const clickHandler=()=>navigate(`restraunt/${id}`);
  return (
    <div className={cardCSS.card} onClick={clickHandler}>
      <div
        className={cardCSS.cardHead}
        style={{
          backgroundImage: `url(${imgSrc})`
        }}
      ></div>
      <div className={cardCSS.cardBody}>
        <span className={cardCSS.cardTitle}>{name}</span>
        <div>
        <p className={cardCSS.description}>
         Rs {price} for {qty}
        </p>
        <p className={cardCSS.description}>{restraunt}</p>
        </div>
      </div>
    </div>
  );
};
