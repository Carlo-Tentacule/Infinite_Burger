import React from 'react';
import "./style/Carte.css";

const Carte = (props) => {


    return (
        <div id={props.details.id} className="burgerCard">
            <h2>{props.details.name}</h2>
            <img src={props.details.image} />
            <p>{props.details.price} €</p>
            <button className="btnList" onClick={props.handleAdd}>Add to cart</button>
        </div>
    );
};

export default Carte;