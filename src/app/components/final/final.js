import classNames from "classnames/bind";
import styles from "./final.module.scss";
import { useRef } from "react";
import { useInView } from "framer-motion";

const cx = classNames.bind(styles);
function Final() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const style = {
    transform: isInView ? "none" : "scale(0)",
    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
  };
  return (
    <div className={cx("wraper")}>
      <h3 className={cx("title")}>Cảm ơn</h3>
      <div className={cx("img-box")}>
        <img
          ref={ref}
          style={style}
          className={cx("img")}
          src="https://hi.possiblewedding.com/wp-content/uploads/2022/05/nathan-dumlao-9UDwXxaPxZc-unsplash_compressed-2.jpg"
        />
      </div>

      <span className={cx("final-text")}>
        Hẹn gặp bạn vào ngày quan trọng của chúng tôi
      </span>
      <h2 className={cx("name")}>Đức và Linh</h2>
    </div>
  );
}

export default Final;
