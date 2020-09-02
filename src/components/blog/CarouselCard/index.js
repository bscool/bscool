import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';
const CarouselCard = ()=>{
    return(
        <>
        <div className="card mx-2 my-2" style={{width: "100%"}}>
            <img className="card-img-top" src="https://source.unsplash.com/user/erondu/1600x900" alt="Card image cap"/>
            <div className="card-body">
              <div className="card-meta">September 01, 2020</div>
              <h5 className="title" style={{fontWeight: "700"}}>Why Wireframing is an essential skill for more than Designers</h5>
              <Link to="#" style={{fontWeight: "700", fontSize:"smaller"}}>Read More</Link>
            </div>
          </div>
        </>
    );
};

export default CarouselCard;