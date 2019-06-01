import React, { Component } from "react";
import classes from "./Intro.module.css";
import intro from "../Media/intro2.png";
class Intro extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.block} />
        <div className={classes.main}>
          <div className={classes.left}>
            <img src={intro} className={classes.image} />{" "}
          </div>
          <div className={classes.right}>
            <div className={classes.header}>
              <div className={classes.title}>
                Everything you love,
                <br />
                <span className={classes.colorchange}>Remastered</span>
              </div>
              <div className={classes.title2}>
                Welcome back to Angel City, Pilots
              </div>
              <div className={classes.title3}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur rerum quisquam laborum dolores ea laudantium, dolore
                adipisci voluptate veniam autem, eveniet deserunt ducimus. Harum
                nobis incidunt iusto possimus officia architecto. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Nobis nemo
                obcaecati praesentium tempora dolore sequi, molestiae quasi
                saepe?
              </div>
            </div>
            <iframe
              src="https://www.youtube.com/embed/I_6hViuy3kc"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
