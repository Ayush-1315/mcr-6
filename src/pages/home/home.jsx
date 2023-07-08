import homeCSS from "./home.module.css";
import { cuisineData } from "../../data";
import { useData } from "../../context/dataContext";
import { Card } from "../../components/card/card";
export const Home=()=>{
    const {state,dispatch}=useData();
    return <>
    <h1>Food Ordering App</h1>
    <h2>Select Your Cuisine:</h2>
    <div className={homeCSS.container}>
        {cuisineData.map((cusine,index)=><button key={index} onClick={()=>dispatch({type:'SET_CUSINE',payload:cusine.id})}>{cusine.name}</button>)}
    </div>
    {state && <>
     {state?.showData.map((restraunt,index)=><div key={index} className={homeCSS.objectContainer}>
        <h2>Dishes by {restraunt?.name}</h2>
        <div className={homeCSS.container}>
        {restraunt?.menu.map((item,index)=><Card data={{...item,restraunt:restraunt?.name,id:restraunt.id}} key={index}/>)}
        </div>
     </div>)}
    </>}
    
    </>
}