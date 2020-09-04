import React from "react";
import {Link} from 'react-router-dom';

const SmallCard  = (props) => {
    let miniDesc = String(props.content);
    miniDesc = miniDesc.substring(0,250);
    miniDesc = miniDesc + "...";

    return(
        <>
            <Link to = {props.link} className = "card my-2 mx-2 col-md-3 col-sm-5 col-xsm-5">
            <div >
                <img src = {props.imgsrc} alt="Card image cap" className = "title-img card-img-top"></img>
                <h5>{props.title}</h5>
            </div>
            </Link>
        </>
    )
}

export default SmallCard;