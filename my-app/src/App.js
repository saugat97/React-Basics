import React, { Component } from 'react';
import Container1 from './containers/container1';
// import Component1 from './functional/component1';
// import Container1 from './containers/container1';

class App extends Component{

 array = [
   {id: 1, text: 'text 1', number: 1},
   {id: 2, text: 'text 2', number: 2},
   {id: 3, text: 'text 3', number: 3},
   {id: 4, text: 'text 4', number: 4},
   {id: 5, text: 'text 5', number: 5},
 ];

 RenderListItem = (props) => (
   <div>
     {props.item.text}
     <p> {props.item.number}</p>
   </div>
 )
 
  render() {
 
    return (
      <div className="App">
        React

        <Container1 />
        {/* {this.array.map((item, id) => (<this.RenderListItem key={item.id} item = {item} /> ) )} */}
      </div>
    )
  }
}

export default App;
 