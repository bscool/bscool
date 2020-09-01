import React, { useEffect, useState} from 'react';
//import ReactDOM from 'react-dom';
import { useParams} from 'react-router-dom';
import data from "../../../data/posts.json"
import "./index.css"



function BlogPost() {
    const { slug } = useParams();
    const [Post, setPost] = useState({
        id: "" ,
        title : "" ,
        content: "",
        slug: "",
    });
    useEffect(() => {
        const Post = data.find(post => post.slug == slug);
        setPost(Post);
    }, [Post, slug]);
    //console.log(Post.postTitle)
    //console.log(slug)

    return( 
        <>
        <div>Now showing post {slug}</div>
        
        <div className = "container-md">
        <h1 className = "post-title">{Post.title}</h1>
        <p className = "post-content">{Post.content}</p>
    
        </div>
        </>
    )
  }
export default BlogPost;