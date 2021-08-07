import React from 'react';
import {BsBookmarksFill} from "react-icons/bs"

const Sidebar = ({open, setOpen}) => {
    const Icon={fontSize: "5rem"}
    const CloseMenu=()=>{
        setOpen(false)
    }
    return (
        <div className={"sidebar "+ (open && "menuactive")}>
            <div className="sidebar-logo">
               <BsBookmarksFill style={Icon} />
            </div>

            <ul className="sidebar-list">
              <li className="sidebar-item" onClick={CloseMenu}>Home</li>
              <li className="sidebar-item" onClick={CloseMenu}>About</li>
              <li className="sidebar-item" onClick={CloseMenu}>Projects</li>
              <li className="sidebar-item" onClick={CloseMenu}>Testimonials</li>
            </ul>
        </div>
    )
}

export default Sidebar
