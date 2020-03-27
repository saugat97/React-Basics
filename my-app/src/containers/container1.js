import React, { Component} from 'react';
//import Component1 from '../functional/component1';

class Container1 extends Component {

    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        value: ''
    }

    handleChange(event) {
        console.log(event.target.value);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ value: event.target.name.value})
    } 

    render() {
        return (
            <div>
             <form onSubmit={this.handleSubmit}>
                 <label> Name </label>
                 <input id="name" onChange={this.handleChange} type="text" />
                 <button type = "submit"> Submit </button>
             </form>
             {this.state.value}
            </div>
        )
    }
}

export default Container1;




    //    changeState = () => (
    //        this.setState({ stateprop1: "NewState"})
    //    )


    //    //setState : prevState usage
    //    changeState = () => (
    //        this.setState((prevState, props) => ({
    //             stateprop2: prevState.stateprop2 + 1
    //        }))
    //    )


    //update without passing in prevState
    // changeState = () => (
    //     this.setState({stateprop2: this.state.stateprop2 + 1})
    // )

    // changeState2 = () => (
    //     this.setState({stateprop1: this.state.stateprop1 + "Ok"})
    // )

    // {/* <button onClick={() => this.changeState()}> Change state </button>
    //                 <br />
    //                 {this.state.stateprop2} 
                    
    //                 <button onClick={() => this.changeState2()}> Change state </button>
    //                 <br />
    //                 {this.state.stateprop1} 
                    
                    
    //                 <Component1 prop1={this.state.stateprop3} />
    //              */}