import React from 'react';
import '../Styles/Pagina6.css';
import { Link,withRouter } from 'react-router-dom';
class Pagina6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount(){
        console.log(this.props.location.state.Tipo);
    }
    render() {
        return (
            <>
                <div id="Main6">
                    <div className="Center">
                        <h1 id="algitotito">Isolation Training</h1>
                    </div>
                    <div id="EsitoPuto">
                        <Link className="quitarraya" to={{pathname:"/Pagina11", state:{Tipo: this.props.location.state.Tipo}}} >
                            <div id="Rutinas" className="EHE">
                                <h2 className="EstoESo">Rutinas</h2>
                            </div>
                        </Link>
                        <Link className="quitarraya" to={{pathname:"/Pagina14", state:{Tipo: this.props.location.state.Tipo}}}>
                            <div id="Alimentacion" className="EHE">
                                <h2 className="EstoESo">Alimentación</h2>
                            </div>
                        </Link>
                        <Link className="quitarraya" to={{pathname:"/Pagina9", state:{Tipo: this.props.location.state.Tipo}}}>
                        <div id="Cuenta" className="EHE">
                            <h2 className="EstoESo">Cuenta</h2>
                        </div>
                        </Link>
                        <Link className="quitarraya" to={{pathname:"/Pagina8", state:{Tipo: this.props.location.state.Tipo}}}>
                        <div className="EHE" id="Ayuda">
                            <h2 className="EstoESo">Ayuda</h2>
                        </div>
                        </Link>
                    </div>
                    <div id="LinksPrincipalC">
                        <Link to={{pathname:"/Pagina10", state:{Tipo: this.props.location.state.Tipo}}}>
                        <img src="/images/Chat.png" className="LinksPrincipal" />
                        </Link>
                        <Link to={{pathname:"/Pagina7", state:{Tipo: this.props.location.state.Tipo}}}> 
                        <img src="/images/Config.png" className="LinksPrincipal2" />
                        </Link>
                    </div>
                </div>

            </>
        );
    }
}

export default withRouter(Pagina6);