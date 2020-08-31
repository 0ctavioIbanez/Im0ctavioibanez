import React from 'react';
import './Cover.css';

function Cover(props) {
    return (
        <section className="parallax">
            <div className="container cover-text animate__animated animate__fadeInUp">
                <h2 className="titulo">Acerca de mí</h2>
                <h3 className="text-center">
                    Hola, mi nombre es Octavio Ibáñez, soy estudiante de ingeniería en informática
                    en UPIICSA del IPN.
                    Actualmente curso el 8° semetre, siendo éste mi último periodo en la carrera.
                </h3>
                <h3 className="text-center">
                    Me apasiona el desarrollo web, tanto back-end como front-end, aunque he trabajado más con éste último.
                </h3>
                <div className="btn-container flex">
                <button className="button btn-primary">Saber más</button>
                </div>
            </div>
        </section>
    );
}

export default Cover;