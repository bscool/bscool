import React, { useEffect, useState} from 'react';
//import ReactDOM from 'react-dom';
import { useParams} from 'react-router-dom';
import data from "../../../data/posts.json"



function BlogPost() {
    const { slug } = useParams();
    const [Post, setPost] = useState({
        id: "" ,
        postTitle : "" ,
        postContent: ""
    });
    useEffect(() => {
        const Post = data.find(post => post.slug == slug);
        setPost(Post);
    }, [Post, slug]);
    console.log(Post.postTitle)
    console.log(slug)

    return( 
        <>
        <div>Now showing post {slug}</div>
        <h1>{Post.postTitle}</h1>
        </>
    )
  }
export default BlogPost;