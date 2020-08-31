import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, withRouter} from 'react-router-dom';


class homePage extends Component{

    render(){
        return(
            <h1>Home Page</h1>
        )
    }
}

export default withRouter(homePage) 