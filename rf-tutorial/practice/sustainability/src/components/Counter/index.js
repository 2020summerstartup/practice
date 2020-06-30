import React, {Component} from 'react';
import { AuthUserContext, withAuthorization } from '../Session';

//import { auth } from 'firebase';
//import * as ROUTES from '../../constants/routes';


class CounterPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        };
    }

    increment = () =>{
        this.setState({
            count: this.state.count + 10
        })
    };

    decrement = () =>{
        this.setState({
            count: this.state.count - 10
        })
    };
    
    render(){
        // return (
        //     <AuthUserContext.Consumer>
        // {authUser => (
            return (
            <div>
            <p>You have earned a total of {this.state.count} points!</p>
            <button className='buzzButton' onClick={this.increment}>BUZZ</button>
            <button className='undoButton' onClick={this.decrement}>Undo</button>
            </div>
            );
        // )};
        // </AuthUserContext.Consumer>

    }
}
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(CounterPage);