import React, {Fragment} from 'react';
import ProgressCircle from 'react-simple-progress-circle';

const TechList = ({lang}) => {
    return (
            <Fragment>
                {Object.entries(lang).map(tech =>(
                    <div className="tech-card flex">
                        <div className="tech-icon" dangerouslySetInnerHTML={{__html: tech[1].icon}}></div>
                        <div className="tech-name">{tech[0]}</div>
                        <ProgressCircle 
                            size={40} //Height and Width of the circle
                            clockwise={true} // Determines is the progress should go clockwise or counter clockwise
                            color={'white'} //Color of the circle stroke
                            progress={tech[1].porcentaje} //Number between 0 and 100
                            start={0} // Where the progress circle will start. 0 will start at 90deg clockwise from the top
                            strokeWidth={10} //width of the circle strokes. Stroke width must be at least half of size
                            opacity={0.4} //a number between 0 and 1. The background opacity of the color. 
                            time={0.4} //in seconds, for progress transition
                            timingFunction={'linear'} //linear, ease in, ease-out, east-in-out, step-start, step-end
                        />
                    </div>
                ))}
            </Fragment>
    );
};

export default TechList;

