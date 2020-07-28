import React from 'react';
import Logo from '../../assets/images/animeflix-logo.png';
import ButtonLink from './components/ButtonLink';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo"
                    src={Logo}
                    alt="logo-animeflix"
                />
            </Link>

            <ButtonLink className="ButtonLink"
                href="/cadastro/video">
                Novo Vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;