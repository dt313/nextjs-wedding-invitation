import classNames from "classnames/bind";
import styles from "./firstPage.module.scss";
import Header from "../intro/header";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cx = classNames.bind(styles);

function FirstPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  let style = {
    transform: isInView ? "none" : "scale(0)",
    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };

  let headerStyle = {
    transform: isInView ? "none" : "translateY(-200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
  };

  return (
    <div className={cx("wrapper")} ref={ref}>
      <div className={cx("box")} style={style}>
        <div className={cx("text-box")}>
          <h3 className={cx("title")}>Tie The Knot</h3>
          <Header style={headerStyle} />
          <p className={cx("description")}>
            “Anh muốn đem cả thế giới này tặng cho em cái em thích cũng là cái
            anh thích . Cho dù khi em 70 , 80 tuổi , rằng có rụng hết thì vẫn
            mãi là công chúa của anh . Em thường nói , sau này em già đi thì
            phải làm thế nào . Anh chỉ có thể nói là anh đã chiều hư em rồi . Vì
            chỉ có như vậy người khác mới không thể cướp em đi .”
          </p>
        </div>

        <div className={cx("img-box")}>
          <img
            className={cx("img")}
            src="https://hi.possiblewedding.com/wp-content/uploads/2022/05/o-gitu-2.jpg"
            alt="wedding"
          />
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
