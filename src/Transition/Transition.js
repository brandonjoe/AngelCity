import React, { Component } from 'react';
import classes from './Transition.module.css';
class Transition extends Component {
    render() {
        return (
            <div className={classes.container} >
                <div className={classes.main}>
                    <div className={`${classes.block}`}>
                        <div className={classes.title}>
                        <span className={classes.colorchange}>Customize</span> like never before 
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Transition;