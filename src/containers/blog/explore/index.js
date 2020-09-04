import React from 'react';
import categories from '../../../data/categories.json';
import postsData from '../../../data/posts.json';

import SmallCard from '../../../components/smallCard';

function explore(){
    return(
        <>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className = "container">   
        {
            categories.map((Category) => {
                let categoryPosts = postsData.filter(post => post.category === Category)
                return(
                    <><h2 style={{marginRight:"auto"}}>{Category}</h2>
                    <div className = "container">
                        <div className = "row">
                            {categoryPosts.map((categoryPost) => {
                            return(
                                <SmallCard
                                    imgsrc = {categoryPost.imgsrc}
                                    title = {categoryPost.title}
                                    link={`/blog${`/${categoryPost.slug}`}`}
                                />
                            )
                            })}
                        </div>     
                    </div>
                <hr/>   
                </>
                );         
            })
        }
        </div> 
        </>
    )
}

export default explore;