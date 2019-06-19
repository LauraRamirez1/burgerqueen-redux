import React  from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter , Route} from 'react-router-dom'
import Kitchen from './components/Kitchen';
import Waiter from './components/Waiter';
import desayuno from './components/Desayuno';
import almuerzo from './components/Almuerzo';

function App() {
      return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path ="/" component={Navigation}/>
      <Route path ="/kitchen" component={Kitchen}/>
      <Route path ="/waiter" component={Waiter}/>
      <Route path ="/desayuno" component={desayuno}/>
      <Route path ="/almuerzo" component={almuerzo}/>
      </BrowserRouter>
    );
  }

export default App;
