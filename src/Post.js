import React from "react";
import "./Post.css";



function Post({
    displayname,
    username,
    verified,
    timestamp,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <Avatar src="https://twitter.com/SidRakshe28/photo" />
            
        </div>
        </div>
    );
}

export default Post;
