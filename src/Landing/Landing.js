import React, { Component } from 'react';
import classes from './Landing.module.css'
class Landing extends Component {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.main}>
                    <div className={classes.header}>
                        <div className={classes.title}>
                            Reclaim Beauty
                        </div>
                        <div className={classes.title2}>
                            Angel City returns
                        </div>
                        <div className={classes.title3}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum esse porro suscipit, repellendus dicta aliquid atque voluptate tempora cum? Rem quasi consectetur soluta corporis deserunt quos tempora itaque dolorum perspiciatis.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;