import React, {Fragment} from 'react';

const Curso = ({curso}) => {
    return (
        <Fragment>
            <div className="card-cursos" style={{animation: 'gravity1 infinite '+(Math.ceil( Math.random() *15 )+4)+'s'}}>
                <h4>{curso.title}</h4>
                <p className="flex"><i className="fas fa-info-circle"></i> {curso.desc}</p>
                <p className="flex"><i className="fas fa-map-marker-alt"></i>{curso.sitio}</p>
                <p className="flex"><i className="fas fa-toggle-on"></i>{curso.status}</p>
            </div>
        </Fragment>
    );
};

export default Curso;
