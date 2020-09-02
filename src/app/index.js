import React from 'react'
import Nav from '../components/navigation'
import Footer from "../components/Footer"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import blogHomePage from "../containers/blog/home"
import homePage from "../containers/home"
import BlogPost from "../containers/blog/blogPost"
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
            <Footer />
        </div>
        </Router>
   );
}

export default App