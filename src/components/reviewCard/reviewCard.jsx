import reviewCSS from "./reviewCard.module.css";
export const Review = ({ data }) => {
  console.log(data);
  return (
    <div className={reviewCSS.container}>
      <div className={reviewCSS.profile}>
        <div>
          <span
            style={{ backgroundImage: `url(${data?.pp})` }}
            className={reviewCSS.profilePic}
          ></span>
          <span> {data?.revName} </span>
        </div>
        <span className={reviewCSS.rating}>
          {" "}
          {data?.rating}<span className="material-symbols-outlined">grade</span>
        </span>
      </div>
      <p>{data?.comment}</p>
    </div>
  );
};
