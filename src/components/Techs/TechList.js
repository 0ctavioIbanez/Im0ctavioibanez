import React, {Fragment, useState, useEffect} from 'react';
import ProgressCircle from 'react-simple-progress-circle';

const TechList = ({lang}) => {

  const [graphSize, setGraphSize] = useState(40);

  //Grapsh size when dom is ready
  let body = document.querySelector('body');

  useEffect(() => {
    let ancho = body.clientWidth;
    if (ancho <= 640) {
      setGraphSize(20);
    }
  },[graphSize]);


    body.onresize = function(){
    let ancho = body.clientWidth;

    if (ancho <= 640) {
      setGraphSize(20);
    }
    else if(ancho > 640){
      setGraphSize(40);
    }
  }


    return (
            <Fragment>
                {Object.entries(lang).map(tech =>(
                    <div key={Math.random()} className="tech-card flex">
                        <div className="tech-icon" dangerouslySetInnerHTML={{__html: tech[1].icon}}></div>
                        <div className="tech-name">{tech[0]}</div>
                        <ProgressCircle
                            size={graphSize} //Height and Width of the circle
                            clockwise={true} // Determines is the progress should go clockwise or counter clockwise
                            color={'white'} //Color of the circle stroke
                            progress={tech[1].porcentaje} //Number between 0 and 100
                            start={0} // Where the progress circle will start. 0 will start at 90deg clockwise from the top
                            strokeWidth={8} //width of the circle strokes. Stroke width must be at least half of size
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
