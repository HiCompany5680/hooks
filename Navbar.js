import React, {Component} from 'react';
import { TemaContexto } from '../context/Tema_Contexto';

class NavBar extends Component {

    static tipoContexto = TemaContexto;

    render() {

        console.log(this.context);

        return (

            style={ { background: estilo.ui, color: estilo.stiloText } }

            <nav >
                <h1>Contexto de la Aplicación </h1>
                <ul>
                    <li>Inicio</li>
                    <li>Acerta de Nosotros</li>
                    <li>Contáctenos</li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;
