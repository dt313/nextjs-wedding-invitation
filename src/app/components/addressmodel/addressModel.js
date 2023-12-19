import classNames from "classnames/bind";
import styles from "./addressModel.module.scss";
import Header from "../intro/header";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { BiHappyHeartEyes } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const cx = classNames.bind(styles);
function AddressModel({
  className,
  img = "",
  title = "",
  date = "",
  time = "",
  time2 = "",
  address = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const style = {
    transform: isInView ? "none" : "scale(0)",
    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
  };
  return (
    <div className={cx("wrapper", className)}>
      <img className={cx("img")} src={img} />

      <h3 className={cx("title")}>{title}</h3>
      <p className={cx("date")}>{date}</p>
      <p className={cx("time")}>{time}</p>
      <p className={cx("time")}>{time2}</p>
      <Header
        className={cx("black-icon")}
        icon={SiHomeassistantcommunitystore}
      />
      <div className={cx("address")}>{address}</div>
      <motion.a
        style={style}
        whileHover={{
          scale: 1.1,
          transition: "all 0.1s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
        whileTap={{
          scale: 0.9,
          transition: "all 0.1s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
        className={cx("btn", "small")}
        ref={ref}
      >
        <BiHappyHeartEyes className={cx("icon")} />
        Happy
      </motion.a>
      <motion.a
        style={style}
        href={`http://maps.google.com/?q=${address}`}
        target="_blank"
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        className={cx("btn")}
      >
        <FaMapMarkerAlt className={cx("icon")} />
        Đường đi
      </motion.a>
    </div>
  );
}

export default AddressModel;
