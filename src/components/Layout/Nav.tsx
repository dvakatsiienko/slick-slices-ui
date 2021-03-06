/* Core */
import { Link } from 'gatsby';

/* Components */
import { Logo } from './Logo';

export const Nav: React.FC = () => {
    return (
        <nav className = 'nav'>
            <ul>
                <li>
                    <Link to = '/pizzas'>Pizza Menu</Link>
                </li>

                <li>
                    <Link to = '/slicemasters'>Slicemasters</Link>
                </li>

                <li className = 'logo-list-item'>
                    <Link to = '/'>
                        <Logo />
                    </Link>
                </li>

                <li>
                    <Link to = '/beers'>Beers</Link>
                </li>

                <li>
                    <Link to = '/order'>Orders Ahead!</Link>
                </li>
            </ul>
        </nav>
    );
};
