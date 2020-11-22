import React from 'react';
import {withRouter, Link} from 'react-router-dom';
class Pagina16 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <div className="Flexito">
                    <Link to={{ pathname: "/Pagina15", state: { Tipo: this.props.location.state.Tipo, map: this.props.location.state.map } }}>
                        <img src="/images/Regresar.png" className="Regresar" />
                    </Link>
                    <h3>{this.props.location.state.map2.title}</h3>
                </div>
                <div className="RowMAP RowMAP2">
                    <p className="Noventa">
                    {this.props.location.state.map2.contenido}
                    </p>
                </div>
            </>
         );
    }
}
 
export default withRouter(Pagina16);