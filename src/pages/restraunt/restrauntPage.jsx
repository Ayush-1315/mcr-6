import { useNavigate, useParams } from "react-router";

import { restaurantsData } from "../../data";
import restrauntCSS from "./restraunt.module.css";
export const RestrauntPage = () => {
  const { rID } = useParams();
  const navigate=useNavigate();
  const restaurant = restaurantsData.find(({ id }) => id === Number(rID));
  console.log(restaurant);
  return (
    <>
      <nav className={restrauntCSS.nav}>
        <span className="material-symbols-outlined" onClick={()=>navigate("/")}>arrow_back</span>
      </nav>
      <div className={restrauntCSS.header}>
        <div>
          <h1>{restaurant?.name}</h1>
          <p>
            {restaurant?.menu?.map(({ name }) => (
              <span>{name},</span>
            ))}
          </p>
          <p>{restaurant?.address}</p>
          <p>Average Rating: {restaurant?.averageRating}</p>
        </div>
        <div>
          <button>Add Review</button>
        </div>
      </div>
    </>
  );
};
