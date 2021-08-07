import React from 'react';
import {GiSmartphone} from "react-icons/gi";
import {GoMail} from "react-icons/go";
import {FaUser} from "react-icons/fa"

const Navbar = ({open, setOpen}) => {
    const Icon={fontSize: "3rem"}
   
    return (
        <div className="navbar">
            <div className="navbar-left">
                <h1 className="navbar-logo">WebXPro</h1>
                <p className="navbar-para"><GiSmartphone />+1234-678543-321</p>
                <p className="navbar-para"><GoMail /> gomail123@gmail.com</p>
            </div>

            <div className="navbar-right">
                <div className="navbar-user">
                   <FaUser style={Icon} />
                </div>
                <div className={"navbar-burger "+(open && "active")} onClick={()=> setOpen(!open)}>
                   <span className="navbar-line "></span><span className="navbar-line"></span><span className="navbar-line"></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
