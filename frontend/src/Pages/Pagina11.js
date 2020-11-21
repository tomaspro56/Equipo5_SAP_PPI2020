import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Rutinas } from '../Utils/Mocks/Rutinas';
import '../Styles/Pagina9.css';
class Pagina11 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    Tipo = () => {
        if (this.props.location.state.Tipo == "Usuario") {
            return (
                <>
                    <div className="headerPag11_1">
                        <div className="Flexito">
                            <Link to={{ pathname: "/Pagina6", state: { Tipo: this.props.location.state.Tipo } }}>
                                <img src="/images/Regresar.png" className="Regresar" />
                            </Link>
                            <h3>Rutinas</h3>
                        </div>
                        <div className="Flexito">
                            <input className="inputF" type="text" />
                            <img src="/Images/buscar.png" className="search" />
                        </div>
                        <div className="Flexito2">
                            <img src="/Images/filtrar.png" className="filtrar" />
                            <h4>Filtrar</h4>
                        </div>
                    </div>
                    <div className="MainPag11_1" id="EsitoPuto">
                        {
                            Rutinas.map((Esito, index) => {
                                return (
                                    <div className="CardRutinas">
                                        <div className="CardRutinas2">
                                            <p className="EstoESo">{Esito.titulo}</p>
                                            <img src={Esito.fondo} className="EHE" ></img>
                                        </div>
                                        <div className="CardRutinas2_">
                                            <p>Valor: {Esito.valor}$</p>
                                            <Link to={{ pathname: "/Pagina17", state: { Tipo: this.props.location.state.Tipo, map: Esito } }}>
                                                <button className="BIniciar3">Comenzar</button>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })
                        }
                        <h2 className="center">Más rutinas proximamente.</h2>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="Flexito headerPag11_2">
                        <Link to={{ pathname: "/Pagina6", state: { Tipo: this.props.location.state.Tipo } }}>
                            <img src="/images/Regresar.png" className="Regresar" />
                        </Link>
                        <h3>Rutinas</h3>
                    </div>
                    <div className="MainPag11_2" id="EsitoPuto">
                        <Link className="quitarraya" to={{ pathname: "/Pagina12", state: { Tipo: this.props.location.state.Tipo } }}>
                            <div id="SubirR" className="EHE2">
                                <h2 className="EstoESo">Subir rutinas</h2>
                            </div>
                        </Link>
                        <Link className="quitarraya" to={{ pathname: "/Pagina13", state: { Tipo: this.props.location.state.Tipo } }}>
                            <div id="MisR" className="EHE2">
                                <h2 className="EstoESo">Mis rutinas</h2>
                            </div>
                        </Link>
                    </div>
                </>
            );
        }
    }
    render() {
        return (
            <>
                <div>
                    {this.Tipo()}
                </div>
            </>
        );
    }
}

export default withRouter(Pagina11);