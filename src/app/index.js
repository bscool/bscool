import React from 'react'
import Nav from '../components/navigation'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import blogHomePage from "../components/blog/home"
import homePage from "../components/home"
import BlogPost from "../components/blog/blogPost"
//import './index.css'

function App(){
   return(
       <Router>
        <div>
            <Nav />
            <switch>
            <Route path = "/blog" exact component = {blogHomePage} />
            <Route path = "/" exact component = {homePage} />
            <Route path = "/blog/:slug" component = {BlogPost}/>
            </switch>
        </div>
        </Router>
   );
}

export default App