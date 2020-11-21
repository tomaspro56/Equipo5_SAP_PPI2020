import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Pagina1 from './Pages/Pagina1';
import Pagina2 from './Pages/Pagina2';
import Pagina3 from './Pages/Pagina3';
import Pagina4 from './Pages/Pagina4';
import Pagina5 from './Pages/Pagina5';
import Pagina6 from './Pages/Pagina6';
import Pagina7 from './Pages/Pagina7';
import Pagina8 from './Pages/Pagina8';
import Pagina9 from './Pages/Pagina9';
import Pagina10 from './Pages/Pagina10';
import Pagina11 from './Pages/Pagina11';
import Pagina12 from './Pages/Pagina12';
import Pagina13 from './Pages/Pagina13';
import Pagina14 from './Pages/Pagina14';
import Pagina15 from './Pages/Pagina15';
import Pagina16 from './Pages/Pagina16';
import Pagina17 from './Pages/Pagina17';
ReactDOM.render(
  <React.StrictMode>
   <Router>
     <Switch>
       <Route path="/Pagina17" component={Pagina17} />
       <Route path="/Pagina16" component={Pagina16} />
       <Route path="/Pagina15" component={Pagina15} />
       <Route path="/Pagina14" component={Pagina14} />
       <Route path="/Pagina13" component={Pagina13} />
       <Route path="/Pagina12" component={Pagina12} />
       <Route path="/Pagina11" component={Pagina11}/>
       <Route path="/Pagina10" component={Pagina10} />
       <Route path="/Pagina9" component={Pagina9} />
       <Route path="/Pagina8" component={Pagina8} />
       <Route path="/Pagina7" component={Pagina7} />
       <Route path="/Pagina6" component={Pagina6} />
       <Route path="/Pagina5" component={Pagina5} />
       <Route path="/Pagina4" component={Pagina4} />
       <Route path="/Pagina3" component={Pagina3} />
       <Route path="/Pagina2" component={Pagina2} />
       <Route path="/" component={Pagina1} />
     </Switch>
     </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);

