import React, {useState} from "react";
import axios from 'axios';
import "./index.css";

const Newsletter = (props) => {
  const [email, setEmail] = useState("");
  const subscribeAPI = "";
  const inputHandler = (event)=>{
    setEmail(event.target.value);
  };

  const onSubmits = (event)=>{
    event.preventDefault();
    axios.get(subscribeAPI,  {
      params:{
        email: email
      }
    })
    .then((response)=>{
      alert("Form Submitted");
    })
    
  }; 
  return (
    <>
      <div className={`p-4 mb-3 round bg-bscool ${props.display}`}>
        <form className="newsletter" onSubmit={onSubmits}>
          <div className="text-center">
          <div className="text-center">{props.msg}</div>
            <input
              type="email"
              className="rounded mx-auto mt-1"
              value={email}
              onChange={inputHandler}
              placeholder="e-mail"
            />

            <div className="my-3">
              
              <button
                type="submit"
                className="btn btn-dark m-auto round py-1 px-3 mt-3"
                style={{maxWidth:"100%"}}
              >
                Subscribe
              </button>
              <h5 style={{ fontWeight: "400" }} className="mt-3">
                Get Our News Letter
              </h5>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Newsletter;
