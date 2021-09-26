import React from 'react';
import './Name.css';

const Name = (props) => {
    const {bandname,img}=props.name;
    return (
        <div className="name-body"> 
            
            <img src={img} alt="" />
            <h4>{bandname}</h4>
        </div>
    );
};

export default Name;