import React, { useEffect, useState } from 'react'
import PortList from '../SmallComp/PortList';
import { Features, WebApp, Mobile, Design, Illustration }  from '../Data/Work';
import PortCard from '../SmallComp/PortCard';
import List from "../Data/List";

const Portfolio = () => {
    const [selected, setSelected]=useState("featured");
    const [data, setData]=useState([]);

    useEffect(()=>{
       switch(selected){
           case "featured":
           setData(Features);
           break;

           case "web":
           setData(WebApp);
            break;

            case "mobile":
             setData(Mobile);
             break;

          case "design":
          setData(Design);
          break;

          case "svg":
          setData(Illustration);
          break;

          default:
          setData(Features);
       }
    }, [selected])
    return (
        <div className="portfolio">
            <div className="heading-box">
              <h1 className="main-heading">Portfolio</h1>
            </div>
            <ul className="portfolio-list">
               {
                   List.map((item)=>{
                       return(
                           <PortList
                             key={item.id}
                             title={item.title}
                             id={item.id}
                             setClick={setSelected}
                             which={selected === item.id}
                           />
                       )
                   })
               }
             </ul>

         <div className="portfolio-projects">
            { data.map((fea, index)=>{
                 return(
                     <PortCard 
                       key={index}
                       src={fea.src}
                       title={fea.title}
                     />
                 )
             })
           }
         </div>
        </div>
    )
}

export default Portfolio
