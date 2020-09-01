import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, withRouter, Link} from 'react-router-dom';
import data from "../../../data/posts.json"


class blogHomePage extends Component{

    render(){
        return(
            <>
            <h1>Blog Home Page</h1>
            <div>
                {data.map(post => (
                    <div>
                        <h4>{post.title}</h4>
                <Link to = {`/blog${`/${post.slug}`}`}>{post.content}</Link>
                    </div>
                ))}
            </div>
            </>
        );

    }
}

export default withRouter(blogHomePage) 