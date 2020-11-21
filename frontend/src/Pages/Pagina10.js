import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../Styles/Pagina9.css';
let bool = true;
class Pagina10 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    Accion = () => {
        if (bool) {
            document.getElementById("PopUpChat").style.display = "flex";
            bool = false;
        } else {
            document.getElementById("PopUpChat").style.display = "none";
            bool = true;
        }

    }
    render() {
        return (
            <>
                <div id="PopUpChat">
                    <div id="PopUpChat2">
                        <div className="Flexito">
                            <img src="/images/Regresar.png" className="Regresar" onClick={this.Accion}/>
                            <h3>Agregar contacto</h3>
                        </div>
                        <p>Ingrese el ID de la cuenta del contacto que quieres agregar.</p>
                        <input type="text" className="inputF" />
                        <button className="BIniciar mt" onClick={this.Accion}>Hecho</button>
                    </div>
                </div>
                <div id="Chat">
                    <div id="titleChat">
                        <Link to={{ pathname: "/Pagina6", state: { Tipo: this.props.location.state.Tipo } }}>
                            <img src="/images/Regresar.png" className="Regresar" />
                        </Link>
                        <h2>Chat</h2>
                    </div>
                    <div id="MainChats">
                        <div className="CardChat">
                            <img src="/Images/Mauricio.png" className="CirculoChat" />
                            <div>
                                <p className="Group">Mauricio Casas(Usu)</p>
                                <p className="Group gray">Muy bien y tú como estas?</p>
                            </div>
                        </div>
                        <div className="CardChat">
                            <img src="/Images/Y.png" className="CirculoChat" />
                            <div>
                                <p className="Group">Yuliana Giraldo(Ent)</p>
                                <p className="Group gray">Viendo tu proceso creo que...</p>
                            </div>
                        </div>
                        <div className="CardChat">
                            <img src="/Images/S.png" className="CirculoChat" />
                            <div>
                                <p className="Group">Simón Caltrate(Usu)</p>
                                <p className="Group gray">Sé el primero en hablar con...</p>
                            </div>
                        </div>
                    </div>
                    <div id="AgregarUsuarios">
                        <img src="/images/Agregar.png" className="Agregar" onClick={this.Accion} />
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(Pagina10);