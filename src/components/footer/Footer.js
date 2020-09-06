import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container flex">
                <div className="test-footer">
                    <h2 className="titulo white"><i class="fas fa-mug-hot"></i> Charlemos</h2>
                </div>
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
                    <div className="btn-container flex">
                        <button type="submit" className="button btn-primary">Enviar</button>
                    </div>
                </form>
            </div>
        </footer>
    );
};

export default Footer;