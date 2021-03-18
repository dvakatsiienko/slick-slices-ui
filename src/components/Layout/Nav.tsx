/* Core */
import * as React from 'react';
import { Link }   from 'gatsby';
import styled     from 'styled-components';

/* Components */
import { Logo } from '@/components';

export const Nav: React.FC = () => {
    return (
        <NavStyles>
            <ul>
                <li>
                    <Link to = '/'>Hot Now</Link>
                </li>

                <li>
                    <Link to = '/pizzas'>Pizza Menu</Link>
                </li>

                <li className = 'logo-list-item'>
                    <Link to = '/'>
                        <Logo />
                    </Link>
                </li>

                <li>
                    <Link to = '/slicemasters'>Slicemasters</Link>
                </li>

                <li>
                    <Link to = '/order'>Orders Ahead!</Link>
                </li>
            </ul>
        </NavStyles>
    );
};

/* Types */
const NavStyles = styled.nav`
    transform: translateY(-30%);

    & .logo {
        transform: translateY(-25%);
    }

    & ul {
        display: grid;
        grid-template-columns: 1fr 1fr auto 1fr 1fr;
        grid-gap: 2rem;
        align-items: center;
        padding: 0;
        margin: 0;
        text-align: center;
        list-style: none;

        & li {
            --rotate: -2deg;

            order: 1;
            transform: rotate(var(--rotate));

            &:nth-child(1) {
                --rotate: 1deg;
            }

            &:nth-child(2) {
                --rotate: -2.5deg;
            }

            &:nth-child(4) {
                --rotate: 2.5deg;
            }

            &:hover {
                --rotate: 3deg;
            }
        }

        & a {
            display: block;
            font-size: 3rem;
            text-decoration: none;

            &:hover {
                color: var(--red);
            }

            &[aria-current='page'] {
                color: var(--red);
            }

            @media (max-width: 800px) {
                font-size: 2rem;
            }
        }

        @media (max-width: 600px) {
            --columns: 4;

            grid-template-columns: auto auto;
            grid-template-columns: repeat(var(--columns), 1fr);
            justify-items: center;

            & .logo-list-item {
                grid-column: 1 / -1;
                order: 0;
            }

            & .logo {
                transform: translateY(0);
            }
        }

        @media (max-width: 500px) {
            --columns: 2;
        }
    }

    @media (max-width: 600px) {
        padding-bottom: 2rem;
        margin-bottom: 2rem;
        border-bottom: 1px solid var(--grey);
        transform: translateY(-20%);
    }
`;
