import React from 'react';
import {NavLink} from "react-router-dom";
 function Routemenu(){
     return(
         <div>
             <NavLink exact className="active_class" to="/">
                 Home
             </NavLink>
             <NavLink exact className="active_class" to="/.contact">
                 About
             </NavLink>
         </div>
     )

 }
 export default Routemenu;