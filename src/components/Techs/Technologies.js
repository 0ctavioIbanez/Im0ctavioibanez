import React, {Fragment} from 'react';
import './technologies.css'

import bgd from '../../assets/img/binary.png';

import Techs from './TechList';

const Technologies = () => {

    const techs = [{
        lenguajes: {
            JavaScript: {
                icon: '<i class="devicon-javascript-plain"></i>',
                porcentaje: 90
            },
            php: {
                icon: '<i class="devicon-php-plain"></i>',
                porcentaje: 60
            },
            laravel: {
                icon: '<i class="devicon-laravel-plain"></i>',
                porcentaje: 20
            },
            MySQL: {
                icon: '<i class="devicon-mysql-plain"></i>',
                porcentaje: 75
            },
            PostgreSQL: {
                icon: '<i class="devicon-postgresql-plain"></i>',
                porcentaje: 65
            },
            CSS3: {
                icon: '<i class="devicon-css3-plain"></i>',
                porcentaje: 80
            },
            HTML: {
                icon: '<i class="devicon-html5-plain-wordmark"></i>',
                porcentaje: 85
            },
            NodeJS: {
                icon: '<i class="devicon-nodejs-plain"></i>',
                porcentaje: 20
            },
            React: {
                icon: '<i class="devicon-react-original"></i>',
                porcentaje: 40
            },
            Angular: {
                icon: '<i class="devicon-angularjs-plain"></i>',
                porcentaje: 40
            },
            Java: {
                icon: '<i class="devicon-java-plain"></i>',
                porcentaje: 50
            },
            'C/C++': {
                icon: '<i class="devicon-cplusplus-plain"></i>',
                porcentaje: 50
            },
            Assembler: {
                icon: '',
                porcentaje: 40
            },
        },
        tools: {
            Git: {
                icon: '<i class="devicon-git-plain"></i>',
                porcentaje: 40
            },
            XAMPP: {
                icon: '',
                porcentaje: 80
            },
            'Linux': {
                icon: '<i class="devicon-linux-plain"></i>',
                porcentaje: 60
            },
            'Fireworks': {
                icon: '',
                porcentaje: 60
            },
            UML: {
                icon: '',
                porcentaje: 65
            },
            Scrum: {
                icon: '',
                porcentaje: 70
            },
            Testing: {
                icon: '',
                porcentaje: 75
            },
            Office: {
                icon: '',
                porcentaje: 60
            },
        }
    }];

    return (
      <section className="technologies">
          <div className="binary">
              
          </div>
        <div className="container">
          <h2 className="titulo white">Conocimientos y habilidades</h2>
          <div className="flex">

          {techs.map(tech => (
              <Fragment>
                  <div className="lenguajes-container langs">

                  </div>
                  <div className="flex">
                    <Techs 
                        key="1"
                        lang={tech.lenguajes}
                    />
                  </div>
                  <div className="lenguajes-container tools">

                  </div>
                  <div className="flex tools">
                    <Techs 
                        key="1"
                        lang={tech.tools}
                    />
                  </div>
              </Fragment>
          ))}

          </div>
        </div>
      </section>
    );
};

export default Technologies;