"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./wishes.module.scss";

const cx = classNames.bind(styles);

function Wishes({}) {
  const [wishes, setWishes] = useState([]);
  const searchParams = useSearchParams();

  const name = searchParams.get("name");

  useEffect(() => {
    fetch("https://65788350f08799dc80457e4e.mockapi.io/api/v1/wishes")
      .then((response) => response.json())
      .then((data) => {
        setWishes(data);
      });
  }, []);

  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("title")}>ALL WISHES FOR YOUU</h2>
      <div className={cx("container")}>
        {wishes.length > 0 ? (
          wishes.map((w, index) => {
            return (
              <div className={cx("wish")} key={index}>
                <span className={cx("name")}>{w.name}</span>
                <p className={cx("content")}>{w.wish}</p>
              </div>
            );
          })
        ) : (
          <p>Nodata</p>
        )}
      </div>

      <a href={`/${name}`} className={cx("link")}>
        Go to back
      </a>
    </div>
  );
}

export default Wishes;
