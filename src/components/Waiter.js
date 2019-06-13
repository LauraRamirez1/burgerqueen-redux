import React, {Component} from 'react';

class Waiter extends Component{
    render(){
        return (
            <div className="container">
                <div className="row">
                  <div className="col">
                    <button  type="button" class="btn btn-danger" >DESAYUNO</button>
                    <button  type="button" class="btn btn-danger" >ALMUERZO</button>
                  </div>
                  <div class="col">
                    <p>ORDENES</p>
                  </div>
                </div>
            </div>
        )
    }
}
export default Waiter;
