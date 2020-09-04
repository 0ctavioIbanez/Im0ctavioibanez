/*import React, {Fragment} from 'react';

const Curso = ({cursos}) => {
    return (
        <Fragment>
            {cursos.map( curso => (
                <div className="card-cursos">
                    <h4>{curso.title}</h4>
                    <p className="flex"><i class="fas fa-info-circle"></i> {curso.desc}</p>
                    <p className="flex"><i class="fas fa-map-marker-alt"></i>{curso.sitio}</p>
                    <p className="flex"><i class="fas fa-toggle-on"></i>{curso.status}</p>
                </div>
            ))}
        </Fragment>
    );
};

export default Curso;*/

import React, {Fragment} from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

const Curso = ({cursos}) => {
    return (
        <Parallax pages={3} scrolling={false} horizontal ref={ref => (this.parallax = ref)}>
            <div className="card-cursos">
                    <h4></h4>
                    <p className="flex"><i class="fas fa-info-circle"></i> </p>
                    <p className="flex"><i class="fas fa-map-marker-alt"></i></p>
                    <p className="flex"><i class="fas fa-toggle-on"></i></p>
                </div>
        </Parallax>
    );
};

export default Curso;