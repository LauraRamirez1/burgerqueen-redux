import React from 'react';
import burguerQueen from '../burguerQueen.png';
import { withRouter } from 'react-router-dom';
import './navigation.css';

function Navigation (props){
  const {history} = props;
  return (
    <div>
      <div className= "navbarBurger">
        <div className="row">
          <div className="col">
            <img src={burguerQueen} className="logoImg" alt="logo" />   
          </div>
          <div class="col">
            <button  type="button" class="btn btn-danger" onClick={()=>{history.push("./waiter")}} >MESERO</button>
            <button type="button" class="btn btn-danger" onClick={()=>{history.push("./kitchen")}} >COCINA</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Navigation);
