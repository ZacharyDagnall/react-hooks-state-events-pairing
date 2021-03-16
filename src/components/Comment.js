import React from "react"
import UpandDownVotes from "./UpandDownVotes"

function Comment({commentProp: {user, comment, upvote, downvote}}){
 return <li>
     <h4>{user}</h4>
     <p>{comment}</p>
    <UpandDownVotes upvotes={upvote} downvotes={downvote}/>
 </li>
}

export default Comment