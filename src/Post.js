import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";



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
        <div className="post__avatar">
            
            <Avatar src="https://twitter.com/SidRakshe28/photo" />
            
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3> sid { " "} <span>
                     <VerifiedUserIcon className="post__badge" />
                    </span>

                    </h3>

                </div>

            </div>

        </div>

        </div>
    );
}

export default Post;
