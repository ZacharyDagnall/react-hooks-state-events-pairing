import React, {useState} from "react"
import Comment from "./Comment"

function CommentsList({comments}){
    const [isHidden, setIsHidden] = useState(false)
    function handleHideClick(){
        setIsHidden(!isHidden)
    }

    const [sortBy, setSortBy] = useState("Newest First")
    function handleSort(event){
        setSortBy(event.target.value)
    }
    const sortedComments = comments.sort(compareComment)
    function compareComment(a,b){
        switch(sortBy){
            case "Newest First": return a.id - b.id
            case "Oldest First": return b.id - a.id
            case "Most Upvotes First": return b.upvote - a.upvote
            case "Least Upvotes First": return a.upvote - b.upvote
            case "Most Downvotes First": return b.downvote - a.downvote
            case "Least Downvotes First": return a.downvote - b.downvote 
            default : return a.id - b.id
        }
    }

    const [searchBar, setSearchBar] = useState("")
    function handleSearchBar(event){
        setSearchBar(event.target.value)
    }
    const filteredComments = sortedComments.filter(comment=>{
        return comment.user.toLowerCase().includes(searchBar.toLowerCase().replace(/\s/g, ''))
    })

    return <div id="comments-section">
        <button id="hide-comments" onClick={handleHideClick}>{isHidden ? "Show" : "Hide"} Comments</button>
        <div className={isHidden? "hidden": null}>
            <div><input type="text" placeholder="Search.." onChange={handleSearchBar}></input></div>
            <div>
                <label htmlFor="sort">Sort Comments By: </label>
                <select name="sort" id="sort-comments-list" onChange={handleSort}>
                    <option value="Newest First">Newest First</option>
                    <option value="Oldest First">Oldest First</option>
                    <option value="Most Upvotes First">Most Upvotes First</option>
                    <option value="Least Upvotes First">Least Upvotes First</option>
                    <option value="Most Downvotes First">Most Downvotes First</option>
                    <option value="Least Downvotes First">Least Downvotes First</option>
                </select>
            </div>
            <ul> 
                <h3>{comments.length} Comments </h3>
                {filteredComments.map(comment=>{
                    return <Comment key={comment.id} commentProp={comment} />
                })}
            </ul>
        </div>
    </div>
}

export default CommentsList