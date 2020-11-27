import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../Styles/Pagina2.css';

class Pagina2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        setTimeout(function(){
            document.getElementById("PopUp2").style.display = "flex";
        }, 2000);
    }
    render() {
        return (
            <>
                <div id="Pagina2">
                    <div id="PopUp2">
                        <div id="PopUpCon2">
                            <h3>Antes de empezar</h3>
                            <p id="pPopUp2">Selecciona el rol que tomarás dentro de la aplicación.</p>
                            <Link to={{pathname: "/Pagina3", state:{Tipo:"Usuario"}}} >
                            <button className="BIniciar i">Usuario</button>
                            </Link>
                            <Link to={{pathname:"/Pagina3", state:{Tipo:"Entrenador"}}}>
                            <button className="BIniciar i">Entrenador</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(Pagina2);