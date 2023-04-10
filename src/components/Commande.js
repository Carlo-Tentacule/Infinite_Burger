import React from 'react';
import "./style/Carte.css";

const Commande = (props) => {


    return (
        <div id={props.details.id} className="burgerCard2">
            <div className='close'>
                <button className='x' onClick={props.close}>x</button>
            </div>
            <h2>{props.details.name}</h2>
            <p>{props.details.price} €</p>
            <button className="btnList2" onClick={props.decrement}>-</button>
            <span>{props.details.quantity}</span>
            <button className="btnList2" onClick={props.increment}>+</button>
        </div>
    );
};

export default Commande;