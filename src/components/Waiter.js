import React from 'react';
import { withRouter } from 'react-router-dom';
import './navigation.css';
import Client from './Client';
import {connect} from 'react-redux';



function  Waiter (props){
  const {history} = props;
  return (
  
  <div className="container">
{/*    
    {<Client/>
    <div id = "dinerName"> 
   {this.props.client.client} }

   </div> */}
        <div className="row">
            <div className="col">
                <button  type="button" class="btn btn-danger" onClick={()=>{history.push("./desayuno")}} >DESAYUNO</button>
                <button type="button" class="btn btn-danger" onClick={()=>{history.push("./almuerzo")}} >ALMUERZO</button>
            </div>
            <div class="col">
            <p>ORDENES</p>
            </div>
        </div>
    </div>
  );
}

// const mapStateToProps = (state)=> {
//     return{
//         ...state
//     };
// }

export default withRouter (Waiter);

// import React, {Component} from 'react';
// import {desayuno,almuerzo} from './../menu.json'

// class Waiter extends Component{
    
//     render() {
//         const almuerzoMenu = almuerzo.map((single, i) => {
//             return (
//               <div key={i}>
//                 <button>{single.name}</button>
//               </div>
//             );
//           })
//         const desayunoMenu = desayuno.map((single, i) => {
//           return (
//             <div key={i}>
//                <button>{single.name}</button>
//             </div>
//           );
//         })
//         return (
//             <div className= "container">
//                 <div>{desayunoMenu }</div>
//                 <div> {almuerzoMenu }</div>  
//             </div>

//         )
//     }
// }

// export default Waiter;