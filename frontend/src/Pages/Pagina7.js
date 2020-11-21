import React from 'react';
import '../Styles/Pagina7.css';
import { Link, withRouter} from 'react-router-dom';
let bool = true, bool2 = true, bool3=true;
class Pagina7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    algo() {
        if (bool) {
            document.getElementById("PopUpSonido1").style.display = "flex";
            bool = false;
        } else {
            document.getElementById("PopUpSonido1").style.display = "none";
            bool = true;
        }

    }
    algo2() {
        if (bool2) {
            document.getElementById("PopUpCerrar").style.display = "flex";
            bool2 = false;
        } else {
            document.getElementById("PopUpCerrar").style.display = "none";
            bool2 = true;
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
    algo4() {
        let i = document.getElementById("holap3");
        i.style.backgroundImage = "/";
        if (i.value != "") {
            i.style.backgroundImage = "none";
        } else {
            i.style.backgroundImage = "url(/images/Password.png)";
        }
    }
    algo5() {
        let i = document.getElementById("holap4");
        i.style.backgroundImage = "/";
        if (i.value != "") {
            i.style.backgroundImage = "none";
        } else {
            i.style.backgroundImage = "url(/images/Password.png)";
        }
    }
    Elefante() {
        document.getElementById("Main7_").style.display = "none";
        document.getElementById("Main72_").style.display = "flex";
    }
    Elefante2() {
        document.getElementById("Main7_").style.display = "flex";
        document.getElementById("Main72_").style.display = "none";
    }
    Contraseña(){
if(bool3){

    document.getElementById("PopUpContra").style.display = "flex";
    bool3 = false;
} else{
    document.getElementById("PopUpContra").style.display = "none";
    bool3 = true;
}
}
Contraseña2(){
    document.getElementById("PopUpContra").style.display = "none";
    document.getElementById("Main72_").style.display = "none";
    document.getElementById("Main7_").style.display = "flex";
}

    render() {
        return (
            <><div id="PopUpSonido1">
                <div className="PopUpSonido">
                    <h1>Sonido</h1>
                    <p>Configura el nivel de sonido a tu gusto.</p>
                    <input type="range" min="0" max="100" />
                    <button className="BIniciar" onClick={this.algo}>Hecho</button>
                </div>
            </div>
                <div id="PopUpCerrar">
                    <div className="PopUpSonido">
                        <h1>Cerrar sesión</h1>
                        <p>¿Estás seguro que quieres cerrar sesión?</p>
                        <div>
                            <Link to="/">
                                <button className="BIniciar">Si</button>
                            </Link>
                            <button className="BIniciar" onClick={this.algo2}>No</button>
                        </div>
                    </div>
                </div>
                <div id="PopUpContra">
                    <div className="PopUpSonido">
                        <h1>Confirmar</h1>
                        <p>¿Estás seguro que quieres cambiar la contraseña?</p>
                        <div>
 
                                <button className="BIniciar" onClick={this.Contraseña2}>Si</button>

                            <button className="BIniciar" onClick={this.Contraseña}>No</button>
                        </div>
                    </div>
                </div>
                <div id="Main7_">
                    <div id="Main7">
                        <div className="algominialgo">
                            <Link to={{pathname:"/Pagina6",state:{Tipo: this.props.location.state.Tipo}}}>
                                <img src="/images/Regresar.png" className="Regresar" />
                            </Link>
                            <h2 className="algominialgo_">Ajustes</h2>
                        </div>
                        <button className="BIniciar" onClick={this.algo}>Sonido</button>

                        <button className="BIniciar" onClick={this.Elefante}>Cambiar contraseña</button>

                        <button className="BIniciar" onClick={this.algo2}>Cerrar sesión</button>
                    </div>
                </div>
                <div id="Main72_">
                    <div id="Main72">
                        <div className="algominialgo">

                            <img src="/images/Regresar.png" className="Regresar" onClick={this.Elefante2} />

                            <h2 className="algominialgo_">Cambiar contraseña</h2>
                        </div>
                        <p>Completa los datos:</p>
                        <div >
                            <p className="Group">Contraseña actual</p>
                            <input className="Group inputF3" type="password" id="holap2" onClick={this.algo3} onChange={this.algo3} />
                        </div>
                        <div >
                            <p className="Group">Contraseña</p>
                            <input className="Group inputF3" type="password" id="holap3" onClick={this.algo4} onChange={this.algo4} />
                        </div>
                        <div>
                            <p className="Group">Confirmar</p>
                            <input className="Group inputF3" type="password" id="holap4" onClick={this.algo5} onChange={this.algo5} />
                        </div>
                        <button className="BIniciar" onClick={this.Contraseña}>Hecho</button>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(Pagina7);