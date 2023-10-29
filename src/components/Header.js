import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);

    const showOrder = () => {
        let sum = 0;
        props.orders.forEach(order => {
            sum += parseInt(order.price);
        })

        

        return (
            <div>
                {props.orders.map((item) => (                            
                    <Order key = {item.id} item = {item} onDelete = {props.onDelete}/>
                ))}
                <p className='sum'>Сумма: {sum}₾</p>
            </div>
        );
    }

    const showNothing = () => {
        return (
            <div className='empty'>
                <h2>Товаров нет</h2>
            </div>
        );
    }

    return (
        <header>
            <div>
                <span className='logo'>House Staff</span>
                <ul className='nav'>
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
                <FaShoppingCart 
                    onClick = {() => setCartOpen(cartOpen = !cartOpen)} 
                    className = {`shop-card-button ${cartOpen ? 'active' : ''}`}
                />
                {cartOpen ? 
                    <div className='shop-cart'>
                        {props.orders.length ? 
                        showOrder()
                        : showNothing()}
                    </div>                    
                    : ''
                }
            </div>
            <div className='presentation'></div>
        </header>
    )
}