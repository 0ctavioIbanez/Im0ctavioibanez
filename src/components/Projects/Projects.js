import React from 'react';
import './Projects.css'

import bgd from '../../assets/img/wave-bottom.fw.png';
import illustration from '../../assets/img/il-1.png'

import Cards from './Cards';


const Projects = () => {
    const listProjects = [
        {
            nombre: 'Ecommerce', 
            key: 1,
            url: 'http://mx80.prueba.site/~smartleg/',
            desc: 'Tienda dinámica, con carrito de compras, responsiva, barra de búsqueda, productos relacionados y susceptible a promociones. Encriptación del datos para evitar vulnerabilidades. Consume API de paquetería y próximamente integración de API de pago.',
            thumb: require('../../assets/img/projects-thumbs/ecommerce-1.png')
        },
        {
            nombre: 'Página de reclutamiento', 
            key: 2,
            url: 'https://0ctavioibanez.github.io/atomiclabs-react/',
            desc: 'Página de reclutamiento para la empresa AtomicLabs. Ésta versión fue hecha en react, y esta otra con jquery, css y php, donde se consume una API para el envío de mensajes con un código de verificación. https://github.com/0ctavioIbanez/atomiclabs',
            thumb: require('../../assets/img/projects-thumbs/atomic-1.png')
        },
        {
            nombre: 'Despacho de aboados', 
            key: 3,
            url: 'https://0ctavioibanez.github.io/tarian/',
            desc: 'Landing page para un buffet de abogados, donde se estaba incorporando un cobro recurrente con la API de PayPal, aunque a petición del despacho, no se continuó con el proyecto',
            thumb: require('../../assets/img/projects-thumbs/tarian-1.png')
        },
        {
            nombre: 'Gestor de negocio', 
            key: 4,
            url: '',
            desc: 'Gestor de ventas, inventario, estadísticas y análisis de productos del negocio SmartLegs',
            thumb: require('../../assets/img/projects-thumbs/inventario-1.png')
        }
    ];

    return (
        <section className="projects">
            <div className="">
                <h2 className="titulo">Algúnos de mis proyectos</h2>
                <div className="card-container flex">
                    <Cards 
                        listProjects={listProjects}
                    />
                    
                </div>
            </div>
            <img src={bgd} className="wave-projects-bottom" alt="illustration" />
            <img src={illustration} className="illustration" alt="illustration" />
        </section>
    );
};

export default Projects;