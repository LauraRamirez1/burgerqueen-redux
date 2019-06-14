import React, {Component} from 'react';
import {almuerzo} from './../menu.json'

class Almuerzo extends Component{
    
    render() {
        const almuerzoMenu = almuerzo.map((single, i) => {
            return (
              <div key={i}>
                <button type="button" class="btn btn-dark">{single.name + " "+"$ "+single.precio}</button>
              </div>
            );
          })

        return (
            <div className= "container">
                <div> {almuerzoMenu }</div>  
            </div>

        )
    }
}

export default Almuerzo ;