import React from 'react';

const Cards = ({project}) => {
    return (
        <div className="proyecto">
            <div>
                <img src={project.thumb} alt={"image_"+project.name} />
            </div>
            <div className="proyecto-desc">
                <h3 className="proyecto-title">{project.nombre}</h3>
                <p>{project.desc}</p>
                <div className="center flex">
                    <button className="button-small btn-secundary">Saber más</button>
                    <a target="_blank" 
                        href={project.url} 
                        className="button-small btn-primary"
                        rel="noopener noreferrer"
                    >Ver proyecto</a>
                </div>
            </div>
        </div>
    );
};

export default Cards;