import React from 'react';

const Events = ({evento}) => {

    return (
        <div className="timeline-event" style={{border: '5px solid ' + evento.color, boxShadow: '2px 2px 10px '+evento.color+'80'}}>
            <p className="text-center" style={{color: evento.color}}>{evento.anio}</p>
            
            <div className="relative">
                <div 
                    className="timeline-icon" 
                    style={evento.key%2===1?{backgroundColor: evento.color}:{backgroundColor: evento.color, top: '10rem'}}
                    dangerouslySetInnerHTML={{__html: evento.icon}}
                ></div>
                <span className="indicador" style={evento.key%2===0?{transform: 'rotate(180deg)', top: '8.5rem', borderTop: '1rem solid '+evento.color}:{borderTop: '1rem solid '+evento.color}}></span>
            </div>
            
            
            <div 
                className="timeline-desc"
                style={ evento.key%2===0?{top: '-18rem', left: '-1.5rem'}: null}
            >
                    <p style={{color: evento.color}}>{evento.title}</p>{evento.desc}
            </div>
            
            <span style={{ backgroundColor: evento.color}}></span>
        </div>
    );
};

export default Events;