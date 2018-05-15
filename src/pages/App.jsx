import React, { Component } from 'react';
//Router = roteador em si
//Route = uma rota da aplicação
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

//Páginas para as rotas
import Cursos from './Cursos.jsx';
import Sobre from './Sobre.jsx';
import ErrorPage from './ErrorPage.jsx';

//Components da estrutura de default de layout
//Header, Navbar e Footer
import Footer from '../component/Footer.jsx';
import Navbar from '../component/NavbarZim.jsx';

class App extends Component {

  constructor(){
    super();
  }

  render() {
    return (
      //Configuração de rotas
      <Router>
        <div>
          <Navbar />
          <hr />
          <Switch>
            <Route path='/cursos' component={Cursos} />
            <Route path='/sobre' component={Sobre} />
            <Route component={ErrorPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }

}

export default App;
