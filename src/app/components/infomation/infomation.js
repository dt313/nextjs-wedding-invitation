import classNames from "classnames/bind";
import styles from "./infomation.module.scss";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import images from "~/app/static/images";
const cx = classNames.bind(styles);

function Infomation({
  className,
  name = "",
  fullname = "",
  gender = "",
  motherName = "",
  fatherName = "",
  avatar = "",
  link = "",
}) {
  const ref = useRef(null);
  const refText = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInViewText = useInView(refText, { once: true });

  const styleLeft = {
    transform: isInView ? "none" : "translate(-300px)",

    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };

  const styleRight = {
    transform: isInView ? "none" : "translate(300px)",
    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)  0.5s",
  };

  const styleText = {
    transform: isInViewText ? "none" : "scale(0)",
    opacity: isInViewText ? 1 : 0,

    transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };

  return (
    <div className={cx("wrapper", className)} ref={ref}>
      <img
        className={cx("avatar")}
        src={avatar}
        alt={fullname}
        style={gender === "male" ? styleRight : styleLeft}
      />

      <h5 className={cx("fullname")} ref={refText} style={styleText}>
        {fullname}
      </h5>
      <strong className={cx("gender")} style={styleText}>
        {gender === "male" ? "Con trai của :" : "Con gái của :"}
      </strong>
      <div className={cx("family")} style={styleText}>
        <span className={cx("text")}>{"Ông " + fatherName}</span>
        <span className={cx("text")}>&</span>
        <span className={cx("text")}>{"Bà " + motherName}</span>
      </div>

      {/* <motion.a
        className={cx("insta-box")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaInstagram className={cx("icon")} />
      </motion.a> */}

      <img
        className={cx("flower")}
        src={images.flower.default.src}
        style={styleText}
      />
    </div>
  );
}

export default Infomation;
