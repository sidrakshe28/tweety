import React from "react"
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from "./SidebarOption";

 


function Sidebar() {
    return (
        <div className="sidebar">
            
            <TwitterIcon/>

            <SidebarOption text="Home"/>
            <SidebarOption text="Explore" />
            <SidebarOption text="Notifications"/>
            <SidebarOption/>
            <SidebarOption/>

            { /*side bar options*/}
            
        </div>
    )
}

export default Sidebar
