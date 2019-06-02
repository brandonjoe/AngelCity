import React, { Component } from "react";
import classes from "./Phase2.module.css";
import phase21 from "../Media/phase2-1.png";
class Phase2 extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.main}>
          <div className={classes.left}>
            <div className={classes.header}>
              <div className={classes.title}>
                <span className={classes.colorchange}>Limited</span> equipment
                and gear
              </div>
              <div className={classes.title3}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem voluptas dignissimos magnam sequi reprehenderit adipisci
                recusandae beatae quaerat natus officiis alias quas ullam
                consectetur explicabo sed, nisi, fuga nesciunt distinctio!
              </div>
              <div className={classes.title3}>
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                illo nisi, quaerat omnis corrupti aut est itaque iste maiores,
                et quasi esse quae distinctio sunt laudantium ex velit nemo
                earum.
              </div>
            </div>
          </div>
          <div className={classes.middle}>
            <div className={classes.midblock}>
              <img
                src={phase21}
                className={`${classes.phase21img} ${classes.img}`}
              />
            </div>
            <div className={classes.midblock2}></div>
          </div>
          <div className={classes.right} >
          <div className={classes.header}>
              <div className={classes.title}>
                <span className={classes.colorchange}>New</span> game mode and story
              </div>
              <div className={classes.title3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsam ea odit sed asperiores atque delectus ex numquam? Doloremque soluta, dolores asperiores vero optio perferendis eos unde molestias in est?
              </div>
              <div className={classes.title3}>
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore dolor deleniti laudantium placeat vitae iure adipisci, accusantium temporibus quidem reprehenderit, quia nostrum? At omnis, quod maxime ullam ratione dolore officia!
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Phase2;
