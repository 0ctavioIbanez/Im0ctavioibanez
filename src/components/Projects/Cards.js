import React, { useState } from 'react';
import ReactCardCarousel from 'react-card-carousel';

const Cards = ({listProjects}) => {
    const [pause, setPause] = useState(true);

    const handleEnter = () => {
        setPause(false);
    }
    const handleLeave = () => {
        setPause(true);
    }

    const style = {
        width: '55rem',
        textAlign: 'center',
        background: 'var(--navy)',
        color: 'white',
        fontSize: '12px',
        borderRadius: '1rem',
        overflow: 'hidden',
        paddingBottom: '1rem',
        backgroundImage: 'linear-gradient(to bottom left, var(--naranja), var(--lila))'
      };

      return (
        <ReactCardCarousel autoplay={ true } autoplay_speed={ pause ? 3000 : 15000 } spread="wide">
            {listProjects.map( project => (
                <div style={ style } key={Math.random()} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                    <div className="project-image">
                        <img src={project.thumb} alt={project.name+"_img"} />
                    </div>
                    <div className="project-desc">
                        <h3 className="project-title">{project.nombre}</h3>
                        <p>{project.desc}</p>
                        <div className="button-container-small flex">
                          <button className="button btn-secundary">Saber más</button>
                          <a href={project.url} target="_blank" rel="noopener noreferrer" className="button btn-primary">Ver proyecto</a>
                    </div>
                    </div>
                </div>
            ))}
        </ReactCardCarousel>
      );
};

export default Cards;