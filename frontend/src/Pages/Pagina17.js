import React from 'react';
import { Link, withRouter } from 'react-router-dom';
class Pagina17 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        document.getElementById("EsitoPuto2").innerHTML = this.props.location.state.map.contenido;
    }
    render() {
        return (
            <>
                <div className="Flexito">
                    <Link to={{ pathname: "/Pagina11", state: { Tipo: this.props.location.state.Tipo } }}>
                        <img src="/images/Regresar.png" className="Regresar" />
                    </Link>
                    <h3>{this.props.location.state.map.titulo}</h3>
                </div>
                <div className="BINICIARC">
                    <Link to={{ pathname: "/Pagina11", state: { Tipo: this.props.location.state.Tipo } }}>
                        <button className="BIniciar">Terminar</button>
                    </Link>
                </div>
                <div className="MainPag11_1" id="EsitoPuto2">

                </div>
            </>
        );
    }
}

export default withRouter(Pagina17);