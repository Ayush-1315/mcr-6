import { useState } from "react";
import comment from "./comment.module.css";
export const CommentModal = ({ onClose,onSubmit }) => {
  const [formData, setFormData] = useState({
    rating: "",
    comment: "",
  });
  const [formValidator,setFormValidator]=useState({
      rating:false,
      comment:false
    })
  const changeHandler=(type,value)=>{
    setFormData(prev=>({...prev,[type]:value}))
    setFormValidator(prev=>({...prev,[type]:value!==0 && value!==""}))
  }
  const submitHandler=()=>{
    if(typeof(onSubmit)==="function"){
       const sendData=Object.keys(formValidator).reduce((acc,curr)=>!formValidator[curr]?false:acc,true)
       if(sendData){
        onSubmit(formData)
       }
       setFormData({rating:"",comment:""});
       setFormValidator({rating:false,comment:false})
    }
  }
  return (
    <div className={comment.wrapper}>
      <div className={comment.container}>
        <h2>Add Your Review</h2>
        <span className={comment.closeBtn} onClick={() => onClose()}>
          <span className="material-symbols-outlined">cancel</span>
        </span>
        <div className={comment.commentBox}>
          <div>
            <label htmlFor="rating">Rating</label>
            <select name="rating" id="rating" value={formData.rating===""? 0: formData.rating} onChange={e=>changeHandler("rating",e.target.value)}>
              <option value="0" disabled={true}>
                Select Rating
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <label htmlFor="comment">Comment</label>
            <input type="text"id="comment" onChange={e=>changeHandler("comment",e.target.value)} value={formData.comment} placeholder="Your Comment"/>
          </div>
          <button onClick={submitHandler}>Submit</button>
        </div>
      </div>
    </div>
  );
};
