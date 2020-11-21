import React from 'react';
import '../Styles/Pagina3.css';
import {Link, withRouter} from 'react-router-dom';
import {UsuarioIniciado} from '../Utils/Mocks/Iniciado';
class Pagina3 extends React.Component {
    constructor(props) {
        super(props);
            this.state = {}
        }
        componentDidMount(){
            UsuarioIniciado[0].tipo = this.props.location.state.Tipo;
        }
    algo() {
        let i = document.getElementById("userInput");
        i.style.backgroundImage = "/";
        if (i.value != "") {
            i.style.backgroundImage = "none";
        } else {
            i.style.backgroundImage = "url(/images/User.png)";
        }
    }
    algo2() {
        let i = document.getElementById("contraInput");
        i.style.backgroundImage = "/";
        if (i.value != "") {
            i.style.backgroundImage = "none";
        } else {
            i.style.backgroundImage = "url(/images/Password.png)";
        }
    }

    render() {
        return (
            <>
                <div id="Contenedor2_">
                    <div id="Contenedor2">
                        <div id="megaf">
                            <img src="/images/Logo.png" className="Logo2" />
                            <h1 id="Minih1">Inicia sesión</h1>
                        </div>
                        <div id="megaf2">
                            <div>
                                <p className="Group">Usuario</p>
                                <input type="text" className="Group" id="userInput" onClick={this.algo} onChange={this.algo} />
                            </div>
                            <div>
                                <p className="Group">Contraseña</p>
                                <input type="text" className="Group" id="contraInput" onClick={this.algo2} onChange={this.algo2} />
                            </div>
                            <Link to={{pathname: "/Pagina4", state: {Tipo:this.props.location.state.Tipo}}}> 
                            <p>¿Olvidaste tu contraseña?</p>
                            </Link>
                            <Link to={{pathname:"/Pagina6",state:{Tipo: this.props.location.state.Tipo}}}>
                            <button className="BIniciar" onClick={this.algo3}>Hecho</button>
                            </Link>
                            <p>O iniciar sesión con</p>
                            <div>
                                <img className="icons" src="/images/Facebook.png" />
                                <img className="icons" src="/images/Google.png" />
                            </div>
                            <p>¿Aún no tienes cuenta?</p>
                            <Link to={{pathname: "/Pagina5", state:{Tipo: this.props.location.state.Tipo}}}>
                            <button className="BIniciar">Registrate</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(Pagina3);