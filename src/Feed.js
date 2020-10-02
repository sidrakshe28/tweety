import React from 'react'
import TweetBox from "./TweetBox";
import Post from "./Post";
import './Feed.css';


function Feed() {
    return (
        <div className="feed">
            <div className=" feed_header">
          {/* Header */}
        <h2>Home</h2>
        </div>

        {/* tweet box */}
        <TweetBox />

        {/*post*/}
        <Post/>
        <Post/>
        <Post/>
        



        </div>
    );
}

export default Feed; 
