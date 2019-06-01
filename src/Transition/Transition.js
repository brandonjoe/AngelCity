import React, { Component } from 'react';
import classes from './Transition.module.css';
import Block from '../Block/Block';
class Transition extends Component {
    render() {
        return (
            <div className={classes.container} >
                <div className={classes.main}>
                <Block text={'HELLO WORLD'} color={'red'}/>
                <Block />
                </div>
                
            </div>
        );
    }
}

export default Transition;