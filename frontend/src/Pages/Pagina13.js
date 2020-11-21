import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../Styles/Pagina12.css';
class Pagina13 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div className="Flexito  flexito2">
                    <Link to={{ pathname: "/Pagina11", state: { Tipo: this.props.location.state.Tipo } }}>
                        <img src="/images/Regresar.png" className="Regresar" />
                    </Link>
                    <h3>Mis rutinas</h3>
                </div>
                <div className="Main13">
                    <div className="CardRutina">
                        <div>
                            <img className="IMGPLAY" src="/Images/Play.png" />
                        </div>
                        <div>
                            <h4>Rutina de piernas #1</h4>
                        </div>
                        <div>
                            <img className="IMGPLAY" src="/Images/basura.png" />
                        </div>
                    </div>
                    <div className="CardRutina">
                        <div>
                            <img className="IMGPLAY" src="/Images/Play.png" />
                        </div>
                        <div>
                            <h4>Rutina de piernas #2</h4>
                        </div>
                        <div>
                            <img className="IMGPLAY" src="/Images/basura.png" />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(Pagina13);