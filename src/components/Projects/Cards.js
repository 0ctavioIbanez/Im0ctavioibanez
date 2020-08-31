import React, {Fragment} from 'react';


const Cards = ({project}) => {
    
    return (
        <Fragment>
            <div className="card">
                <div className="card-thumb">
                    <img src={project.thumb} alt={"thumb_"+project.nombre}></img> 
                </div>
                <h3 className="card-title">{project.nombre}</h3>
                <p className="card-desc">{project.desc}</p>
                <div className="btn-container flex two-buttons">
                    <span
                        className="button btn-secundary"
                    >
                        Saber más
                    </span>
                    <a target="_blank" 
                        href={project.url} 
                        className="button btn-primary"
                        rel="noopener noreferrer"
                    >
                        Ver proyecto
                    </a>
                </div>
            </div>
        </Fragment>
    );
};

export default Cards;