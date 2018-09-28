import React from 'react'
import Aux1 from '../../hoc/Aux1'
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    console.log('===>>>',classes);
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red 
    }

    if (props.persons.length <= 2 ) { 
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1 ) { 
      assignedClasses.push(classes.bold);
    }

    return (
        <Aux1>
            <h1>{props.appTitle}</h1>
            <p className = {assignedClasses.join(' ')}>This is really working!</p>
            <button
            className={btnClass} 
            onClick={props.clicked}>Toogle Persons</button>
        </Aux1>
    );
}

export default cockpit;