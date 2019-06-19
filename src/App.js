import React  from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter , Route} from 'react-router-dom'
import Kitchen from './components/Kitchen';
import Waiter from './components/Waiter';
import desayuno from './components/Desayuno';
import almuerzo from './components/Almuerzo';

function App() {
      return (
      <BrowserRouter>
      <Route path ={process.env.PUBLIC_URL + "/"}  component={Navigation}/>
      <Route path ={process.env.PUBLIC_URL + "/kitchen"} component={Kitchen}/>
      <Route path ={process.env.PUBLIC_URL + "/waiter"}  component={Waiter}/>
      <Route path ={process.env.PUBLIC_URL + "/desayuno"}  component={desayuno}/>
      <Route path ={process.env.PUBLIC_URL + "/almuerzo"}  component={almuerzo}/>
      </BrowserRouter>
    );
  }

export default App;
