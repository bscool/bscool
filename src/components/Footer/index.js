import React from "react";
import {MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Link} from 'react-router-dom'
import "./index.css"

const Footer = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <div >
            <ul>
                <li className = "footer-item col-2">
                    <strong>BScool</strong>
                </li>
              <li className="footer-item col-1" color = "black">
                <a href="#!">Link 1</a>
              </li>
              <li className="footer-item col-1">
                <a href="#!">Link 2</a>
              </li>
              <li className="footer-item col-1">
                <a href="#!">Link 3</a>
              </li>
              <li className="footer-item col-1">
                <a href="#!">Link 4</a>
              </li>
              <li className = "footer-item">
                <Link to = "https://www.instagram.com/thebscool/" ><i class="fab fa-instagram"></i></Link> 
              </li>
            </ul>
        </div>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <Link to="!#"> BScool.com </Link>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;