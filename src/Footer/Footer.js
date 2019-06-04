import React, { Component } from 'react';
import classes from "./Footer.module.css"
class Footer extends Component {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.header}>
                    <div className={classes.title}>© Brandon Joe</div>
                    <div className={classes.secondarytitle}>This site was fully designed and developed by <span ><a className={classes.footer} style={{ textDecoration: 'none', color: '#ff8282' }} href={`http://brandonjoe.com/`}>Brandon Joe</a></span></div>
                </div>
            </div>
        );
    }
}

export default Footer;