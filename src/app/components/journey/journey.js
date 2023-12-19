import classNames from "classnames/bind";
import styles from "./journey.module.scss";
import Image from "./image";
import Story from "./story";
import Preview from "../preview/preview";
import { useState } from "react";
import { wedding } from "~/app/static/images";
const cx = classNames.bind(styles);

const album = [
  {
    imgs: [
      {
        id: 1,
        img: wedding.red1,
      },

      {
        id: 2,
        img: wedding.red3,
      },
      {
        id: 3,
        img: wedding.red4,
      },

      {
        id: 4,
        img: wedding.red6,
      },
    ],
  },
  {
    imgs: [
      {
        id: 5,
        img: wedding.red4,
      },
      {
        id: 6,
        img: wedding.red7,
      },
      {
        id: 7,
        img: wedding.red8,
      },
      {
        id: 8,
        img: wedding.red9,
      },
    ],
  },
  {
    imgs: [
      {
        id: 9,
        img: wedding.gray3,
      },

      {
        id: 10,
        img: wedding.gray6,
      },
      {
        id: 11,
        img: wedding.gray4,
      },
      {
        id: 12,
        img: wedding.gray5,
      },
    ],
  },
  {
    imgs: [
      {
        id: 13,
        img: wedding.gray7,
      },
      {
        id: 14,
        img: wedding.gray8,
      },
      {
        id: 15,
        img: wedding.gray9,
      },
    ],
  },
];

const story = [
  {
    date: "30 May 2019",
    content:
      "Chàng và nàng bắt đầu hành trình của họ dưới ánh mắt đắm say và nụ cười ngọt ngào, nhưng chính sự gặp gỡ ấy đã đánh thức tình yêu mãnh liệt trong trái tim, để rồi họ bắt đầu một chương mới với câu chuyện tình yêu không gì tuyệt vời hơn.",
  },
  {
    date: "28 Dec 2023",

    content:
      "Giữa bức tranh tình yêu và hạnh phúc, họ trải nghiệm giây phút trọng đại, khiến trái tim họ đập nhanh hơn và tình cảm của họ trở nên bền vững, hứa hẹn một hành trình đầy ắp niềm vui và sự hiểu biết",
  },
  {
    date: "30(31) Dec 2023",
    content:
      "Họ trao nhau lời hứa vĩnh cửu, kết nối trái tim và linh hồn để bắt đầu một hành trình chung đẹp đẽ, nơi mọi khoảnh khắc trở thành kỷ niệm vĩnh viễn của tình yêu",
  },
];

function Journey() {
  const [isShow, setIsShow] = useState(false);
  const [index, setIndex] = useState(0);
  const handleClosePreview = () => {
    setIsShow(false);
  };
  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("title")}>Hành trình của chúng tôi</h3>

      {/* <div className={cx("video-block")}>
        <iframe
          className={cx("video")}
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/XHOmBV4js_E"
          title="Video Placeholder"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div> */}

      {/* <Preview data={album} /> */}

      <div className={cx("album")}>
        {album.map((imgs, index) => {
          return (
            <div className={cx("column")} key={index}>
              {imgs.imgs.map((img, index) => {
                return (
                  <div
                    className={cx("img-block")}
                    onClick={() => {
                      setIsShow(true);
                      setIndex(img.id);
                    }}
                  >
                    <Image key={index} img={img.img} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {isShow && (
        <Preview data={album} onClose={handleClosePreview} index={index} />
      )}

      <div className={cx("story")}>
        {story.map((sto, index) => {
          return <Story story={sto} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Journey;
