import React, { Component } from 'react';
//import Container1 from './containers/container1';
// import Component1 from './functional/component1';
// import Container1 from './containers/container1';
import Routes from './routes';

class App extends Component{
 render() {
 
    return (
      <div className="App">
        React

        <Routes />
      
      </div>
    )
  }
}

export default App;
 


//  array = [
//    {id: 1, text: 'text 1', number: 1},
//    {id: 2, text: 'text 2', number: 2},
//    {id: 3, text: 'text 3', number: 3},
//    {id: 4, text: 'text 4', number: 4},
//    {id: 5, text: 'text 5', number: 5},
//  ];

//  RenderListItem = (props) => (
//    <div>
//      {props.item.text}
//      <p> {props.item.number}</p>
//    </div>
//  )
  
// {/* {this.array.map((item, id) => (<this.RenderListItem key={item.id} item = {item} /> ) )} */}