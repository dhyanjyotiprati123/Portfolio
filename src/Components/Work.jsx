import React, { useState } from 'react';
import {AiTwotoneLike} from "react-icons/ai";
import {FaUserFriends} from "react-icons/fa";
import {AiOutlineFundProjectionScreen} from "react-icons/ai"
import Wrkcrd from '../SmallComp/Wrkcrd';
import {FiArrowLeftCircle} from "react-icons/fi";
import {FiArrowRightCircle} from "react-icons/fi"
import Kam from "../Data/Kam";

const Work = () => {
   const Icon={fontSize:"6rem"};
   const [slide, setSlide]=useState(0);

   const Next= ()=>{
       setSlide(slide === Kam.length-1 ? 0 : slide+1)
   }

   const Prev=()=>{
     setSlide(slide === 0 ? Kam.length-1 : slide-1)
   }
    return (
        <div className="work">
            <div className="heading-box">
              <h1 className="main-heading">My Works</h1>
            </div>
            <div className="work-hero">
              <div className="work-left">
                 <Wrkcrd  title="5000+" icon={<FaUserFriends style={Icon} />}  />
                 <Wrkcrd  title="1000+" icon={<AiOutlineFundProjectionScreen style={Icon} />}  />
                 <Wrkcrd  title="7000+" icon={<AiTwotoneLike style={Icon} />} />
              </div>
              <div className="work-right">
                 <div className="work-right-left" onClick={Prev}><FiArrowLeftCircle style={{fontSize: "2.5rem"}} /></div>
                 <div className="work-right-right" onClick={Next}><FiArrowRightCircle style={{fontSize: "2.5rem"}} /></div>
                {
                  Kam.map((pic, index)=>{
                    return(
                      slide === index && (
                      <div className="work-right-inner">
                      <div className="work-right-inner-info">
                         <div className="icon">{pic.icon}</div>
                         <h5 className="heading-5">{pic.title}</h5>
                         <p className="para">{pic.des}</p>
                      </div>
                      <div className="work-right-inner-pic">
                         <figure>
                           <img src={pic.src} alt="work" className="work-right-inner-img" />
                         </figure>
                      </div>
                   </div>
                      )
                    )
                  })
                }
              </div>
            </div>
        </div>
    )
}

export default Work
