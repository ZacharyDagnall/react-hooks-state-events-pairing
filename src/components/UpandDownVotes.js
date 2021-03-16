import React, {useState} from "react"

function UpandDownVotes({upvotes, downvotes}){

    const [upCount, setUpCount] = useState(upvotes)
    const [downCount, setDownCount] = useState(downvotes)
    function handleDownVote(){
        setDownCount(downCount+1)
    }
    function handleUpVote(){
        setUpCount(upCount+1)
    }

    return <div className="votes">
        <button className="upvote" onClick={handleUpVote}>{upCount} 👍</button>
        <button className="downvote" onClick={handleDownVote}>{downCount} 👎</button>
    </div>
}

export default UpandDownVotes