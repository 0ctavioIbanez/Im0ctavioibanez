import React, {useEffect} from 'react';
import './Navbar.css'
import profile from '../../assets/img/profile.jpeg'

const Navbar = (props) => {
    const key1 = "{";
    const key2 = "}";

    useEffect( () => {
        setTimeout( () => {
            const keyLeft = document.getElementById("key-left");
            const keyRight = document.getElementById("key-right");

            keyLeft.style.transition = "all .3s ease";
            keyLeft.style.width = "10rem";

            keyRight.style.transition = "all .3s ease";
            keyRight.style.width = "10rem"
          }, 1000);
    }, []);


    return (
        <div className="barra">
            <div className="container">
                <div className="profile">
                  <img src={profile} alt="" />
                </div>
                <div className="cover-title">
                  <h1><span className="azul">Octavio</span> Ibáñez</h1>
                  <h3>Ingeniero en<span className="azul"> informática</span></h3>
                </div>

                
                <div className="keys" id="key-left">
                {key1}
                </div>
                <div className="keys" id="key-right">
                {key2}
                </div>
            </div>
        </div>
    );
}

export default Navbar;