import classNames from "classnames/bind";
import styles from "./journey.module.scss";
import Image from "./image";
import Story from "./story";
import Preview from "../preview/preview";
import { useState } from "react";
const cx = classNames.bind(styles);

const album = [
  {
    imgs: [
      {
        id: 1,
        img: "https://hi.possiblewedding.com/wp-content/uploads/2022/05/vitor-pinto-iqA2-nRO0bQ-unsplash_compressed.jpg",
      },
      {
        id: 2,
        img: "https://hi.possiblewedding.com/wp-content/uploads/2022/05/alvin-mahmudov-VUMdDPNxTsg-unsplash-2.jpg",
      },
    ],
  },
  {
    imgs: [
      {
        id: 3,
        img: "https://hi.possiblewedding.com/wp-content/uploads/2022/05/pablo-heimplatz-OSboZGvoEz4-unsplash-2_compressed.jpg",
      },
      {
        id: 4,
        img: "https://hi.possiblewedding.com/wp-content/uploads/2022/05/khamkeo-vilaysing-OcxlTBbb6SY-unsplash_compressed-1.jpg",
      },
      {
        id: 5,
        img: "https://hi.possiblewedding.com/wp-content/uploads/2022/05/khamkeo-vilaysing-OcxlTBbb6SY-unsplash_compressed-1.jpg",
      },
    ],
  },
  {
    imgs: [
      {
        id: 6,
        img: "https://hi.possiblewedding.com/wp-content/uploads/2022/05/nathan-dumlao-9UDwXxaPxZc-unsplash_compressed-2.jpg",
      },
      {
        id: 7,
        img: "https://hi.possiblewedding.com/wp-content/uploads/2022/10/bride-and-groom-on-in-the-woods-2021-12-14-01-11-54-utc.jpg",
      },
    ],
  },
  {
    imgs: [
      {
        id: 8,
        img: "https://hi.possiblewedding.com/wp-content/uploads/2022/05/marcus-lewis-87DgFV9SOc4-unsplash_compressed.jpg",
      },
      {
        id: 9,
        img: "https://hi.possiblewedding.com/wp-content/uploads/2022/05/chuttersnap-NYqEk7a42yc-unsplash_compressed-1.jpg",
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

      <div className={cx("video-block")}>
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
      </div>

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
