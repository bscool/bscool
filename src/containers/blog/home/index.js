import React from "react";
import {Link} from 'react-router-dom';

import { Carousel } from 'react-responsive-carousel';
import {MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdbreact'

import data from "../../../data/posts.json"
import "./index.css"

import NewsLetter from "../../../components/Newsletter";
import RelatedItemsCard from "../../../components/RelatedItemsCard";
import CarouselCard from "../../../components/CarouselCard";




const BigCard = (props)=>{
    let miniDesc = String(props.content);
    miniDesc = miniDesc.substring(0,250);
    miniDesc = miniDesc + "...";

    return(
        <>
        <Link to = {props.link} className = {`card mx-2 my-2 p-0 ${props.display}`}>
            <div >
                <img src = {props.imgsrc} alt="Card image cap" className = "title-img card-img-top"></img>
                <div className = "card-img-overlay related-date">{props.date}</div>
                <div className = "mx-2 my-2">{props.title}</div>
            </div>
        </Link>
        
        </>
    );
};
function blogHomePage(){
     return(
            <>
            <br/>
            <br/>
            <br/>
            <div className = "jumbotron-fluid bg-bscool p-5">
                <div className = "welcome">
                    <h1 className = "my-2">Welcome To Bscool, Let's Start</h1>
                    <p className = "my-2">Helping you with clear paths</p>
                </div>
            </div>

            <br/>
            <div className = "container">
                <div className = "row">
                        <BigCard 
                            display = "col-md-7 d-block"
                            title = {data[0].title}
                            imgsrc = {data[0].imgsrc}
                            link = {`/blog${`/${data[0].slug}`}`}
                            content = {data[0].content}
                            date = "september 1 2020"
                        />
                        <div className = "col-md-4  d-md-inline d-flex">
                            <BigCard 
                                display = "col-md-10 d-md-block"
                                title = {data[1].title}
                                imgsrc = {data[1].imgsrc}
                                link = {`/blog${`/${data[1].slug}`}`}
                                date = "september 1 2020"
                            />
                            <BigCard 
                                display = "col-md-10 d-md-block"
                                title = {data[2].title}
                                imgsrc = {data[2].imgsrc}
                                link = {`/blog${`/${data[2].slug}`}`}
                                date = "september 1 2020"
                            />
                        </div>    
                </div>
                {data.slice(3,6).map((post) => {
                    return (
                    <RelatedItemsCard
                        imgsrc={post.imgsrc}
                        content={post.content}
                        title={post.title}
                        link={`/blog${`/${post.slug}`}`}
                        slug={post.slug}
                    />
                    )
                    })}
                <br/>
                <br/>
                <h1>Most Popular</h1>
                <br/>
                {data.slice(6,9).map((post) => {
                    return (
                    <RelatedItemsCard
                        imgsrc={post.imgsrc}
                        content={post.content}
                        title={post.title}
                        link={`/blog${`/${post.slug}`}`}
                        slug={post.slug}
                    />
                    )
                    })}
                <div>
                   <MDBDropdown>
                        <MDBDropdownToggle tag = "p" >
                            <h1 className="mr-2">Category <i class="fa fa-caret-down"></i> </h1>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem href="#!"><h4>Category 1</h4></MDBDropdownItem>
                            <MDBDropdownItem href="#!"><h4>Category 1</h4></MDBDropdownItem>
                            <MDBDropdownItem href="#!"><h4>Category 1</h4></MDBDropdownItem>
                            <MDBDropdownItem href="#!"><h4>Category 1</h4></MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </div>
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
                <NewsLetter msg="Get the latest product updates, company news and special offers delivered right to your inbox" />

            </div>
            </>
        );

    
}

export default blogHomePage