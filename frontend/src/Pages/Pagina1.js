import React from 'react';
import '../Styles/Pagina1.css';
import {Link} from 'react-router-dom';
let bool1 = true;
class Pagina1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    info(){
        if(bool1 == true){
            document.getElementById('PopUp1').style.display = 'flex';
            bool1 = false;
        } else{
            document.getElementById('PopUp1').style.display = 'none';
            bool1 = true;
        }
    }
    render() {
        return (
            <>
                <div id="PopUp1">
                    <div id="PopUpCon1">
                        <div id="PopUpCon1_">
                            <img src="/images/Regresar.png"className="Regresar" onClick={this.info} />
                            <h3>Información</h3>
                        </div>
                        <p>
                            Está aplicación permitirá a sus usuarios continuar con su acondicionamiento y mejoramiento de estado físico desde sus casas, llevando un proceso diario, orientado ya asignado dependiendo de sus necesidades y capacidades, por entrenadores que estarán siempre al tanto de su progreso, los guiarán y facilitarán su estadía en la aplicación.
                        </p>
                    </div>
                </div>
                <div id="Contenedor1_">
                    <div id="Contenedor1">

                    <h1>Isolation Training</h1>
                    <img src="/images/Logo.png" id="Logo"/>
                    <Link to="/Pagina2">
                    <button className="BIniciar">Iniciar</button>
                    </Link>
                    <div id="divAbajo">
                        <img src="/images/Ayuda.png" className="Ayuda" onClick={this.info}/>
                    </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Pagina1;