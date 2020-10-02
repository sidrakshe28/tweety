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
              <input placeholder="enter image url" type="text" />
              
              </div>
              <Button> Tweet</Button>
            </form>
    </div>
  );
}


 
 export default TweetBox;
 