import classNames from "classnames/bind";
import styles from "./firstPage.module.scss";
import Header from "../intro/header";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { wedding } from "~/app/static/images";
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
            “Tình cảm ấy, chẳng cần cứ phải hét to lên cho cả thế giới biết, chỉ
            cần thủ thỉ cho một người là cả thế giới của mình nghe là đủ rồi.
            Điều quan trọng nhất là đến cuối đường vẫn còn ở bên nhau, đi cạnh
            nhau, nắm tay nhau, rung động vì nhau. Cứ thế thôi là đủ rồi!”
          </p>
        </div>

        <div className={cx("img-box")}>
          <img className={cx("img")} src={wedding.gray7} alt="wedding" />
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
