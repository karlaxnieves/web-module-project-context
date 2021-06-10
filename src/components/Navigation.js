import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../context/CartContext'

const Navigation = props => {
	
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{props.cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
