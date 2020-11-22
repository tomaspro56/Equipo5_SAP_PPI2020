import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Vitaminas } from '../Utils/Mocks/Vitaminas';
import { Suplementos } from '../Utils/Mocks/Suplementos';
import { Frutas_Verduras } from '../Utils/Mocks/Frutas_Verduras';
import '../Styles/Pagina14.css';
class Pagina14 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div className="Flexito">
                    <Link to={{ pathname: "/Pagina6", state: { Tipo: this.props.location.state.Tipo } }}>
                        <img src="/images/Regresar.png" className="Regresar" />
                    </Link>
                    <h3>Alimentación</h3>
                </div>
                <div className="Main14" id="EsitoPuto">
                    <div id="ImgAliment" className="EHE">

                    </div>
                    <Link className="quitarraya quit2" to={{ pathname: "/Pagina15", state: { Tipo: this.props.location.state.Tipo, map: Vitaminas  } }}>
                        <div id="Vitaminas" className="EHE">
                            <h2 className="EstoESo">Vitaminas</h2>
                        </div>
                    </Link>
                    <Link className="quitarraya quit2" to={{ pathname: "/Pagina15", state: { Tipo: this.props.location.state.Tipo, map: Suplementos } }}>
                        <div id="suplementos" className="EHE">
                            <h2 className="EstoESo">Suplementos</h2>
                        </div>
                    </Link>
                    <Link className="quitarraya quit2" to={{ pathname: "/Pagina15", state: { Tipo: this.props.location.state.Tipo, map: Frutas_Verduras} }}>
                        <div id="Frutas" className="EHE">
                            <h2 className="EstoESo">Frutas y verduras</h2>
                        </div>
                    </Link>
                </div>
            </>
        );
    }
}

export default withRouter(Pagina14);