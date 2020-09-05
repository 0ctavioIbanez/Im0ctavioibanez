import React from 'react';

const Pacman = ({status}) => {
    let prev = 0;
    let i = 0;

    document.addEventListener('DOMContentLoaded', ()=>{
        let container = document.querySelector('.scroll-container');
        container.addEventListener('scroll', ()=>{
            console.log("Scroll!!!");
            i++;
        })
    });

    const time = setInterval( function(){
        if(i > prev){
            prev = i;
            console.log(status);
        }
        else{
            console.log("Scroll detenido");
            console.log(status);   
        }
    }, status);


   

    return (
        <div className="pacman">
            <div className="pacman-top" 
                style={status === 1500?{animation: 'spin1 1s infinite linear'}:{animation: 'spin1 0.5s infinite linear'}}></div>
            <div className="pacman-bottom"
                style={status === 1500?{animation: 'spin2 1s infinite linear'}:{animation: 'spin1 0.5s infinite linear'}}
            ></div>
        </div>
    );
};

export default Pacman;
