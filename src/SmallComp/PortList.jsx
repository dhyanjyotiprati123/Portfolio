import React from 'react';

const PortList = ({title, which, id, setClick}) => {

    return (
        <li className={which ? "port-item item-active" : "port-item"} onClick={()=>setClick(id)}>{title}</li>
    )
}

export default PortList
