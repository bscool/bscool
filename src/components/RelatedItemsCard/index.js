import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
const RelatedItemsCard =  (props)=>{
    let miniDesc = String(props.content);
    miniDesc = miniDesc.substring(0,250);
    miniDesc = miniDesc + "...";
    console.log("type of minijDEst ", typeof(miniDesc) )
    return(
        <>
            <div className="container my-4 col-sm-11 col-md-10 ml-1 related-card" >
              <Link to={props.link} className="related-link" >
                <div className="row my-1">
                  <div className="col-sm-3 col-md-4 ml-0.2 mr-0.8">
                    <img
                      src={props.imgsrc}
                      className="related-img"
                      alt="image"
                    />
                  </div>
                  <div className="col-sm-12 col-md-8 mx-0">
                    <h5 className="related-heading">{props.title}</h5>
                    <p className="related-desc">
                      {miniDesc}
                    </p>
                  </div>
                </div>
                </Link>
            </div>
        </>
    )
};

export default RelatedItemsCard;