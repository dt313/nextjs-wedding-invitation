import classNames from "classnames/bind";
import styles from "./secondPage.module.scss";
import Infomation from "../infomation";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cx = classNames.bind(styles);
function SecondPage() {
  const info = [
    {
      name: "Linh",
      fullname: "Lê Khánh Linh",
      gender: "female",
      fatherName: "Lê Đình Thịnh",
      motherName: "Nguyễn Thị Kim Anh",
      avatar:
        "https://hi.possiblewedding.com/wp-content/uploads/2022/05/so-tel-me-when.jpg",
    },
    {
      name: "Đức",
      fullname: "Lê Đình Đức",
      gender: "male",
      fatherName: "Lê Đình Đản",
      motherName: "Phạm Thị Ngà",
      avatar:
        "https://hi.possiblewedding.com/wp-content/uploads/2022/05/siaaahhh.jpg",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  let style = {
    transform: isInView ? "none" : "scale(0)",
    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
  };

  return (
    <div className={cx("wrapper")} ref={ref}>
      <h3 className={cx("title")} style={style}>
        Groom and Bride
      </h3>

      <p className={cx("description")} style={style}>
        Chúng tôi vui mừng thông báo đám cưới của chúng tôi với bạn, gia đình và
        bạn bè của chúng tôi:
      </p>

      <div className={cx("infomation")}>
        {info.map((inf, index) => {
          return (
            <Infomation
              className={cx("info")}
              key={index}
              name={inf.name}
              fullname={inf.fullname}
              gender={inf.gender}
              fatherName={inf.fatherName}
              motherName={inf.motherName}
              avatar={inf.avatar}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SecondPage;
