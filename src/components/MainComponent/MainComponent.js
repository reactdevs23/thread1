import React from "react";
import { FaAngleDown } from "react-icons/fa6";

import classes from "./MainComponent.module.css";

import RightCurve from "../../images/RightCurve";
import LeftCurve from "../../images/LeftCurve";

const MainComponent = ({ header, user1, user2, borderColor }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center w-full"
      style={{ background: "var(--mainBg)" }}
    >
      <div className={classes.myWrapper}>
        <div className={classes.headingContainer}>
          <h3
            className={classes.subHeading}
            style={{ "--color": header.subHeadingColor }}
          >
            {header.subHeading}
          </h3>
          <h1
            className={classes.heading}
            style={{ "--color": header.headingColor }}
          >
            {header.heading}
          </h1>
        </div>
        <div className={classes.mainWrapper}>
          <div className={classes.userContainer}>
            <div className={classes.userDetails}>
              <div className={classes.userIcon}>{user1.userIcon}</div>
              <p
                className={classes.userName}
                style={{ "--color": user1.nameColor }}
              >
                {user1.name}
              </p>
            </div>
            <div
              className={[classes.userDetails, classes.userDetails2].join(" ")}
            >
              <div className={classes.userIcon}>{user2.userIcon}</div>
              <p
                className={classes.userName}
                style={{ "--color": user2.nameColor }}
              >
                {user2.name}
              </p>
            </div>
          </div>
          <div
            className={classes.wrapper}
            style={{ "--borderColor": borderColor }}
          >
            {user1.data.map((el, i) => (
              <div className={classes.container} key={i}>
                <div className={classes.user1}>
                  <p
                    className={classes.date}
                    style={{ "--color": el.dateColor }}
                  >
                    {el.date}
                  </p>
                  <div className={classes.messageBox} style={{ "--bg": el.bg }}>
                    <div className={classes.curve}>
                      <LeftCurve color={el.bg} />
                    </div>
                    <div className={classes.icon}>{user2.icon}</div>
                    <p
                      className={classes.messsage}
                      style={{ "--color": el.infoColor }}
                    >
                      {el.info}
                    </p>
                  </div>
                </div>{" "}
                {user2.data[i] && (
                  <div className={classes.user2}>
                    <p
                      className={classes.date}
                      style={{ "--color": user2.data[i].dateColor }}
                    >
                      {user2.data[i].date}
                    </p>
                    <div
                      className={classes.messageBox}
                      style={{ "--bg": user2.data[i].bg }}
                    >
                      {" "}
                      <div className={classes.curve}>
                        <RightCurve color={user2.data[i].bg} />
                      </div>
                      <div className={classes.icon}>{user1.icon}</div>
                      <p
                        className={classes.messsage}
                        style={{ "--color": user2.data[i].infoColor }}
                      >
                        {user2.data[i].info}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <FaAngleDown className={classes.arrowLeft} />
            <FaAngleDown className={classes.arrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
