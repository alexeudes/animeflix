import React from 'react';
import Logo from '../../assets/images/animeflix-logo.png';
import ButtonLink from './components/ButtonLink';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo"
                    src={Logo}
                    alt="logo-animeflix"
                />
            </a>

            <ButtonLink className="ButtonLink"
                href="/">
                Novo Vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;