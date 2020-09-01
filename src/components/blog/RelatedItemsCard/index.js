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
            <div className="container-fluid my-2">
              <Link to={props.link} className="related-link">
                <div className="row my-4">
                  <div className="col-sm-3 col-md-3 ">
                    <img
                      src={props.imgsrc}
                      className="related-img"
                      alt="image"
                    />
                  </div>
                  <div className="col-sm-8 col-md-6">
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