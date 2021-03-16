import React from "react"
import CommentsList from "./CommentsList.js";
import UpandDownVotes from "./UpandDownVotes.js";

function Video({data}){
    const {title, embedUrl, views, createdAt, upvotes, downvotes, comments} = data
    
    return <>
            <iframe
                    width="919"
                    height="525"
                    src={embedUrl}
                    frameBorder="0"
                    allowFullScreen
                    title={title}
            />
            <h2>{title}</h2>
            <div id="stats">
                <span>{views} Views</span> | 
                <span> Updated {createdAt}</span> 
            </div>
            <UpandDownVotes upvotes={upvotes} downvotes={downvotes}/>
            <CommentsList comments={comments}/>
    </>

}

export default Video

