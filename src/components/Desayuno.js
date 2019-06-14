import React, {Component} from 'react';
import {desayuno} from './../menu.json'

class Desayuno extends Component{
    
    render() {
        const desayunoMenu = desayuno.map((single, i) => {
          return (
            <div key={i}>
               <button type="button" class="btn btn-dark">{single.name + " "+"$ "+single.precio}</button>
            </div>
          );
        })
        return (
            <div className= "container">
                <div>{desayunoMenu }</div> 
            </div>

        )
    }
}

export default Desayuno ;