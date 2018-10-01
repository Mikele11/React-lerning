import React, { Component } from 'react'
import Aux1 from '../../hoc/Aux1'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    /*
    constructor (props) {
        super(props);
        this.state = {

        };
    }
    */
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render () {
        return (
            <Aux1>
                <Burger ingredients={this.state.ingredients} />
                <div>Burger Controls</div>
            </Aux1>
        );
    }
}

export default BurgerBuilder;