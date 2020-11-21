import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../Styles/Pagina8.css';
let bool = true, bool2= true;
class Pagina8 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    Accion1() {
        if (bool) {
            document.getElementById("Pagi1").style.display = "none";
            document.getElementById("Pagi2").style.display = "block";
            bool = false;
        } else {
            document.getElementById("Pagi2").style.display = "none";
            document.getElementById("Pagi1").style.display = "block";
            bool = true;
        }
    }
    Accion2() {
        document.getElementById("PopUpContacto").style.display = "flex";
    }
    Accion3(){
        if(bool2){
            document.getElementById("PopUpInfo").style.display = "flex";
            bool2 = false;
        } else {
            document.getElementById("PopUpInfo").style.display = "none";
            bool2 = true;
        }
    }
    render() {
        return (
            <>
                <div id="PopUpInfo">
                    <div id="PopUpInfo2">
                        <div className="algominialgo alguititicoas">
                            <img src="/images/Regresar.png" onClick={this.Accion3} className="Regresar" />
                            <h2 className="algominialgo_">Información</h2>
                        </div>
                        <p>
                        Está aplicación permitirá a sus usuarios continuar con su acondicionamiento y mejoramiento de estado físico desde sus casas, llevando un proceso diario, orientado ya asignado dependiendo de sus necesidades y capacidades, por entrenadores que estarán siempre al tanto de su progreso, los guiarán y facilitarán su estadía en la aplicación.
                        </p>
                    </div>
                </div>
                <div id="PopUpContacto">
                    <div id="PopUpConta">
                        <h1>Felicidades</h1>
                        <p>Tu mensaje ha sido enviando con éxito.</p>
                        <p>Responderemos a él lo más pronto posible.</p>
                        <Link to={{pathname:"/Pagina6", state:{Tipo: this.props.location.state.Tipo}}}>
                            <button className="BIniciar">Hecho</button>
                        </Link>
                    </div>
                </div>
                <div id="Pagi1">
                    <div className="algominialgo alguititicoas">
                        <Link to={{pathname:"/Pagina6", state:{Tipo: this.props.location.state.Tipo}}}>
                            <img src="/images/Regresar.png" className="Regresar" />
                        </Link>
                        <h2 className="algominialgo_">Información</h2>
                    </div>
                    <div className="MainInfo">
                        <div className="MainInfo2">
                            <div>
                                <h3 className="Group">Contáctanos</h3>
                                <h3 className="Group">E-Mail</h3>
                                <h3 className="Group">ISSUPORT@gmail.com</h3>
                            </div>
                            <div className="XD___">
                                <h3>¿Quieres escribirnos algo?</h3>
                                <button className="BIniciar" onClick={this.Accion1}>Contactar</button>
                            </div>
                            <h3 id="InfoText" onClick={this.Accion3}>Información de la web</h3>
                        </div>
                    </div>
                </div>
                <div id="Pagi2">
                    <div className="algominialgo alguititicoas">
                        <img src="/images/Regresar.png" className="Regresar" onClick={this.Accion1} />
                        <h2 className="algominialgo_">Contactar</h2>
                    </div>
                    <div className="MainInfo">
                        <div className="MainInfo2">
                            <p className="centerAA">Escribe a continuación tus preguntas, sugerencias y/o comentarios.</p>
                            <textarea type="text" className="inputF" />
                            <button className="BIniciar" onClick={this.Accion2}>Enviar</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(Pagina8);