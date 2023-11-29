import classNames from "classnames/bind";
import styles from "./fouthPage.module.scss";
import { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import Analyst from "~/app/components/analyst";
const cx = classNames.bind(styles);

const WISHES = [
  {
    name: "Jonh Weh",
    wish: "Please kindly help us prepare everything better by confirming your attendance to our wedding event",
    isAttend: true,
  },
  {
    name: "Jonh Weh",
    wish: "Please kindly help us prepare everything better by confirming your attendance to our wedding event",
    isAttend: true,
  },
  {
    name: "Jonh Weh",
    wish: "Please kindly help us prepare everything better by confirming your attendance to our wedding event",
    isAttend: false,
  },
  {
    name: "Jonh Weh",
    wish: "Please kindly help us prepare everything better by confirming your attendance to our wedding event",
    isAttend: true,
  },
  {
    name: "Jonh Weh",
    wish: "Please kindly help us prepare everything better by confirming your attendance to our wedding event",
    isAttend: true,
  },
  {
    name: "Jonh Weh",
    wish: "Please kindly help us prepare everything better by confirming your attendance to our wedding event",
    isAttend: true,
  },
  {
    name: "Jonh Weh",
    wish: "Please kindly help us prepare everything better by confirming your attendance to our wedding event",
    isAttend: false,
  },
  {
    name: "Jonh Weh",
    wish: "Please kindly help us prepare everything better by confirming your attendance to our wedding event",
    isAttend: true,
  },
];

function FouthPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isWishesTab, setIsWishesTab] = useState(true);
  const [wishes, setWishes] = useState(WISHES || []);
  const [name, setName] = useState(" ");
  const [wish, setWish] = useState(" ");
  const [isAttend, setIsAttend] = useState(null);
  const [error, setError] = useState(null);

  const style = {
    transform: isInView ? "none" : "translateY(700px)",
    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };

  const checkError = ({ name, wish, isAttend }) => {
    if (name.trim() === "") {
      setError("Vui long nhap ten cua ban");
      return false;
    }
    if (wish.trim() === "") {
      setError("Vui long nhap loi chuc cua ban");
      return false;
    }
    if (isAttend === null) {
      setError("Hay cho chung toi biet ban co den tham du khong");
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    const isValid = checkError({ name, wish, isAttend });
    if (isValid) {
      console.log({ name, wish, isAttend });
      setWishes((pre) => [{ name, wish, isAttend }, ...pre]);
      setName("");
      setWish("");
    }
  };

  return (
    <div className={cx("wrapper")} ref={ref}>
      <div className={cx("container")}>
        <div className={cx("box")} style={style}>
          <div className={cx("left")}>
            <h4 className={cx("title")}>Reservation</h4>
            <span className={cx("line")}></span>
            <p className={cx("description")}>
              Please kindly help us prepare everything better by confirming your
              attendance to our wedding event with the following RSVP form:
            </p>

            <div className={cx("form")}>
              <div className={cx("input-block")}>
                <span className={cx("lable")}>Name</span>
                <input
                  type="text"
                  className={cx("input")}
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setError(null);
                  }}
                />
              </div>
              <div className={cx("input-block")}>
                <span className={cx("lable")}>Wishes</span>
                <textarea
                  type="text"
                  className={cx("input", "large")}
                  placeholder="Enter your wishes for them"
                  value={wish}
                  onChange={(e) => {
                    setWish(e.target.value);
                    setError(null);
                  }}
                />
              </div>

              <div className={cx("input-block")}>
                <span className={cx("lable")}>Will you attend ?</span>
                <div className={cx("check")}>
                  <input
                    type="radio"
                    name="attend"
                    value="yes"
                    className={cx("radio")}
                    id="yes"
                    onChange={() => {
                      setIsAttend(true);
                      setError(null);
                    }}
                  />
                  <label htmlFor="yes" className={cx("option")}>
                    Yes
                  </label>
                </div>
                <div className={cx("check")}>
                  <input
                    id="no"
                    type="radio"
                    name="attend"
                    value="no"
                    className={cx("radio")}
                    onChange={() => {
                      setIsAttend(false);
                      setError(null);
                    }}
                  />
                  <label htmlFor="no" className={cx("option")}>
                    No
                  </label>
                </div>

                {error && <p className={cx("error")}>{error}</p>}
              </div>
              <motion.button
                className={cx("btn")}
                onClick={handleSubmit}
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
              >
                Send
              </motion.button>
            </div>
          </div>

          <div className={cx("right")}>
            <div className={cx("nav")}>
              <p
                className={cx("item", isWishesTab && "active")}
                onClick={() => setIsWishesTab(true)}
              >
                Wishes
              </p>
              <p
                className={cx("item", !isWishesTab && "active")}
                onClick={() => setIsWishesTab(false)}
              >
                Attend
              </p>
            </div>
            <div className={cx("body")}>
              {isWishesTab ? (
                <div className={cx("wishes")}>
                  <div className={cx("wishes-container")}>
                    {wishes.length > 0 ? (
                      wishes.map((w, index) => {
                        return (
                          <div className={cx("wish")} key={index}>
                            <span className={cx("wish-name")}>{w.name}</span>
                            <p className={cx("wish-content")}>{w.wish}</p>
                          </div>
                        );
                      })
                    ) : (
                      <p className={cx("error")}>nodata</p>
                    )}
                  </div>
                  {wishes.length > 0 && (
                    <a className={cx("see-all")} href="/wishes">
                      See all
                    </a>
                  )}
                </div>
              ) : (
                <div className={cx("analyst")}>
                  <Analyst data={wishes} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FouthPage;
