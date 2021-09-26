import React from 'react';
import'./Singer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGuitar } from '@fortawesome/free-solid-svg-icons'


const Singer = (props) => {
    const element = <FontAwesomeIcon icon={faGuitar} />
    const {bandname,img,cost,singername,singerage,popularalbum,establish}=props.singer;
    return (
        <div className="singerBody">
            <div className="SingerCard">
            <h3>{bandname}</h3>
            
            <img src={img} alt="" />
            <div className="text">
            <h4>Vocal: {singername}</h4>
           <p>Age: {singerage}</p>
           <h5>Popular Album: {popularalbum}</h5>
           <p><small>Est. : {establish}</small></p>
            <h4>Cost: {cost}</h4>
            </div>
           

            <button  onClick={()=>props.handleButton(props.singer)}>{element} Add to cart</button>
            </div>
            
        </div>
    );
};

export default Singer;