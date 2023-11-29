import classNames from "classnames/bind";
import styles from "./preview.module.scss";
import { CgClose } from "react-icons/cg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const cx = classNames.bind(styles);

function Preview({ data }) {
  let images = [];
  const a = data.map((b) => {
    const d = b.imgs.map((c) => {
      images.push(c);
    });
  });

  console.log(images);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("nav")}>
        <span className={cx("paging")}>10/10</span>

        <CgClose className={cx("icon")} />
      </div>

      <div className={cx("container")}></div>
    </div>
  );
}

export default Preview;
