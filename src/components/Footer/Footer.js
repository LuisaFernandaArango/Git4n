import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer is-primary">
            <div className="container">
                <div className="columns">
                <div className="column">
                    <p>Buscanos en nuestras redes sociales.</p>
                </div>
                <div className="column has-text-right">
                    <a className="icon" href="http://facebook.com/"><i className="fa fa-facebook"></i></a>
                    <a className="icon" href="http://github.com/"><i className="fa fa-github"></i></a>
                </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
