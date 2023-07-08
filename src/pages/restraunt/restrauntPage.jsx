import { useNavigate, useParams } from "react-router";

import restrauntCSS from "./restraunt.module.css";
import { Review } from "../../components/reviewCard/reviewCard";
import { useState } from "react";
import { CommentModal } from "../../components/commentModal/commentModal";
import { useData } from "../../context/dataContext";
export const RestrauntPage = () => {
  const { rID } = useParams();
  const {addComment,state}=useData();
  const [showCommentBox,setShowCommentBox]=useState(false);
  const navigate=useNavigate();
  const restaurant = state.allData.find(({ id }) => id === Number(rID));
  const onSubmit=(data)=>{
    addComment(Number(rID),{revName:"Ayush",pp:"https://shorturl.at/cmFHN",...data});
    setShowCommentBox(false);
  }
  return (
    <>
      <nav className={restrauntCSS.nav}>
        <span className="material-symbols-outlined" onClick={()=>navigate("/")}>arrow_back</span>
      </nav>
        {showCommentBox && <CommentModal onClose={()=>setShowCommentBox(false)} onSubmit={onSubmit}/>}
      <div className={restrauntCSS.header}>
        <div>
          <h1>{restaurant?.name}</h1>
          <p>
            {restaurant?.menu?.map(({ name },index) => (
              <span key={index}>{name},</span>
            ))}
          </p>
          <p>{restaurant?.address}</p>
          <p>Average Rating: {(restaurant?.ratings.reduce((avg,{rating})=>avg+=Number(rating),0)/restaurant?.ratings.length).toFixed(2)}</p>
        </div>
        <div>
          <button onClick={()=>setShowCommentBox(true)}>Add Review</button>
        </div>
      </div>
      <div className={restrauntCSS.ratingsBox}>
        <h2>Reviews</h2>
        {restaurant?.ratings?.map((rating,index)=><Review data={rating} key={index}/>)}
      </div>
    </>
  );
};
