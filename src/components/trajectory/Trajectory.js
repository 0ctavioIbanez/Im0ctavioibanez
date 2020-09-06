import React, {useState} from 'react';
import './trajectory.css';

import keyboard from '../../assets/img/keyboard.png';
import il from '../../assets/img/code.fw.png'

import Events from './Events';
import Pacman from './Pacman';

const Trajectory = () => {

    const listaTrayectoria = [
        {key: 20, anio: 2020, color: '#00CFE0', icon: '<i class="fas fa-user-graduate"></i>', title: 'Fin de la carrera', desc: 'Fecha prevista para la culminación de la carrera.'},
        {key: 19, anio: 2020, color: '#00CFE0', icon: '<i class="fas fa-user-graduate"></i>', title: 'Curso React', desc: 'Redux, Mern, Hooks context'},
        {key: 18, anio: 2020, color: '#E05F00', icon: '<i class="fas fa-shopping-cart"></i>', title: 'Ecommerce', desc: 'Tienda con encriptación, consumo de API´s, responsiva'},
        {key: 17, anio: 2020, color: '#00BD09', icon: '<i class="far fa-chart-bar"></i>', title: 'Administrador de negocio', desc: 'Panel de administración integral del negocio SmartLegs'},
        {key: 16, anio: 2020, color: '#00BD09', icon: '<i class="far fa-chart-bar"></i>', title: 'Curso backend', desc: 'Curso de php, Laravel, Symfony, MVC, MySQL y WordPress'},
        {key: 15, anio: 2020, color: '#00BD09', icon: '<i class="far fa-chart-bar"></i>', title: 'Curso JavaScript', desc: 'JavaScript moderno, desde EC6 (promesas, fetch, callbacks, etc)'},
        {key: 14, anio: 2020, color: '#E2E600', icon: '<i class="fas fa-balance-scale"></i>', title: 'Landing page de abogados', desc: 'Landing page de un despacho con integración de PayPal'},
        {key: 13, anio: 2019, color: '#283747', icon: '<i class="fas fa-boxes"></i>', title: 'Curso de Angular', desc: 'Curso de Angular 7'},
        {key: 12, anio: 2019, color: '#283747', icon: '<i class="fas fa-boxes"></i>', title: 'Curso de desarrollo web', desc: 'Curso integral de desarrollo (php, JavaScript, CSS, MySQL, etc)'},
        {key: 11, anio: 2019, color: '#283747', icon: '<i class="fas fa-boxes"></i>', title: 'Control de inventarios', desc: 'Búsqueda dinámica con AJAX. CRUD de productos'},
        {key: 10, anio: 2019, color: '#283747', icon: '<i class="fas fa-boxes"></i>', title: 'Curso en Accenture', desc: 'Curso de design thinking, administracion del tiempo y elaboración de un proyecto'},
        {key: 9, anio: 2019, color: 'var(--lila)', icon: '<i class="fas fa-boxes"></i>', title: 'Diseño de un sistema', desc: 'Documentación y elaboración de un sistema según las fases de desarrollo'},
        {key: 8, anio: 2018, color: 'var(--azul2)', icon: '<i class="fas fa-boxes"></i>', title: 'Proyecto SCRUM', desc: 'Desarrollo de un proyecto en equipo donde se aplicó la metodología SCRUM'},
        {key: 7, anio: 2017, color: 'var(--naranja)', icon: '<i class="fas fa-boxes"></i>', title: 'Proyecto misíl', desc: 'Simulación del derribamiento de un misíl según la extrapolación de su trayectoria'},
        {key: 6, anio: 2017, color: 'var(--azul)', icon: '<i class="fas fa-boxes"></i>', title: 'Inicio licenciatura', desc: 'Comienzo de la carrera ingeniería en informática en UPIICSA - IPN'},
        {key: 5, anio: 2016, color: 'var(--azul)', icon: '<i class="fas fa-boxes"></i>', title: 'Curso Provokadores', desc: 'Curso intersemestral de habilidades blandas y laborales'},
        {key: 4, anio: 2016, color: 'var(--gris)', icon: '<i class="fas fa-boxes"></i>', title: 'Fin de curso de inglés', desc: 'Culminación del curso de inglés'},
        {key: 3, anio: 2015, color: 'var(--gris)', icon: '<i class="fas fa-boxes"></i>', title: 'Soporte técnico', desc: 'Soporte técnico en redes, mantenimiento a equipos de cómputo'},
        {key: 2, anio: 2014, color: 'var(--gris)', icon: '<i class="fas fa-boxes"></i>', title: 'Conclusión del bachillerato', desc: 'Fin del bachillerato en el CECyT 14 como técnico en informática'},
        {key: 1, anio: 2014, color: 'var(--gris)', icon: '<i class="fas fa-boxes"></i>', title: 'Inicio de clases de inglés', desc: 'Curso de inglés en el CELEX 14'},
    ];

const [enter, setEnter] = useState(false);

const handleEnter = () =>{
    setEnter(true);
}
const handleLeave = () => {
    setEnter(false);
}

    return (
        <section className="trajectory">
            <div className="circle circle-1">
                <div className="circle circle-2">
                    <div className="circle circle-3"></div>
                </div>
            </div>
            <div className="container">
            <img className="code-il" src={il} alt="ilutracion" />
                <h2 className="titulo white">Trayectoria</h2>
                <Pacman 
                    enter={enter}
                />
                <div className="scroll-container" onMouseOver={handleEnter} onMouseLeave={handleLeave}>
                    <div className="timeline flex">

                        {listaTrayectoria.map( evento => (
                            <Events 
                                key={evento.key}
                                evento={evento}
                            />
                        ))}
                    </div>
                </div>
                <div className="keyboard-container flex">
                    <img src={keyboard} className="keyboard" alt="keyboard" />
                </div>
            </div>
        </section>
    );
};

export default Trajectory;