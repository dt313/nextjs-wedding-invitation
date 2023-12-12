"use client";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./wishes.module.scss";

const cx = classNames.bind(styles);

const WISHES = [
  {
    name: "Jonh Weh",
    wish: "Please kindly help us prepare everything better by confirming your attendance to our wedding event",
    isAttend: true,
  },
  {
    name: "Jonh Weh",
    wish: "Please kindly help us prepare everything better by confirming your attendance to our wedding event",
    isAttend: true,
  },
  {
    name: "Jonh Weh",
    wish: "Please kindly help us prepare everything better by confirming your attendance to our wedding event",
    isAttend: false,
  },
  {
    name: "Jonh Weh",
    wish: "Please kindly help us prepare everything better by confirming your attendance to our wedding event",
    isAttend: true,
  },
  {
    name: "Jonh Weh",
    wish: "Please kindly help us prepare everything better by confirming your attendance to our wedding event",
    isAttend: true,
  },
  {
    name: "Jonh Weh",
    wish: "Please kindly help us prepare everything better by confirming your attendance to our wedding event",
    isAttend: true,
  },
  {
    name: "Jonh Weh",
    wish: "Please kindly help us prepare everything better by confirming your attendance to our wedding event",
    isAttend: false,
  },
  {
    name: "Jonh Weh",
    wish: "Please kindly help us prepare everything better by confirming your attendance to our wedding event",
    isAttend: true,
  },
];

function Wishes() {
  const [wishes, setWishes] = useState(WISHES || []);
  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("title")}>ALL WISHES FOR YOUU</h2>
      <div className={cx("container")}>
        {wishes.length > 0 ? (
          wishes.map((w, index) => {
            return (
              <div className={cx("wish")} key={index}>
                <span className={cx("name")}>{w.name}</span>
                <p className={cx("content")}>{w.wish}</p>
              </div>
            );
          })
        ) : (
          <p>Nodata</p>
        )}
      </div>

      <a href="/" className={cx("link")}>
        Go to back
      </a>
    </div>
  );
}

export default Wishes;
