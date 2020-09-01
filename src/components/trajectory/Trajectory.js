import React from 'react';
import './trajectory.css';

import Events from './Events';

const Trajectory = () => {

    const listaTrayectoria = [
        {key: 1, anio: 2020, color: '#00CFE0', icon: '<i class="fas fa-user-graduate"></i>', title: 'Fin de la carrera', desc: 'Fecha prevista para la culminación de la carrera.'},
        {key: 2, anio: 2020, color: '#E05F00', icon: '<i class="fas fa-shopping-cart"></i>', title: 'Ecommerce', desc: 'Tienda en línea desarrollada'},
        {key: 3, anio: 2020, color: '#00BD09', icon: `<i class="far fa-chart-bar"></i>`, title: 'Administrador de negocio', desc: 'Panel de administración integral del negocio SmartLegs'},
        {key: 4, anio: 2020, color: '#E2E600', icon: '<i class="fas fa-balance-scale"></i>', title: 'Landing page de abogados', desc: 'Panel de administración integral del negocio SmartLegs'},
        {key: 5, anio: 2019, color: '#283747', icon: '<i class="fas fa-boxes"></i>', title: 'Control de inventarios', desc: 'Panel de administración integral del negocio SmartLegs'}
    ];

    return (
        <section className="trajectory">
            <div className="container">
                <h2 className="titulo">Trayectoria</h2>
                <div className="timeline flex">

                    {listaTrayectoria.map( evento => (
                        <Events 
                            key={evento.key}
                            evento={evento}
                        />
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Trajectory;