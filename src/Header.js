import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import ForumIcon from "@mui/icons-material/Forum";

function Header() {
  return (
    <div className="Header">
            <IconButton>            
               <PersonIcon fontsize="large" classname="header__icon"/>   
            </IconButton>                                         

        <IconButton>
               <ForumIcon fontsize="large" classname="header__icon"/>    
        </IconButton>                                           
        </div>                 
  )
}
export default Header;


