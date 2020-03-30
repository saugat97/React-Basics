import React, { Component} from 'react';
//import Component1 from '../functional/component1';

//import * as ACTION_TYPES from '../store/actions/action_types';
import * as ACTIONS from '../store/actions/actions';

import { connect } from 'react-redux';


class Container1 extends Component {
    render() {
        const user_text = "text 2"
        return (
            <div>
                <button onClick={() => this.props.auth.login()} > Login </button>

                <br /> <br /> <br />
                <button onClick={() => this.props.action1()}> Dispatch Action 1 </button>
                <button onClick={() => this.props.action2()}> Dispatch Action 2 </button>
                <button onClick={() => this.props.action_creator1()}> Dispatch Action_creator 1 </button>
                <button onClick={() => this.props.action_creator2()}> Dispatch Action_creator 2 </button>
                <button onClick={() => this.props.action_creator3(user_text)}> Dispatch Action_creator 3 </button>
                {this.props.user_input ? <h1>{this.props.user_input}</h1> : null}
            </div>
        )
    } 
}

function mapStateToProps(state){
 return{
     stateprop1: state.reducer1.stateprop1,
     user_input: state.user_reducer.user_text
 }
}

function mapDispatchToProps(dispatch){
    return{
        action1: () => dispatch(ACTIONS.SUCCESS),
        action2: () => dispatch(ACTIONS.FAILURE),
        action_creator1: () => dispatch(ACTIONS.success()),
        action_creator2: () => dispatch(ACTIONS.failure()),
        action_creator3: (text) => dispatch(ACTIONS.user_input(text))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container1);








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

    // constructor(props){
    //     super(props)

    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    
    // state = {
    //     value: ''
    // }

    // handleChange(event) {
    //     console.log(event.target.value);
    // }

    // handleSubmit(event) {
    //     event.preventDefault();
    //     this.setState({ value: event.target.name.value})
    // } 




    // {/* <button onClick={() => this.changeState()}> Change state </button>
    //                 <br />
    //                 {this.state.stateprop2} 
                    
    //                 <button onClick={() => this.changeState2()}> Change state </button>
    //                 <br />
    //                 {this.state.stateprop1} 
                    
                    
    //                 <Component1 prop1={this.state.stateprop3} />
    //              */}

    // <form onSubmit={this.handleSubmit}>
    //              <label> Name </label>
    //              <input id="name" onChange={this.handleChange} type="text" />
    //              <button type = "submit"> Submit </button>
    //          </form>
    //          {this.state.value}