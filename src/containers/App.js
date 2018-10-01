import React, { PureComponent } from 'react';
import classes from '../containers/App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import Aux1 from '../hoc/Aux1'
import withClass from '../hoc/withClass'

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props){
    super(props)
    console.log('App js inside constructor',props);
    this.state = {
      persons:[
        { id: '1', name: 'Max', age: 28 },
        { id: '2', name: 'Menu', age: 29 },
        { id: '3', name: 'Stephanie', age: 26 }
      ],
      showPersons:false,
      toogleClicked:0,
      authenticated:false
    }
  }

  componentDidMount(){
    console.log('[App js] inside componentdidmount');
  }
  /*

  shouldComponentUpdate(nextProps,nextState){
    console.log('Update App js inside component shouldupdate props',nextProps,nextState);
    return nextState.persons!== this.state.persons;
  }
*/

  static getDerivedStateFromProps(nextProps,prevState) {
    console.log('Update [App js] inside component getDerivedStateFromProps props',
    nextProps,
    prevState
    );
    return prevState;
  }

  getSnapshotBeforeUpdate(){
    console.log('Update [App js] inside component getDerivedStateFromProps props');
    return null;
  }

  componentDidUpdate(nextProps,nextState){
    console.log('Update [App js]inside component didupdate props',nextProps,nextState);
  }

  switchNameHandler = (newName) =>{
    this.setState({
      persons:[
        {name:newName,age:'29'},
        {name:'Sophi', age:'25'}
      ],
      showPerson:false,
    });
  }

  deletePersonHandler = (personIndex) =>{
    const persons=this.state.persons.slice();
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  nameChangedHandler = (event, id) =>{
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

  tooglePersonsHandler = () =>{
    const doesShow = this.state.showPerson;
    this.setState((prevState,props)=>{
      return {
        showPerson: !doesShow,
        toogleClicked: prevState.toogleClicked +1     
      }
    });
  }

  loginHandler = () => {
    this.setState({authenticated:true});
  }

  render() {
    let persons = null;
    console.log('111111showperson',this.state.showPersons);
    if (this.state.showPerson) {
      console.log('showperson',this.state.showPersons);
      persons = <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler} 
          changed={this.nameChangedHandler}
        />
    }
    return (
      <Aux1>
        <button onClick={()=>{
          this.setState({ showPersons: true },function () {
            console.log('showperson',this.state.showPersons);
          })
          }}>Show Perosns
        </button>
          <Cockpit
            showPersons = {this.state.showPersons } 
            persons = {this.state.persons }
            login = {this.loginHandler }
            clicked = {this.tooglePersonsHandler}
          />
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
      </Aux1>
    );
  }
}

export default withClass(App,classes.App);
