import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container flex">
                <fieldset>
                    <legend>¡Conversemos!</legend>
                    <form>
                        <div className="div-form">
                            <label>Nombre</label>
                            <input type="text" />
                        </div>
                        <div className="div-form">
                            <label>Contacto:</label>
                            <input type="text" />
                        </div>
                        <div className="div-form">
                            <label>Asunto</label>
                            <textarea></textarea>
                        </div>
                        <div className="btn-container">
                            <button type="submit" className="button btn-secundary">Enviar</button>
                        </div>
                    </form>
                </fieldset>
            </div>
        </footer>
    );
};

export default Footer;