import react from "react";
import { useState } from "react/cjs/react.development";
import Modal from "./Modal";
const Card = ({key,title,price,rating,image,link}) => {
    return (
        <>
          <div className="card" >
            <img src={image} alt="" />
             <div className="bottom">
                <h3 className="title">{title}</h3>
                <p className="amount">&#8377;{price}</p>
                <p className="rating">{rating}</p>  
                <a href="#">{link}</a>                 
             </div>
           </div>
        </>
    )
}
export default Card;