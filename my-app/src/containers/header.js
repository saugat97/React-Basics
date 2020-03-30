import React, { Component } from 'react';
import { Link } from 'react-router-dom' 

class Header extends Component {
   state = {
        numbers: 
        [
            {id: 1},
            {id: 2},
            {id: 3},
            {id: 4}
        ]
   }


    render(){
        return(
            <div>
                <Link to='/' style={{padding: '5px'}}>
                   Home
                </Link>
                <Link to='/privateroute' style={{padding: '5px'}}>
                   Private Route
                </Link>

               {this.state.numbers.map(num =>
                <Link key={num.id} to={{pathname:'/component/' + num.id}} style={{padding: '5px'}}>
                    Component {num.id}
                </Link>
             )}
              
            </div>
        )
    }
}

export default Header;