import React from 'react';
import NavBar from '../../components/NavBar/NavBar';

const CartPage = (props) => {
    return (
        <div>
            <NavBar user={props.user} handleLogout={props.handleLogout} />
            <h3>Cart</h3>
            <p>Cart content appears here...</p>
        </div>
    );
};


export default CartPage;