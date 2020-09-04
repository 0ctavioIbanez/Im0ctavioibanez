import React from 'react';
import './cursos.css';

import Curso from './Curso';

const Cursos = () => {

    const cursos = [
        {title: 'JavaScript', desc: "JavaScript moderno, asicronía, consumo de API's", sitio: 'Udemy', status: 'Concluido'},
        {title: 'Backend', desc: "Curso de PHP, Laravel, Symfony, MVC, MySQL", sitio: 'Udemy', status: 'Concluido'},
        {title: 'Backend', desc: "Curso de PHP, Laravel, Symfony, MVC, MySQL", sitio: 'Udemy', status: 'Concluido'},
        {title: 'Backend', desc: "Curso de PHP, Laravel, Symfony, MVC, MySQL", sitio: 'Udemy', status: 'Concluido'},
        {title: 'Backend', desc: "Curso de PHP, Laravel, Symfony, MVC, MySQL", sitio: 'Udemy', status: 'Concluido'},
    ]

    return (
        <section className="cursos">
            <div className="container">
                <h1 className="titulo white">Mis cursos</h1>
                <div className="cursos-container flex">
                    {cursos.map(curso => (
                        <Curso 
                            key={Math.random()}
                            curso={curso} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cursos;