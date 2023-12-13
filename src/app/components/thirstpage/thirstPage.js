import classNames from "classnames/bind";
import styles from "./thirstPage.module.scss";
import AddressModel from "../addressmodel";
import { useRef } from "react";
import { useInView } from "framer-motion";
const cx = classNames.bind(styles);

function ThirstPage() {
  const weddingInfo = [
    {
      img: "https://hi.possiblewedding.com/wp-content/uploads/2023/01/wedding-ring-1-1.png",
      title: "Nhà trai",
      date: "Ngày 30, 31 tháng 12 năm 2023",
      time: "10.00 AM",
      address: "Đa Đinh , An Bình , Nam Sách, Hải Dương",
    },

    {
      img: "https://hi.possiblewedding.com/wp-content/uploads/2023/01/wedding-arch-1-1-1.png",
      title: "Nhà gái",
      date: "Ngày 30, 31 tháng 12 năm 2023",
      time: "10.00 AM",
      address: "Xóm 13 , An Đông , An Bình , Nam Sách , Hải Dương",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const style = {
    transform: isInView ? "none" : "translateY(700px)",
    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
  };

  return (
    <div className={cx("wrapper")} ref={ref}>
      <div className={cx("box")} style={style}>
        <h3 className={cx("title")}>Đám cưới sẽ được tổ chức vào</h3>

        <div className={cx("addresses")}>
          {weddingInfo.map((info, index) => (
            <AddressModel
              key={index}
              img={info.img}
              title={info.title}
              date={info.date}
              time={info.time}
              address={info.address}
            />
          ))}
        </div>

        <p className={cx("footer-text")}>
          Chúng tôi rất vui với sự tham dự của bạn
        </p>
      </div>
    </div>
  );
}

export default ThirstPage;
