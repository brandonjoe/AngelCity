import React, { Component } from 'react';
import classes from './Transition2.module.css';
class Transition2 extends Component {
    render() {
        return (
            <div className={classes.container} >
                <div className={classes.main}>
                    <div className={`${classes.block}`}>
                        <div className={classes.title}>
                        <span className={classes.colorchange}>Fight</span> as one
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Transition2;