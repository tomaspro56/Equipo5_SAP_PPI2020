import React from 'react';
import '../Styles/Pagina4.css';
import { Link , withRouter} from 'react-router-dom';
class Pagina4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        document.getElementById("Pag4_1").style.display = "flex";
        document.getElementById("Pag4_2").style.display = "none";
        document.getElementById("Pag4_3").style.display = "none";
        document.getElementById("Pag4_4").style.display = "none";

    }
    Efesito() {
        document.getElementById("Pag4_1").style.display = "none";
        document.getElementById("Pag4_2").style.display = "flex";
        document.getElementById("Pag4_3").style.display = "none";
    }
    Efesito2(){
        document.getElementById("Pag4_1").style.display = "none";
        document.getElementById("Pag4_3").style.display = "flex";
        document.getElementById("Pag4_2").style.display = "none";
        document.getElementById("Pag4_4").style.display = "none";
    }
    Efesito3(){
        document.getElementById("Pag4_1").style.display = "none";
        document.getElementById("Pag4_4").style.display = "flex";
        document.getElementById("Pag4_2").style.display = "none";
        document.getElementById("Pag4_3").style.display = "none";
    }
    algo() {
        let i = document.getElementById("Input1Contra1");
        i.style.backgroundImage = "/";
        if (i.value != "") {
            i.style.backgroundImage = "none";
        } else {
            i.style.backgroundImage = "url(/images/Password.png)";
        }
    }
    algo2() {
        let i = document.getElementById("Input1Contra2");
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
                <div id="Pag4_1">
                    <div className="Pag4_1_2">
                        <div className="algominialgo">
                            <Link to={{pathname:"/Pagina3", state:{Tipo: this.props.location.state.Tipo}}}>
                                <img src="/images/Regresar.png" className="Regresar" />
                            </Link>
                            <h2 className="algominialgo_">Recupera tu contraseña</h2>
                        </div>
                        <div id="Estoalguito">
                            <p id="Esto">Completa los datos</p>
                            <div>
                                <p className="Group">E-mail</p>
                                <input type="email" className="Group inputF" />
                            </div>
                            <p>Enviaremos una clave a tu correo para verificar que estás registrado y eres el dueño de la cuenta a la que quieres acceder.</p>
                        </div>
                        <button className="BIniciar" onClick={this.Efesito}>Enviar clave</button>
                    </div>
                </div>
                <div id="Pag4_2">
                    <div className="Pag4_1_2">

                            <h2>Recupera tu contraseña</h2>

                        <p>Ingresa aquí la clave que enviamos a tu correo.</p>

                        <div>
                            <input className="jeje" type="text"/>
                            <input className="jeje" type="text"/>
                            <input className="jeje" type="text"/>
                            <input className="jeje" type="text"/>
                        </div>

                        <button className="BIniciar" onClick={this.Efesito2}>Hecho</button>
                    </div>
                </div>
                <div id="Pag4_3">
                    <div className="Pag4_1_2">
                    <h2>Recupera tu contraseña</h2>
                    <p>Ahora crea una nueva contraseña.</p>
                    <div>
                        <p className="Group">Contraseña nueva</p>
                        <input className="Group inputF inputF2" id="Input1Contra1" onClick={this.algo} onChange={this.algo} type="password" />
                    </div>
                    <div>
                    <p className="Group">Confirmar contraseña</p>
                        <input className="Group inputF inputF2" id="Input1Contra2" onClick={this.algo2} onChange={this.algo2} type="password" />
                    </div>
                    <button className="BIniciar" onClick={this.Efesito3}>Hecho</button>
                    </div>
                </div>
                <div id="Pag4_4">
                    <div className="Pag4_1_3">
                        <div id="Algititico">
                            <h1>Felicidades</h1>
                            <p>El cambio de la contraseña ha sido exitoso</p>
                            <p>Ingresa nuevamente tus datos para iniciar sesión con la contraseña nueva.</p>
                        </div>
                        <Link to={{pathname:"/Pagina3", state:{Tipo: this.props.location.state.Tipo}}}>
                        <button className="BIniciar">Hecho</button>
                        </Link>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(Pagina4);