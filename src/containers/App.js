import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import Aux1 from '../hoc/Aux1'
import withClass from '../hoc/withClass'

class App extends PureComponent {
  constructor(props){
    super(props)
    console.log('[App js] inside Constructor',props);
    this.state = {
      persons: [
        { id: '1', name: 'Max', age: 28 },
        { id: '2', name: 'Menu', age: 29 },
        { id: '3', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some value',
      showPersons: false
    }
  }

  componentWillMount(){
    console.log('[App js] inside componentWillMount');
  }

  componentDidMount(){
    console.log('[App js] inside componentDidMount');
  }

  componentWillReceiveProps (nextProps){
      console.log('[Update App js] inside component componentWillReceiveProps',nextProps);
  }
/*  

  shouldComponentUpdate(nextProps,nextState){
      console.log('[Update App js] inside component shouldComponentUpdate',nextProps,nextState);
      return nextState.persons !== this.state.persons || 
      nextState.showPersons !== this.state.showPersons;
  }
*/
  componentWillUpdate(nextProps,nextState){
      console.log('[Update App js] inside component componentWillUpdate',nextProps,nextState);
  }

  componentDidUpdate(nextProps,nextState){
      console.log('[Update App js] inside component componentDidUpdate',nextProps,nextState);
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Menu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id
    })
    const person ={
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex]=person;
    this.setState({persons:persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    console.log('[App js] inside render');
    let persons = null;
    if (this.state.showPersons) {
     persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />;
    }

    return (
      <Aux1>
        <button onClick={()=>{
          this.setState({showPersons:true},function(){
            console.log('showperson',this.state.showPersons);
          })
          }}>Show Perosns
        </button>
        <Cockpit
          appTitle ={this.props.title}
          showPersons = {this.state.showPersons } 
          persons = {this.state.persons }
          clicked = {this.tooglePersonsHandler}
        />
        {persons}  
      </Aux1>
    );
  }
}

export default withClass(App,classes.App);
