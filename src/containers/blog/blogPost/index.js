import React, { useEffect, useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import { useParams } from "react-router-dom";

import postsData from "../../../data/posts.json";
import relatedPostsData from "../../../data/relatedPosts.json";
import NewsLetter from "../../../components/Newsletter";
import RelatedItemsCard from "../../../components/RelatedItemsCard";
import CarouselCard from "../../../components/CarouselCard";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";
function BlogPost() {
  const { slug } = useParams();
  const [Post, setPost] = useState({
    id: "",
    title: "",
    content: "",
    slug: "",
  });

  useEffect(() => {
    const Post = postsData.find((post) => post.slug == slug);
    setPost(Post);
  }, [Post, slug]);

  return (
    <>
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="jumbotron p-4 p-md-5 rounded bg-bscool">
          <div className="col-md-6 px-0">
            <h1 style={{ fontWeight: "400" }}>
              {Post.title}
            </h1>
            <p className="lead my-3">Sub-Heading</p>
          </div>
        </div>
      </div>

      <main role="main" className="container">
        <div className="row">
          <div className="col-md-9 ">
            <div className="blog-post">
              <p className="blog-post-meta">
                September 1, 2020 by <a href="#">Mark</a>
              </p>

              <p>
                {Post.content}
              </p>
            </div>
          </div>

          <aside className="col-md-3 blog-sidebar">
            <NewsLetter display="d-none d-md-block" />
          </aside>

          <div className="container ">
            <hr />
            <h1 style={{ fontWeight: "500" }}>Related items</h1>
            <hr />


            {relatedPostsData.map((item, index) => {
              return (
              <RelatedItemsCard
                imgsrc={item.imgsrc}
                content={item.content}
                title={item.title}
                link="#"
                slug={item.slug}
                key={index}
              />
              )
            })
          }
            
            <RelatedItemsCard/>
            <hr/>

<Carousel>
          <div className="carousel-slider d-none d-md-block">
            <div className="row">
              <div className="col-4 "><CarouselCard/></div>
              <div className="col-4 "><CarouselCard/></div>
              <div className="col-4"><CarouselCard/></div>
            </div>
          </div>


          <div className="carousel-slider d-none d-md-block">
            <div className="row">
              <div className="col-4 "><CarouselCard/></div>
              <div className="col-4 "><CarouselCard/></div>
              <div className="col-4"><CarouselCard/></div>
            </div>
          </div>


          <div className="carousel-slider d-none d-md-block">
            <div className="row">
              <div className="col-4 "><CarouselCard/></div>
              <div className="col-4 "><CarouselCard/></div>
              <div className="col-4"><CarouselCard/></div>
            </div>
          </div>
               
               
</Carousel>

          <div className="all-posts">
          <a href = "/explore">
            <button type="button" className="btn all-posts-btn bg-bscool py-2 mt-0 mb-3" >Browse All Posts</button>
            </a>
          </div>



          </div>
        </div>
        <NewsLetter msg="Get the latest product updates, company news and special offers delivered right to your inbox" />
      </main>
    </>
  );
}
export default BlogPost;
