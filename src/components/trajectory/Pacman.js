import React from 'react';

const Pacman = ({enter}) => {

    return (
        <div className="pacman">
            <div className="pacman-top" 
                style={enter?{animation: 'spin1 .5s infinite linear'}:null}></div>
            <div className="pacman-bottom"
                style={enter?{animation: 'spin2 .5s infinite linear'}:null}
            ></div>
        </div>
    );
};

export default Pacman;
