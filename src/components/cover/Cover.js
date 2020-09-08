import React from 'react';
import './Cover.css';

function Cover() {
    return (
        <div className="parallax">
            <div className="container cover-text">
                <h2 className="titulo">Acerca de mí</h2>
                <h3 className="text-center">
                    <span className="big-text">¡Hola!</span>  mi nombre es Octavio Ibáñez, soy estudiante de ingeniería en informática
                    en UPIICSA - IPN y me apasiona el <span className="web-text">desarrollo web.</span>
                </h3>
                <div className="btn-container flex">
                <button className="button btn-primary">Saber más</button>
                </div>
            </div>
        </div>
    );
}

export default Cover;
