import React, { Component } from 'react';
import classes from './Block.module.css'
class Block extends Component {
    render() {
        return (
            <div className={classes.container} style={{backgroundColor:`${this.props.color}`}}>
                {this.props.text}
            </div>
        );
    }
}

export default Block;