import React, {Component} from 'react'
import classes from './Person.css';
import withClass from '../../../hoc/withClass'
import Aux1 from '../../../hoc/Aux1'
import {AuthContext} from '../../../containers/App'

class Person extends Component {
  constructor(props){
    super(props)
    this.inputElement = React.createRef();
    console.log('[Person js] inside constructor',props);
  }

  componentWillMount(){
    console.log('[Person js] inside componentWillMount');
  }
  componentDidMount(){
    console.log('[Person js] inside componentDidMount');
    if ( this.props.position === 0 ){
      this.inputElement.current.focus();
    }
  }
  render (){
    return (
        <Aux1 classes={classes.Person}>
          <AuthContext.Consumer>
              {auth => auth ? <p>I am authenticated</p>:null}
          </AuthContext.Consumer>    
          <p onClick={this.props.click}>I am {this.props.name} I am {this.props.age} years old</p>
          <p>{this.props.children}</p>
          <input 
              ref={ this.inputElement }
              type="text" 
              onChange={this.props.changed} 
              value={this.props.name}/>
        </Aux1>
    ) 
  }
}
export default withClass(Person,classes.Person);