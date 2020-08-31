import React from 'react'
import Nav from '../navigation'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import blogHomePage from "../blog/home"
import homePage from "../home"
import article from "../blog/article"
//import './index.css'

function App(){
   return(
       <Router>
        <div>
            <Nav />
            <switch>
            <Route path = "/blog" exact component = {blogHomePage} />
            </switch>
            <switch>
            <Route path = "/" exact component = {homePage} />
            </switch>
            <switch>
                <Route path = "/:slug" exact component = {article}/>
            </switch>
        </div>
        </Router>
   );
}

export default App