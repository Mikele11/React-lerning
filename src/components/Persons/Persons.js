import React, {Component} from 'react'
import Person from './Person/Person'

class Persons extends Component {
    constructor(props){
        super(props)
        console.log('[Persons js] inside constructor',props);
      }
    
    componentWillMount(){
        console.log('[Persons js] inside componentWillMount');
    }

    componentDidMount(){
        console.log('[Persons js] inside componentDidMount');
    }

    componentWillReceiveProps (nextProps){
        console.log('[Update Persons js] inside component componentWillReceiveProps',nextProps);
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('[Update Persons js] inside component shouldComponentUpdate',nextProps,nextState);
        return nextProps.persons !== this.props.persons;
    }

    componentWillUpdate(nextProps,nextState){
        console.log('[Update Persons js] inside component componentWillUpdate',nextProps,nextState);
    }

    componentDidUpdate(nextProps,nextState){
        console.log('[Update Persons js] inside component componentDidUpdate',nextProps,nextState);
    }

    render () {
        console.log('[Persons js] inside render');
        return this.props.persons.map((person,index) => {
            return <Person 
            click={()=>this.props.clicked(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event)=>this.props.changed(event,person.id)} />
        });
    };
};

export default Persons;    