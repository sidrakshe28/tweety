 import React from "react";
 import "./TweetBox.css";
 import { Avatar, Button } from "@material-ui/core";

 
 function TweetBox() {
    return (
        <div className="tweetBox">
          <form>
            <div className="tweetBox__input">
              <Avatar src="https://twitter.com/SidRakshe28/photo" />
              <input placeholder="whats happening?" type="text" />
              </div>

              <input className="tweetBox__imageInput" placeholder=" Optional: Enter image URL" type="text" />
              <Button className="tweetBox__tweetButton "> Tweet</Button>
            </form>
    </div>
  );
}


 
 export default TweetBox;
 