import React from 'react';
import {BsArrowReturnRight} from "react-icons/bs"

const Testicrd = ({icon, des, author, role, img}) => {
    return (
        <div className="testicrd">
            <div className="testicrd-info">
               <BsArrowReturnRight style={{fontSize: "4rem"}} />
               <img src={img} alt="" className="testicrd-img" />
               {icon}
            </div>
            <div className="testicrd-des">
              <p className="para">{des}</p>
            </div>
            <div className="testicrd-author">
              <h6 className="heading-6">{author}</h6>
              <p className="para">{role}</p>
            </div>
        </div>
    )
}

export default Testicrd
