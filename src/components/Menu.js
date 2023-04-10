import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carte from './Carte';
import Commande from './Commande';
import "./style/Home.css";

const Menu = () => {

    const [menu, setMenu] = useState({
        products: [
            { id: 1, name: "Pickles-burger", image: './images/Pickles-burger.png', price: 5.95, button: 'Add to cart', quantity: 0 },
            { id: 2, name: "Hot-dog", image: './images/Hot-dog.png', price: 4.95, button: 'Add to cart', quantity: 0 },
            { id: 3, name: "Wings", image: './images/Wings.png', price: 10.95, button: 'Add to cart', quantity: 0 },
            { id: 4, name: "Cheese-burger", image: './images/Cheese-burger.png', price: 5.50, button: 'Add to cart', quantity: 0 },
            { id: 5, name: "Ultra-burger", image: './images/Ultra-burger.png', price: 12.95, button: 'Add to cart', quantity: 0 },
            { id: 6, name: "Royal-salad", image: './images/salade.png', price: 20.95, button: 'Add to cart', quantity: 0 },
            { id: 7, name: "Fisher-burger", image: './images/Fish-burger.png', price: 4.95, button: 'Add to cart', quantity: 0 },
            { id: 8, name: "Ice-cream", image: './images/Glaces.png', price: 2.90, button: 'Add to cart', quantity: 0 },
            { id: 9, name: "Frite", image: './images/Frites.png', price: 3.95, button: 'Add to cart', quantity: 0 }
        ],
        order: []
    })



    const handleAdd = (e) => {
        const clickedElementId = e.target.parentNode.id
        const clicked = menu.products.find(element => element.id == clickedElementId)
        const copiedOrdered = [...menu.order]
        const isOrdered = copiedOrdered.find(element => element.id == clickedElementId)

        if (isOrdered) {
            isOrdered.quantity += 1
            setMenu({ ...menu, order: copiedOrdered })
        } else {
            copiedOrdered.push(clicked)
            clicked.quantity = 1
            setMenu({ ...menu, order: copiedOrdered })
        }
    }

    const increment = (e) => {
        const clickedElementId = e.target.parentNode.id
        const copiedOrdered = [...menu.order]
        const clicked = copiedOrdered.find(element => element.id == clickedElementId)
        clicked.quantity += 1
        setMenu({ ...menu, order: copiedOrdered })
    }

    const decrement = (e) => {
        const clickedElementId = e.target.parentNode.id
        const copiedOrdered = [...menu.order]
        const clicked = copiedOrdered.find(element => element.id == clickedElementId)
        if (clicked.quantity > 1) {
            clicked.quantity -= 1
            setMenu({ ...menu, order: copiedOrdered })
        } else {
            const clickedIndex = copiedOrdered.indexOf(clicked)
            copiedOrdered.splice(clickedIndex, 1)
            setMenu({ ...menu, order: copiedOrdered })
        }
    }

    const indecisiveness = (e) => {
        const clickCross = e.target.parentNode.parentNode.id; // Selectionne l'id de l'ingredient
        const arrayCross = menu.order.filter(element => element.id != clickCross) // filtre les element qui son different de celui supprimer
        setMenu(crossOrder => ({ ...crossOrder, order: arrayCross })) // On modifie le state
    }

    // const calculateTotal = () => {
    //     let total = 0;
    //     menu.order.forEach(item => {
    //         total += (item.price * item.quantity);
    //     });
    //     return total.toFixed(2); // arrondir à deux décimales
    // };

    const calculeTotal = menu.order.reduce((total, order) => total + (order.quantity * order.price), 0).toFixed(2);






    const productsList = menu.products.map(product => (
        <Carte key={product.id} details={product} handleAdd={handleAdd} />
    ));


    const orderList = menu.order.map(order =>
        <Commande key={order.id} details={order} increment={increment} decrement={decrement} close={indecisiveness} />
    )


    return (
        <div className="commande">
            <div class="menu">
                <div class="titre">
                    <h1> Make your choices : </h1>
                </div>
                <div className="burgerList">
                    {productsList}
                </div>
            </div>
            <div class="menu2">
                <div class="titre2">
                    <h1> Order List: </h1>
                    <h2>Total : {calculeTotal}€</h2>
                    <a href="https://www.youtube.com/watch?v=03dywTaoaC0" target="_blank" rel="noopener noreferrer">
                        <button class="btnShop"> Commander </button></a>
                    {/* <Link to="/about"><button class="btnShop" > Commander </button></Link> */}
                </div>
                <div className="burgerOrder">
                    {orderList}
                </div>
            </div>
        </div>

    );
};

export default Menu;