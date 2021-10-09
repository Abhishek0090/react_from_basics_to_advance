import React from "react";
import Heading from "./Heading";
import Images from "./Images";

function Card(props){
    return(
        <div className="cards">
        <div className="card">
         <Images imgsrc={props.imgsrc}/>
          <div className="card_info">
            <span className="card_category">{props.title}</span>
           <Heading animeName={props.animeName}/>
            <a href={props.link} target="_blank" rel="noreferrer">
              <button className="btn">Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    )
}

export default Card;