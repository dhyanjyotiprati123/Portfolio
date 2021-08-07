import React from 'react'

const PortCard = ({src, title}) => {
    return (
        <div className="portcard">
            <figure>
               <img src={src} alt="port card" className="portcard-img" />
            </figure>
            <h2 className="portcard-heading">{title}</h2>
        </div>
    )
}

export default PortCard
