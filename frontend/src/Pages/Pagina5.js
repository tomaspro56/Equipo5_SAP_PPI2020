import React from 'react';
import { Link,withRouter } from 'react-router-dom';
import '../Styles/Pagina5.css';
class Pagina5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    algo() {
        let i = document.getElementById("holap");
        i.style.backgroundImage = "/";
        if (i.value != "") {
            i.style.backgroundImage = "none";
        } else {
            i.style.backgroundImage = "url(/images/User.png)";
        }
    }
    algo2() {
        let i = document.getElementById("holap2");
        i.style.backgroundImage = "/";
        if (i.value != "") {
            i.style.backgroundImage = "none";
        } else {
            i.style.backgroundImage = "url(/images/Password.png)";
        }
    }
    algo3() {
        let i = document.getElementById("holap2");
        i.style.backgroundImage = "/";
        if (i.value != "") {
            i.style.backgroundImage = "none";
        } else {
            i.style.backgroundImage = "url(/images/Password.png)";
        }
    }
    salu2(){
        document.getElementById("Main5_").style.display = "none";
        document.getElementById("Pag5_4").style.display = "flex";
    }
    render() {
        return (
            <>
            <div id="Pag5_4">
                    <div className="Pag4_1_2">
                        <div id="Algititico">
                            <h1>Felicidades</h1>
                            <p>Ya haces parte de la aplicación.</p>
                            <p>Ahora puedes disfrutar de los beneficios y servicios que te brindamos.</p>
                        </div>
                        <Link to={{pathname:"/Pagina3", state:{Tipo: this.props.location.state.Tipo}}}>
                        <button className="BIniciar">Hecho</button>
                        </Link>
                    </div>
                </div>
                <div id="Main5_">
                    <div id="Main5">
                        <div className="algominialgo">
                            <Link to={{pathname:"/Pagina3", state:{Tipo: this.props.location.state.tipo}}}>
                                <img src="/images/Regresar.png" className="Regresar" />
                            </Link>
                            <h2 className="algominialgo_">Registrarse</h2>
                        </div>
                        <p>Completa los datos:</p>
                        <div className="Algititititico">
                            <p className="Group">Nombres y apellidos</p>
                            <input className="Group inputF3" type="text" />
                        </div>
                        <div className="Algititititico">
                            <p className="Group">Edad</p>
                            <input className="Group inputF3" type="text" />
                        </div>
                        <div className="Algititititico alginti2">
                            <div className="Algititititico2">
                                <p className="Group">Peso (Kg)</p>
                                <input className="Group inputF3" type="text" />
                            </div>
                            <div className="Algititititico2">
                                <p className="Group">Altura (Cm)</p>
                                <input className="Group inputF3" type="text" />
                            </div>
                        </div>
                        <div className="Algititititico">
                            <p className="Group">E-mail</p>
                            <input className="Group inputF3" type="email" />
                        </div>
                        <div className="Algititititico">
                            <p className="Group">Usuario</p>
                            <input className="Group inputF3" type="text" id="holap" onClick={this.algo} onChange={this.algo} />
                        </div>
                        <div className="Algititititico alginti2">
                            <div className="Algititititico2">
                                <p className="Group">Contraseña</p>
                                <input className="Group inputF3" type="password" id="holap2" onClick={this.algo2} onChange={this.algo2} />
                            </div>
                            <div className="Algititititico2">
                                <p className="Group">Confirmar</p>
                                <input className="Group inputF3" type="password" id="holap3" onClick={this.algo3} onChange={this.algo3} />
                            </div>
                        </div>
                        <button className="BIniciar i__" onClick={this.salu2}>Hecho</button>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(Pagina5);