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
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
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