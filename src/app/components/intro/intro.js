"use client";
import { useRef } from "react";
import classNames from "classnames/bind";
import styles from "./intro.module.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { motion, useInView } from "framer-motion";
import Header from "./header";
import Arrow from "~/app/components/arrow";
const cx = classNames.bind(styles);

function IntroPage({ handleOpen, name, params }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  let style = {
    transform: isInView ? "none" : "scale(0)",
    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
  };

  return (
    <div className={cx("wrapper")} ref={ref}>
      <div
        className={cx("block-wrapper")}
        style={{
          transform: isInView ? "none" : "translateY(500px); opacity: 0",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className={cx("block")}>
          <div className={cx("left")}>
            <Header style={style} />

            <div className={cx("img-box")}>
              <img
                className={cx("img")}
                src="https://hi.possiblewedding.com/wp-content/uploads/2022/05/cody-black-VDb0wxbfG6k-unsplash_compressed-1.jpg"
              />
            </div>
          </div>
          <div className={cx("right")}>
            <div className={cx("text-box")}>
              <div className={cx("name-box")}>
                <h3 className={cx("name")}>Yosua</h3>
                <span className={cx("and")}>and</span>
                <h3 className={cx("name")}>Yosua</h3>
              </div>

              <div className={cx("dear-box")}>
                <p className={cx("dear")}>Dear. </p>
                <span className={cx("dear-name")}>{name}</span>
              </div>
            </div>

            <Arrow />

            <motion.button
              className={cx("btn")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleOpen}
            >
              <span className={cx("heart-icon")}>
                <AiOutlineHeart className={cx("icon")} />
              </span>
              Open Invitation
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
