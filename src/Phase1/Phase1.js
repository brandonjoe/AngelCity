import React, { Component } from 'react';
import classes from './Phase1.module.css';
import phase1 from '../Media/phase1.jpg';
class Phase1 extends Component {
    render() {
        return (
            <div className={classes.container}>

                <div className={classes.main}>
                    <div className={classes.first}>
                        <div className={classes.left}>
                            <img src={phase1} className={`${classes.img}`}/>
                        </div>
                        <div className={classes.right}>
                            <div className={classes.header}>
                                <div className={classes.title}>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Phase1;