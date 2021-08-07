import React from 'react';
import User from "../Data/Testi";
import Testicrd from '../SmallComp/Testicrd';

const Testimonial = () => {
    return (
        <div className="testi">
         <div className="heading-box">
           <h1 className="main-heading">Testimonials</h1>
         </div>
         <div className="testi-hero">
            {
                User.map((user, index)=>{
                    return(
                        <Testicrd
                          key={index}
                          icon={user.icon}
                          des={user.des}
                          author={user.author}
                          role={user.role}
                          img={user.img}
                        />
                    )
                })
            }
            </div>
        </div>
    )
}

export default Testimonial
