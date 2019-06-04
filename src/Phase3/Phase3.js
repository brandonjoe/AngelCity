import React, { Component } from "react";
import classes from "./Phase3.module.css";
import phase31 from "../Media/phase3.png";
class Phase3 extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.main}>
          <div className={classes.left}>
            {/* <div className={classes.block1}></div> */}
            <img
              src={phase31}
              className={`${classes.phase31img} ${classes.img}`}
            />
            <div className={classes.pilotinfo}>
              <div className={classes.data}>
                <div className={classes.stat}>Pilot:</div>
                <div className={classes.value}>Jack Cooper</div>
              </div>
              <div className={classes.data}>
                <div className={classes.stat}>Born:</div>
                <div className={classes.value}>10.06.87</div>
              </div>
              <div className={classes.data}>
                <div className={classes.stat}>Homeworld:</div>
                <div className={classes.value}>Earth</div>
              </div>
              <div className={classes.data}>
                <div className={classes.stat}>Combat Unit:</div>
                <div className={classes.value}>41MRB-E</div>
              </div>
              <div className={classes.data}>
                <div className={classes.stat}>Titan:</div>
                <div className={classes.value}>Vanguard BT-7274</div>
              </div>
            </div>
          </div>
          <div className={classes.right}>
          <div className={classes.header}>
                <div className={classes.title}>
                  <span className={classes.colorchange}>Unbreakable</span> bond
                </div>
                <div className={classes.title2}>
                  Receptive. Resourceful. Relentless.
                </div>
                <div className={classes.text}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Optio deserunt error maxime earum officiis ullam quod
                  doloribus pariatur magnam exercitationem praesentium sit, vel
                  tempore, beatae esse ducimus recusandae itaque odit
                  exercitationem praesentium sit?
                    <br />
                    <br />
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis officia accusamus nam repellendus veniam cumque sint, quam vero magnam aspernatur corporis veritatis, adipisci et nemo tenetur eaque eligendi necessitatibus maiores.
                </div>
              </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Phase3;
