"use client";
import classNames from "classnames/bind";
import styles from "./page.module.scss";
import Heart from "~/app/components/heart";
import Invitation from "~/app/components/invitation";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function Main({ params }) {
  const [animation, setAnimation] = useState(false);

  const name = decodeURIComponent(params.name) || "You";

  // useEffect(() => {
  //   setAnimation(true);

  //   const timer = setTimeout(() => {
  //     setAnimation(false);
  //     setIsEndAimation(true);
  //   }, 4000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  return (
    <div className={cx("wrapper")}>
      {/* {animation && (
        <div className={cx("heart-block")}>
          <Heart animation={animation} />
        </div>
      )} */}
      {!animation && <Invitation name={name} />}
    </div>
  );
}

export default Main;
