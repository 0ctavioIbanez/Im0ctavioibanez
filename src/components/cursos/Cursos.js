import React from 'react';
import './cursos.css';

import Curso from './Curso';

import Satellite from './Satellite';

const Cursos = () => {

    const cursos = [
        {title: 'JavaScript', desc: "JavaScript moderno, asicronía, consumo de API's", sitio: 'Udemy', status: 'Concluido'},
        {title: 'Desarrollo web completo', desc: "Curso de PHP, Laravel, Symfony, MVC, MySQL", sitio: 'Udemy', status: 'Concluido'},
        {title: 'Backend', desc: "Curso de PHP, Laravel, Symfony, MVC, MySQL", sitio: 'Udemy', status: 'Concluido'},
        {title: 'Backend', desc: "Curso de PHP, Laravel, Symfony, MVC, MySQL", sitio: 'Udemy', status: 'Concluido'},
        {title: 'Backend', desc: "Curso de PHP, Laravel, Symfony, MVC, MySQL", sitio: 'Udemy', status: 'Concluido'},
    ]

    return (
        <section className="cursos" id="cursos">
            <div className="container">
                <h1 className="titulo white">Cursos tomados</h1>
                <div className="cursos-container flex">
                    {cursos.map(curso => (
                        <Curso 
                            key={Math.random()}
                            curso={curso} 
                        />
                    ))}
                </div>
            </div>
            <Satellite />
        </section>
    );
};

export default Cursos;