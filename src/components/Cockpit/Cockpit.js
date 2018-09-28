import React from 'react'
import Aux1 from '../../hoc/Aux1'
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
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
            <div className={classes.Cockpit}>
                <p className = {assignedClasses.join(' ')}>Its realy works</p>
                <button 
                    className = {btnClass}
                    onClick={props.clicked}>Toogle person</button>    
            </div>
        </Aux1>
    );
}

export default cockpit;