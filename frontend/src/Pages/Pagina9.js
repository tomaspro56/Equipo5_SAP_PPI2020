import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { UsuarioIniciado } from '../Utils/Mocks/Iniciado';
import '../Styles/Pagina9.css';

class Pagina9 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bool: false
        }
    }
    Accion1 = () =>{
        this.setState({bool:true});
    }
    Accion = () => {
        document.getElementById("Cambio").style.display = "block";
        let i = document.getElementsByClassName("Activar");
        for(let j = 0; j <i.length; j++){
            i[j].disabled = false;
        }
    }
    Accion2 = () =>{
        document.getElementById("Cambio").style.display = "none";
        let i = document.getElementsByClassName("Activar");
        for(let j = 0; j <i.length; j++){
            i[j].disabled = true;
        }
    }
    render() {
        return (
            <>
                <div id="Main9">
                    <div className="algominialgo alguititicoas">

                        <img src="/images/Regresar.png" onClick={this.Accion1} className="Regresar" />
                        {this.state.bool && <Redirect to={{ pathname: "/Pagina6", state: { Tipo: this.props.location.state.Tipo } }}></Redirect>}

                        <button className="BIniciar" id="Cambio" value="Mi progreso" onClick={this.Accion2}>Hecho</button>

                        <img src="/images/Editar.png" className="Regresar" id="EditarP" onClick={this.Accion} />

                    </div>
                    <div className="MainInfo">
                        <div className="MainInfo2">
                            <img src={UsuarioIniciado[0].image} className="Foto" />
                            <h5 className="MarginO">Id: {UsuarioIniciado[0].id}</h5>
                            <p className="MarginO">{UsuarioIniciado[0].tipo}</p>
                            <div>
                                <p className="Group">Nombres y apellidos</p>
                                <input className="Group inputF InPer Activar" disabled value={UsuarioIniciado[0].nombre} />
                            </div>
                            <div>
                                <p className="Group">Edad</p>
                                <input className="Group inputF InPer Activar" disabled value={UsuarioIniciado[0].Edad} />
                            </div>
                            <div className="AlgoasaDkaso">
                                <div className="algooooo">
                                    <p className="Group">Peso (Kg)</p>
                                    <input className="Group inputF3 InPer Activar" disabled value={UsuarioIniciado[0].Peso} />
                                </div>
                                <div className="algooooo">
                                    <p className="Group">Altura (Cm)</p>
                                    <input className="Group inputF3 InPer Activar" disabled value={UsuarioIniciado[0].Altura} />
                                </div>
                            </div>
                            <div>
                                <p className="Group">E-mail</p>
                                <input className="Group inputF InPer Activar" disabled value={UsuarioIniciado[0].Correo} />
                            </div>
                        </div>
                    </div>

                </div>

            </>
        );
    }
}

export default withRouter(Pagina9);