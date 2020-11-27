import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../Styles/Pagina12.css';
let bool = true;
class Pagina12 extends React.Component {
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
            document.getElementById("PopUpChat_1").style.display = "flex";
            bool = true;
        }
    }
    render() {
        return (
            <>
                <div id="PopUpChat_1">
                    <div id="PopUpChat2">
                        <h2>Felicidades</h2>
                        <p>La rutina se ha publicado con exito.</p>
                        <Link to={{ pathname: "/Pagina11", state: { Tipo: this.props.location.state.Tipo } }}>
                            <button className="BIniciar">Hecho</button>
                        </Link>
                    </div>
                </div>
                <div id="PopUpChat">
                    <div id="PopUpChat2">

                        <h3>Clasificación</h3>

                        <p>Seleccione las enfermedades a las que esta rutina favorecerá.</p>

                        <div >
                            <p className="Group"><input type="checkbox" /> Hipertensión</p>
                            <p className="Group"><input type="checkbox" /> Diabetes</p>
                            <p className="Group"><input type="checkbox" /> Artritis</p>
                            <p className="Group"><input type="checkbox" /> Demencia</p>
                        </div>
                        <button className="BIniciar" onClick={this.Accion}>Continuar</button>
                    </div>
                </div>
                <div id="Pagi1">
                    <div className="algominialgo alguititicoas">
                        <Link to={{ pathname: "/Pagina11", state: { Tipo: this.props.location.state.Tipo } }}>
                            <img src="/images/Regresar.png" className="Regresar" />
                        </Link>
                        <h2 className="algominialgo_">Información</h2>
                    </div>
                    <div className="MainInfo">
                        <div className="MainInfo2">
                            <div>
                                <p className="Group">Título</p>
                                <input type="text" className="Group inputF" />
                            </div>
                            <div>
                                <p className="Group">Descripción</p>
                                <textarea className="Group inputF textAreaPag12" />
                            </div>
                            <input type="file" className="BIniciar2" />
                            <button className="BIniciar" onClick={this.Accion}>Continuar</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(Pagina12);