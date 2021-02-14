/* Core */
import React from 'react';
import { Link } from 'gatsby';

export const Nav: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Index</Link>
                </li>

                <li>
                    <Link to="/beers">Beers</Link>
                </li>

                <li>
                    <Link to="/pizzas">Pizzas</Link>
                </li>

                <li>
                    <Link to="/slicemasters">Slicemasters</Link>
                </li>

                <li>
                    <Link to="/orders">Orders</Link>
                </li>
            </ul>
        </nav>
    );
};
