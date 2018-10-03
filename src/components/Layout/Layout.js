import React, { Component } from 'react'
import Aux1 from '../../hoc/Aux1'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler () {
        this.setState({showSideDrawer: false});
    }

    render () {
        return (
            <Aux1>
                <Toolbar />
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler.bind(this)} />
                <main className = { classes.Content } >
                    { this.props.children }
                </main>
            </Aux1>
        );
    }
} 

export default Layout;