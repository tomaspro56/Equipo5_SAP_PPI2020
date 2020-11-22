import React from 'react';
import { withRouter, Link } from 'react-router-dom';
class Pagina15 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div className="Flexito">
                    <Link to={{ pathname: "/Pagina14", state: { Tipo: this.props.location.state.Tipo } }}>
                        <img src="/images/Regresar.png" className="Regresar" />
                    </Link>
                    <h3>Vitaminas</h3>
                </div>
                <div className="RowMAP">
                    {this.props.location.state.map.map((Esito, index) => {
                        return (
                            <Link key={index} to={{ pathname: "/Pagina16", state: { Tipo: this.props.location.state.Tipo, map: this.props.location.state.map, map2: Esito } }}>
                                <div className="CardPag15">
                                    <h3>{Esito.title}</h3>
                                    <img className="imgCardPag15" src={Esito.img} />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </>
        );
    }
}

export default withRouter(Pagina15);