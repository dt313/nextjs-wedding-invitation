import classNames from "classnames/bind";
import styles from "./footer.module.scss";
const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("text")}>
        Created by{" "}
        <a
          className={cx("link")}
          href="https://www.facebook.com/profile.php?id=100015195702096"
          target="_blank"
        >
          Danh Tuan
        </a>
      </p>
      <p className={cx("text")}>
        Clone from{" "}
        <a
          className={cx("link")}
          href="https://hi.possiblewedding.com/gold-rose/?u=Nama+Tamu"
          target="_blank"
        >
          https://hi.possiblewedding.com/gold-rose/?u=Nama+Tamu
        </a>
      </p>
    </div>
  );
}

export default Footer;
