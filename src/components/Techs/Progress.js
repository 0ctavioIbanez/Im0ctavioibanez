import React from 'react';
import React from 'react';
import ProgressCircle from 'react-simple-progress-circle';
 
  <ProgressCircle 
        size={50} //Height and Width of the circle
        clockwise={true} // Determines is the progress should go clockwise or counter clockwise
        color={'green'} //Color of the circle stroke
        progress={20} //Number between 0 and 100
        start={0} // Where the progress circle will start. 0 will start at 90deg clockwise from the top
        strokeWidth={20} //width of the circle strokes. Stroke width must be at least half of size
        opacity={0.4} //a number between 0 and 1. The background opacity of the color. 
        time={0.4} //in seconds, for progress transition
        timingFunction={'linear'} //linear, ease in, ease-out, east-in-out, step-start, step-end
    />

const Progress = () => {
    return (
        <div>
            
        </div>
    );
};

export default Progress;