import classNames from "classnames/bind";
import styles from "./gitf.module.scss";
import { FaGift } from "react-icons/fa";
import { useState } from "react";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Card from "./card";

const cx = classNames.bind(styles);
function Gift() {
  const [isShowCard, setIsShowCard] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  let style = {
    transform: isInView ? "none" : "scale(0)",
    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5",
  };

  console.log(isInView);

  return (
    <div className={cx("wrapper")} ref={ref}>
      <h3 className={cx("title")}>Quà cưới</h3>
      <p className={cx("description")} style={style}>
        Dành cho gia đình (bạn bè) muốn gửi quà. Chúng tôi sẽ rất vui khi nhận
        được nó. Nhấn vào các nút bên dưới để gửi chúng cho chúng tôi:
      </p>
      <button
        className={cx("btn")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsShowCard(!isShowCard)}
        style={style}
      >
        <FaGift className={cx("icon")} />
        Tặng quà
      </button>
      {isShowCard && (
        <div className={cx("card-box")}>
          <Card name="Lê Khánh Linh" number="1115122004" bank="Techcombank" />
          <Card name="Lê Đình Đức" number="11522999999999" bank="Techcombank" />
        </div>
      )}
    </div>
  );
}

export default Gift;
