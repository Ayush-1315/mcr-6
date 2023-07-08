import cardCSS from "./card.module.css";
export const Card = ({ data }) => {
    console.log(data)
  const {name,imgSrc,price,qty,restraunt}=data;
  return (
    <div className={cardCSS.card}>
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
