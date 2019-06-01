import React, { Component } from 'react';
import classes from './Phase1.module.css';
import phase1 from '../Media/phase1.jpg';
import phase2 from '../Media/phase3.jpg'
class Phase1 extends Component {
    render() {
        return (
            <div className={classes.container}>
           
                <div className={classes.block1}></div>
                <div className={classes.block2}></div>
           
               
                <div className={classes.main}>
                    <div className={classes.first}>
                        <div className={classes.firstleft}>
                            <img src={phase1} className={`${classes.phase1img} ${classes.img}`}/>
                        </div>
                        <div className={classes.firstright}>
                            <div className={classes.header}>
                                <div className={classes.title}>
                                    <span className={classes.colorchange}>Explore</span> all of Angel City
                                </div>
                                <div className={classes.title2}>Excitment around every corner</div>
                                <div className={classes.text}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio deserunt error maxime earum officiis ullam quod doloribus pariatur magnam exercitationem praesentium sit, vel tempore, beatae esse ducimus recusandae itaque odit exercitationem praesentium sit?
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.second}>
                        <div className={classes.secondleft}>
                        <img src={phase2} className={`${classes.phase2img} ${classes.img}`}/>
                        </div>
                        <div className={classes.secondright}>
                       
                        <div className={classes.secondheader}>
                                <div className={classes.title}>
                                    <span className={classes.colorchange}>Dive</span> head first into action
                                </div>
                                <div className={classes.title2}>New terrain. New moves.</div>
                                <div className={classes.text}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio deserunt error maxime earum officiis ullam quod doloribus pariatur magnam exercitationem praesentium sit, vel tempore, beatae esse ducimus recusandae itaque odit exercitationem praesentium sit?
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