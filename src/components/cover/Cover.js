import React from 'react';
import './Cover.css'
import forest from '../../assets/img/forest.png';


function Cover(props) {
    return (
        <section className="parallax">
            <div className="container">
                <p>Hola mi nombre es Octavio Ibáñez</p>
            </div>
            <div className="forest-parallax">
                <img src={forest} />
            </div>
        </section>
    );
}

export default Cover;