import React from 'react';
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
  import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className="widgets">
      <div className="widgets__input">
      <SearchIcon className="widgets__searchIcon" />
      <input placeholder="Search Twitter" type="text" />

      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1311519505844113409"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="SidRakshe28"
          options={{ height: 400 }}
        />
         <TwitterShareButton
          url={"https://twitter.com/SidRakshe28"}
          options={{ text: "Tweety is a Twitter clone, made with ReactJs.", via: "SidRakshe28" }}
        />

        </div>
        </div>
            
    );
}

export default Widgets;
