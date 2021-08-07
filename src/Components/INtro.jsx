import React, { useEffect, useRef } from 'react';
import Shape from "../Assets/shape.svg";
import Man from "../Assets/man.png";
import { init } from 'ityped';

const INtro = () => {
    useEffect(()=>{
        init(textref.current, 
            { showCursor: true,  typeSpeed:  100,
                strings: ["Web-Developer", "Web-Designer", "Content-Creator" ] })
    },[])
    const textref=useRef()
    return (
        <div className="intro">
            <div className="intro-left">
              <img src={Shape} alt="blob" className="intro-blob" />
               <figure className="intro-figure">
                  <img src={Man} alt="man" className="intro-img" />
               </figure>
            </div>
            <div className="intro-right">
                <h2 className="intro-heading">Hi There, I Am</h2>
                <h1 className="intro-main"> Webxpro Centaducci</h1>
                <h3 className="intro-sub">Freelancer <span className="intro-span" ref={textref}></span></h3>
            </div>
        </div>
    )
}

export default INtro
