import React from 'react';
import {AiOutlinePhone} from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";


const Footer = () => {
    return (
        <div className="footer">
                <div className="footer-left">
                    <h4 className="heading-4">useful links</h4>
                    <ul className="footer-list">
                       <li className="footer-item">Webxpro</li>
                       <li className="footer-item">Legolaas</li>
                       <li className="footer-item">Drazxterrz</li>
                       <li className="footer-item">50 Bmmg</li>
                       <li className="footer-item">Telekenesis</li>
                    </ul>
                </div>
                <div className="footer-right">
                   <h4 className="heading-4"><AiOutlinePhone />15298-858-857</h4>
                   <h4 className="heading-4"><AiOutlineMail />webxcentaduci@gmail.com</h4>
                   <h4 className="heading-4"><AiOutlineInstagram />instabinsta</h4>
                </div>
        </div>
    )
}

export default Footer
