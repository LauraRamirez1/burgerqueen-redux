import React  from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter , Route} from 'react-router-dom'
import Kitchen from './components/Kitchen';
import Waiter from './components/Waiter';
function App() {
      return (
      <BrowserRouter>
      <Route path ="/" component={Navigation}/>
      <Route path ="/kitchen" component={Kitchen}/>
      <Route path ="/waiter" component={Waiter}/>
      </BrowserRouter>
    );
  }

export default App;
